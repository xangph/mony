(() => {
  const menus=[document.querySelector('#financeMenuPanel nav'),document.querySelector('#pageMenuPanel nav')].filter(Boolean);
  if(!menus.length)return;
  function apply(profile){for(const nav of menus){
    nav.querySelectorAll('[data-complete-menu]').forEach(el=>el.remove());
    const before=nav.querySelector('details')||nav.lastElementChild;
    const items=[['newweek','🗓️ ສ້າງອາທິດໃໝ່',false],['staff','👥 ຈັດການພະນັກງານ',true],['branches','🏢 ຈັດການສາຂາ',true],['password','🔐 ປ່ຽນລະຫັດຜ່ານ',false]];
    for(const [page,label,admin] of items){if(admin&&profile.role!=='admin')continue;const a=document.createElement('a');a.dataset.completeMenu=page;a.href='../index.html?page='+page;a.textContent=label;nav.insertBefore(a,before);}
  }}
  async function refresh(){try{
    const authClient=typeof financeAuthClient!=='undefined'?financeAuthClient:client;
    const {data:{session}}=await authClient.auth.getSession();if(!session)return;
    const {data:profile,error}=await authClient.from('profiles').select('role,active,branch_id').eq('id',session.user.id).single();
    if(error||!profile?.active)return;apply(profile);
    if(profile.role==='admin'){
      const {data:branches,error:branchError}=await authClient.from('branches').select('id,name').eq('active',true).order('name');
      if(branchError)throw branchError;
      for(const nav of menus){
        nav.querySelector('[data-menu-branch]')?.remove();
        const label=document.createElement('label');label.dataset.menuBranch='';label.textContent='🏢 ເລືອກສາຂາ';label.style.cssText='display:grid;gap:8px;color:#0b6b4a;font-weight:700;margin-bottom:8px';
        const select=document.createElement('select');select.setAttribute('aria-label','ເລືອກສາຂາ');select.style.cssText='width:100%;min-height:48px;padding:10px 14px;border:2px solid #90cbb1;border-radius:12px;background:#effaf4;color:#075b3d;font:inherit;font-size:16px;cursor:pointer';
        const saved=sessionStorage.getItem('promoflow.activeBranch');const selected=branches.some(b=>b.id===saved)?saved:profile.branch_id;
        for(const branch of branches){const option=document.createElement('option');option.value=branch.id;option.textContent=branch.name;select.append(option);}
        select.value=selected||'';
        select.onchange=()=>{if(!select.value)return;select.disabled=true;sessionStorage.setItem('promoflow.activeBranch',select.value);location.reload();};
        label.append(select);nav.prepend(label);
      }
    }
  }catch(error){console.error('Menu role load:',error.message);}}
  refresh();
})();