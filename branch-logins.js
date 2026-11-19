(() => {
  const usernamePattern=/^[a-z0-9][a-z0-9._-]{2,31}$/;
  function emailForLogin(value){
    const login=String(value).trim();
    if(login.includes('@'))return login;
    const username=login.toLowerCase();
    if(!usernamePattern.test(username))throw new Error('Invalid username');
    return username+'@users.promoflow.invalid';
  }
  window.PromoFlowBranchLogin={emailForLogin};
  async function invokeAccount(body){
    const {data,error}=await client.functions.invoke('manage-branch-login',{body});
    if(!error&&data?.ok)return data;
    let message=data?.error;
    if(!message&&error?.context?.json){try{message=(await error.context.json()).error;}catch{}}
    throw new Error(message||'ບັນທຶກບໍ່ສຳເລັດ');
  }
  window.addBranch=function(){
    if(state.profile?.role!=='admin')return;
    const host=document.getElementById('content');
    host.querySelector('#automaticBranchForm')?.remove();
    const form=document.createElement('form');form.id='automaticBranchForm';form.className='card';form.style.marginTop='16px';
    const title=document.createElement('h2');title.textContent='＋ ສ້າງສາຂາ ແລະບັນຊີເຂົ້າລະບົບ';
    const label=document.createElement('label');label.className='field';label.textContent='ຊື່ສາຂາໃໝ່';
    const name=document.createElement('input');name.required=true;name.maxLength=100;name.autocomplete='off';name.style.width='100%';name.style.padding='12px';label.append(name);
    const description=document.createElement('p');description.textContent='ລະບົບຈະສ້າງຊື່ຜູ້ໃຊ້ ແລະລະຫັດໃຫ້ອັດຕະໂນມັດ';
    const status=document.createElement('p');status.setAttribute('role','status');
    const save=document.createElement('button');save.className='btn primary';save.type='submit';save.textContent='✅ ຢືນຢັນສ້າງສາຂາ';
    const cancel=document.createElement('button');cancel.className='btn danger';cancel.type='button';cancel.textContent='ຍົກເລີກ';cancel.style.marginLeft='8px';cancel.onclick=()=>form.remove();
    form.append(title,label,description,status,save,cancel);host.querySelector('.hero').insertAdjacentElement('afterend',form);name.focus();
    const requestId=crypto.randomUUID();
    form.onsubmit=async event=>{
      event.preventDefault();if(!name.value.trim())return;
      save.disabled=true;cancel.disabled=true;status.textContent='ກຳລັງບັນທຶກ…';
      try{
        const result=await invokeAccount({action:'create_branch',name:name.value.trim(),request_id:requestId});
        // Present credentials before refreshing account data, so a failed refresh
        // cannot hide the only copy of the generated password.
        showCredentials(result);
        form.remove();
        try{await selectBranch();await loadData();await window.openBranchAdmin();}catch{toast('ໂຫຼດຂໍ້ມູນໃໝ່');}
      }catch(error){status.textContent=error.message;save.disabled=false;cancel.disabled=false;}
    };
  };
  function showCredentials(result){
    const overlay=document.createElement('div');overlay.id='newBranchCredentials';
    overlay.style.cssText='position:fixed;inset:0;z-index:1600;background:#071a12b8;display:grid;place-items:center;padding:16px;overflow:auto';
    const card=document.createElement('section');card.className='card';card.setAttribute('role','dialog');card.setAttribute('aria-modal','true');card.setAttribute('aria-labelledby','branchCredentialsTitle');
    card.style.cssText='width:min(100%,500px);max-height:90vh;overflow:auto;background:white;padding:24px;box-sizing:border-box';
    const heading=document.createElement('h2');heading.id='branchCredentialsTitle';heading.textContent='✅ ສ້າງສາຂາສຳເລັດ';
    const branch=document.createElement('p');branch.dataset.noTranslate='';branch.textContent=result.branch_name;
    const hint=document.createElement('p');hint.textContent='ເກັບລະຫັດນີ້ໄວ້ ລະບົບສະແດງພຽງຄັ້ງດຽວ';
    function field(text,value,type){const label=document.createElement('label');label.className='field';label.textContent=text;const input=document.createElement('input');input.readOnly=true;input.type=type;input.value=value;input.style.cssText='width:100%;box-sizing:border-box;padding:12px';input.addEventListener('focus',()=>input.select());label.append(input);card.append(label);return input;}
    card.append(heading,branch,hint);
    const username=field('ຊື່ຜູ້ໃຊ້',result.username,'text');
    const password=field('ລະຫັດຜ່ານ',result.password,'password');
    const showLabel=document.createElement('label'),show=document.createElement('input');show.type='checkbox';show.onchange=()=>password.type=show.checked?'text':'password';showLabel.append(show,document.createTextNode(' ສະແດງລະຫັດ'));card.append(showLabel);
    const status=document.createElement('p');status.setAttribute('role','status');card.append(status);
    const copy=document.createElement('button');copy.type='button';copy.className='btn primary';copy.textContent='📋 ກ໊ອບປີ້ຂໍ້ມູນເຂົ້າລະບົບ';
    copy.onclick=async()=>{try{await navigator.clipboard.writeText(result.branch_name+'\nUsername: '+username.value+'\nPassword: '+password.value);status.textContent='ກ໊ອບປີ້ແລ້ວ';}catch{status.textContent='ກະລຸນາກ໊ອບປີ້ຈາກຊ່ອງດ້ານເທິງ';}};
    const close=document.createElement('button');close.type='button';close.className='btn danger';close.style.margin='8px';close.textContent='ເກັບແລ້ວ — ປິດ';
    close.onclick=()=>{password.value='';username.value='';result.password='';overlay.remove();};
    card.append(copy,close);overlay.append(card);document.body.append(overlay);copy.focus();
  }
  const originalOpen=window.openBranchAdmin;
  window.openBranchAdmin=async function(){
    await originalOpen();
    if(state.profile?.role!=='admin')return;
    const content=document.getElementById('content');
    if(!content||!content.querySelector('.hero'))return;
    content.querySelector('#branchLogins')?.remove();
    const panel=document.createElement('section');
    panel.id='branchLogins';panel.className='card';panel.style.marginTop='18px';
    panel.innerHTML='<h2>🔐 ບັນຊີເຂົ້າສາຂາ</h2><p class="muted">Admin ກຳນົດຊື່ຜູ້ໃຊ້ ແລະລະຫັດຜ່ານໃຫ້ສາຂາ</p>';
    const status=document.createElement('p');status.setAttribute('role','status');
    status.textContent='ກຳລັງໂຫຼດ…';panel.append(status);content.append(panel);
    const {data:accounts,error}=await client.from('branch_login_accounts').select('user_id,username').order('username');
    if(!panel.isConnected)return;
    if(error){status.textContent='ຕ້ອງຕິດຕັ້ງ SQL 21 ແລະຟັງຊັນບັນຊີກ່ອນ';return;}
    status.textContent='';
    const add=document.createElement('button');add.className='btn primary';add.type='button';
    add.textContent='＋ ສ້າງບັນຊີສາຂາ';panel.append(add);
    const editor=document.createElement('div');panel.append(editor);
    add.onclick=()=>showForm(editor,null);
    const list=document.createElement('div');panel.append(list);
    for(const account of accounts||[]){
      const profile=state.profiles.find(p=>p.id===account.user_id);
      const row=document.createElement('div');row.className='staff-row';row.style.flexWrap='wrap';row.style.gap='10px';
      const name=document.createElement('strong');name.dataset.noTranslate='';name.textContent=account.username;
      const branch=document.createElement('span');branch.dataset.noTranslate='';
      branch.textContent=state.branches.find(b=>b.id===profile?.branch_id)?.name||'—';
      const reset=document.createElement('button');reset.className='btn secondary';reset.type='button';reset.textContent='ຕັ້ງລະຫັດໃໝ່';
      reset.onclick=()=>showForm(editor,account);
      row.append(name,branch,reset);list.append(row);
    }
    if(!accounts?.length){const empty=document.createElement('p');empty.textContent='ຍັງບໍ່ມີບັນຊີສາຂາ';list.append(empty);}
  };
  function showForm(host,account){
    const form=document.createElement('form');form.className='card';form.style.marginTop='16px';
    const title=document.createElement('h3');title.textContent=account?'ຕັ້ງລະຫັດໃໝ່':'ສ້າງບັນຊີສາຂາ';form.append(title);
    function field(labelText,input){const wrap=document.createElement('div');wrap.className='field';const label=document.createElement('label');label.textContent=labelText;label.append(input);wrap.append(label);form.append(wrap);return input;}
    let username,branch;
    if(!account){
      username=document.createElement('input');username.required=true;username.minLength=3;username.maxLength=32;
      username.pattern='[A-Za-z0-9][A-Za-z0-9._-]{2,31}';username.autocomplete='off';username.autocapitalize='none';username.spellcheck=false;
      username.placeholder='branch2';field('ຊື່ຜູ້ໃຊ້ (a-z, 0-9, . _ -)',username);
      branch=document.createElement('select');branch.required=true;branch.style.width='100%';branch.style.padding='12px';
      branch.add(new Option('ເລືອກສາຂາ',''));
      for(const item of state.branches.filter(b=>b.active))branch.add(new Option(item.name,item.id));
      branch.value=state.branchId||'';field('ສາຂາ',branch);
    }else{const name=document.createElement('p');name.dataset.noTranslate='';name.textContent=account.username;form.append(name);}
    const password=document.createElement('input');password.type='password';password.minLength=6;password.maxLength=128;password.required=true;password.autocomplete='new-password';field('ລະຫັດຜ່ານ (6–128 ຕົວ)',password);
    const confirm=document.createElement('input');confirm.type='password';confirm.required=true;confirm.autocomplete='new-password';field('ຢືນຢັນລະຫັດໃໝ່',confirm);
    const status=document.createElement('p');status.setAttribute('role','status');form.append(status);
    const save=document.createElement('button');save.type='submit';save.className='btn primary';save.textContent='✅ ຢືນຢັນບັນທຶກ';
    const cancel=document.createElement('button');cancel.type='button';cancel.className='btn danger';cancel.textContent='ຍົກເລີກ';cancel.style.marginLeft='8px';
    cancel.onclick=()=>{password.value='';confirm.value='';host.replaceChildren();};form.append(save,cancel);
    form.onsubmit=async event=>{
      event.preventDefault();
      if(password.value!==confirm.value){status.textContent='ລະຫັດສອງຊ່ອງບໍ່ຄືກັນ';return;}
      save.disabled=true;cancel.disabled=true;status.textContent='ກຳລັງບັນທຶກ…';
      const body=account?{action:'reset_password',user_id:account.user_id,password:password.value}:{action:'create',username:username.value,branch_id:branch.value,password:password.value};
      try{
        const {data,error}=await client.functions.invoke('manage-branch-login',{body});
        if(error||!data?.ok){
          let message=data?.error;
          if(!message&&error?.context?.json){try{message=(await error.context.json()).error;}catch{}}
          status.textContent=message||'ບັນທຶກບໍ່ສຳເລັດ';return;
        }
        password.value='';confirm.value='';
        toast(account?'ປ່ຽນລະຫັດສຳເລັດ':'ສ້າງບັນຊີສາຂາແລ້ວ');
        await loadData();await window.openBranchAdmin();
      }catch{status.textContent='ບໍ່ສາມາດຕິດຕໍ່ຟັງຊັນບັນຊີໄດ້';}
      finally{save.disabled=false;cancel.disabled=false;body.password='';}
    };
    host.replaceChildren(form);(username||password).focus();
  }
})();
