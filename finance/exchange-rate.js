(() => {
  window.renderExchangeRate=function(){
    let panel=document.getElementById('exchangeRatePanel');
    if(!panel){panel=document.createElement('div');panel.id='exchangeRatePanel';panel.style.cssText='margin:12px 0;padding:12px;background:#e8f6ef;border-radius:10px;display:flex;gap:12px;align-items:center;flex-wrap:wrap';document.getElementById('fieldSettingsPanel').insertAdjacentElement('beforebegin',panel);}
    panel.replaceChildren();
    const label=document.createElement('strong');label.textContent='1 THB = '+financeExchangeRate().toLocaleString()+' KIP';panel.append(label);
    if(financeIsAdmin){const button=document.createElement('button');button.className='btn green';button.textContent='⚙️ ປ່ຽນເຫຼດເງິນ';panel.append(button);button.onclick=async()=>{
      const raw=prompt('1 ບາດ = ຈັກກີບ? (ສະເພາະສາຂານີ້)',String(financeExchangeRate()));if(raw===null)return;
      const rate=Number(raw.trim());if(!raw.trim()||!Number.isFinite(rate)||rate<=0||rate>100000000)return alert('ໃສ່ອັດຕາແລກປ່ຽນຫຼາຍກວ່າ 0 ແລະບໍ່ເກີນ 100,000,000');
      if(!confirm('1 THB = '+rate.toLocaleString()+' KIP. ຢືນຢັນປ່ຽນເຫຼດສາຂານີ້ບໍ?'))return;
      const branch=financeBranchId;button.disabled=true;
      try{let saved=false;for(let i=0;i<3&&!saved;i++){
        const {data:current,error:readError}=await financeAuthClient.from('finance_field_settings').select('data,updated_at').eq('id','finance_fields').single();if(readError)throw readError;
        const data={...current.data,exchangeRatesByBranch:{...current.data.exchangeRatesByBranch,[branch]:rate}};
        const {data:rows,error}=await financeAuthClient.from('finance_field_settings').update({data,updated_at:new Date().toISOString(),updated_by:financeUserId}).eq('id','finance_fields').eq('updated_at',current.updated_at).select('id');if(error)throw error;
        if(rows?.length){saved=true;if(financeBranchId===branch)financeFieldVisibility.exchangeRatesByBranch=data.exchangeRatesByBranch;}
      }if(!saved)throw Error('Settings changed. Reload and try again.');
      calculateAll();window.renderExchangeRate();scheduleFinanceCloudSave();
      }catch(error){alert(error.message);}finally{button.disabled=false;}
    };}
    let counterRate=document.getElementById('cashCounterRate');if(!counterRate){counterRate=document.createElement('p');counterRate.id='cashCounterRate';document.getElementById('cashCountTitle').insertAdjacentElement('afterend',counterRate);}counterRate.textContent=label.textContent;
  };
  window.renderExchangeRate();
})();
