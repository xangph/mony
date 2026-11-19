(() => {
  const fieldIds=[
    'cash_open','credit_in4','credit_in5','credit_in7','credit_in8','credit_in9',
    'cash_close','credit_out3','credit_out4','credit_out5','credit_out6','credit_out7',
    'promo','expense','THB','THB2','cash4','kip','cash5','kip2','cash6','kip3'
  ];
  const defaults=new Map();
  for(const id of fieldIds){
    const value=document.getElementById(id);
    const label=value?.closest('tr')?.querySelector('td.label')||value?.previousElementSibling;
    if(!label)continue;
    defaults.set(id,{label,name:label.textContent.trim()});
    const images=Array.from(label.querySelectorAll('img'));
    const name=document.createElement('span');
    name.dataset.customFieldLabel=id;
    name.dataset.noTranslate='';
    label.replaceChildren(name,...images);
  }
  function savedLabels(){
    return financeFieldVisibility.labelsByBranch?.[financeBranchId]||{};
  }
  function labelFor(id){
    const labels=savedLabels()[id]||{};
    const language=document.documentElement.lang==='en'?'en':'lo';
    const fallback=defaults.get(id)?.name||id;
    if(language==='en')return labels.en||labels.lo||window.PromoFlowLanguage?.translate(fallback)||fallback;
    return labels.lo||labels.en||fallback;
  }
  function applyLabels(){
    for(const [id,{label}] of defaults){
      const span=label.querySelector('[data-custom-field-label]');
      const name=labelFor(id);
      if(span.textContent!==name)span.textContent=name;
    }
  }
  window.financeFieldLabel=id=>defaults.has(id)?labelFor(id):null;
  window.financeFieldLabelSnapshot=()=>Object.fromEntries(fieldIds.map(id=>[id,labelFor(id)]));
  function openEditor(id){
    const panel=document.getElementById('financeLabelSettings');
    if(!panel)return;
    panel.open=true;
    panel.scrollIntoView({behavior:'smooth',block:'start'});
    const language=document.documentElement.lang==='en'?'en':'lo';
    const input=panel.querySelector('[name="'+id+'_'+language+'"]')||panel.querySelector('input');
    input?.focus({preventScroll:true});
    input?.select();
  }
  window.renderFinanceLabels=()=>{
    applyLabels();
    let panel=document.getElementById('financeLabelSettings');
    if(!financeIsAdmin){panel?.remove();return;}
    if(!document.getElementById('editFinanceLabelsButton')){
      const shortcut=document.createElement('button');
      shortcut.id='editFinanceLabelsButton';
      shortcut.type='button';
      shortcut.className='btn green';
      shortcut.textContent='✏️ ແກ້ໄຂຊື່ຊ່ອງ';
      shortcut.onclick=()=>openEditor('cash_open');
      document.querySelector('.promoflow-nav').append(shortcut);
    }
    for(const [id,{label}] of defaults){
      if(label.querySelector('.field-label-edit'))continue;
      const edit=document.createElement('button');
      edit.type='button';
      edit.className='field-label-edit';
      edit.textContent='✏️';
      edit.setAttribute('aria-label','ແກ້ໄຂຊື່ຊ່ອງ');
      edit.onclick=()=>openEditor(id);
      label.append(edit);
    }
    if(!panel){
      panel=document.createElement('details');
      panel.id='financeLabelSettings';
      panel.className='field-settings';
      document.getElementById('fieldSettingsPanel').insertAdjacentElement('afterend',panel);
    }
    panel.replaceChildren();
    const summary=document.createElement('summary');
    summary.textContent='✏️ ແກ້ໄຂຊື່ຊ່ອງ';
    const form=document.createElement('form');
    const grid=document.createElement('div');
    grid.className='field-label-grid';
    for(const [id,{name}] of defaults){
      const row=document.createElement('div');
      const title=document.createElement('strong');
      title.textContent=name;
      title.dataset.noTranslate='';
      row.append(title);
      for(const [language,caption] of [['lo','ລາວ'],['en','English']]){
        const label=document.createElement('label');
        label.textContent=caption;
        const input=document.createElement('input');
        input.name=id+'_'+language;
        input.maxLength=100;
        input.value=savedLabels()[id]?.[language]||'';
        input.placeholder=language==='en'?(window.PromoFlowLanguage?.translate(name)||name):name;
        label.append(input);
        row.append(label);
      }
      grid.append(row);
    }
    const button=document.createElement('button');
    button.type='submit';
    button.className='btn green';
    button.textContent='✅ ຢືນຢັນບັນທຶກ';
    button.style.marginTop='12px';
    const status=document.createElement('p');
    status.setAttribute('role','status');
    form.append(grid,button,status);
    panel.append(summary,form);
    form.onsubmit=async event=>{
      event.preventDefault();
      if(!financeIsAdmin||!financeBranchId)return;
      const labels={};
      for(const id of fieldIds){
        const lo=form.elements[id+'_lo'].value.trim();
        const en=form.elements[id+'_en'].value.trim();
        if(lo||en)labels[id]={lo,en};
      }
      button.disabled=true;
      status.textContent='ກຳລັງບັນທຶກ…';
      try{
        const {data:current,error:readError}=await financeAuthClient.from('finance_field_settings')
          .select('data').eq('id','finance_fields').single();
        if(readError)throw readError;
        const data={...current.data,labelsByBranch:{...current.data.labelsByBranch,[financeBranchId]:labels}};
        const {error}=await financeAuthClient.from('finance_field_settings')
          .update({data,updated_at:new Date().toISOString(),updated_by:financeUserId})
          .eq('id','finance_fields').select('id').single();
        if(error)throw error;
        financeFieldVisibility.labelsByBranch=data.labelsByBranch;
        applyLabels();
        status.textContent='ບັນທຶກແລ້ວ';
      }catch(error){status.textContent='ບັນທຶກບໍ່ສຳເລັດ: '+error.message;}
      finally{button.disabled=false;}
    };
  };
  const style=document.createElement('style');
  style.textContent='.field-label-grid{display:grid;gap:12px;margin-top:14px}.field-label-grid>div{display:grid;grid-template-columns:1fr 1fr 1fr;align-items:center;gap:12px;padding:10px;background:white;border:1px solid #dfe6e2;border-radius:10px}.field-label-grid label{display:grid;gap:5px;font-size:14px}.field-label-grid input{width:100%;min-width:0;padding:10px;font:inherit;border:1px solid #bfd9cc;border-radius:8px}@media(max-width:600px){.field-label-grid>div{grid-template-columns:1fr}.field-label-grid input{font-size:16px}}';
  document.head.append(style);
  const editStyle=document.createElement('style');
  editStyle.textContent='.field-label-edit{display:inline-flex;align-items:center;justify-content:center;margin-left:5px;min-width:28px;min-height:28px;padding:2px;border:1px solid #98c4ad;border-radius:6px;background:#fff;cursor:pointer}.field-label-edit:focus-visible{outline:3px solid #1976d2;outline-offset:2px}';
  document.head.append(editStyle);
  document.addEventListener('promoflow-language-change',applyLabels);
  applyLabels();
  if(financeUserId&&financeBranchId)window.renderFinanceLabels();
})();
