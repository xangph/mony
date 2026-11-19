(() => {
  const style=document.createElement('style');
  style.textContent=`
    .page-menu-tab{position:fixed;left:0;top:42%;z-index:1100;border:0;border-radius:0 14px 14px 0;background:#0f7148;color:white;padding:14px 11px;writing-mode:vertical-rl;font:inherit;font-weight:800;cursor:pointer}
    .page-menu-shade{position:fixed;inset:0;background:#071a12a8;z-index:1250}
    .page-menu-panel{position:fixed;inset:0 auto 0 0;width:min(380px,92vw);padding:20px;background:#fff;z-index:1251;overflow:auto;box-shadow:12px 0 35px #0002;color:#17231e}
    .page-menu-panel header{display:flex;justify-content:space-between;align-items:center}
    .page-menu-panel nav,.page-menu-panel details>div{display:grid;gap:9px;margin-top:18px}
    .page-menu-panel a,.page-menu-panel summary,.page-menu-panel button{border:0;border-radius:11px;padding:13px 16px;background:#e8f6ef;color:#0f7148;text-decoration:none;font:inherit;font-weight:700;text-align:left;cursor:pointer}
    .page-menu-panel details>div{margin:8px 0 0 14px;padding-left:10px;border-left:3px solid #b4dac6}
    .page-menu-panel .page-menu-logout{background:#fff0f0;color:#b82e2e}
    .page-menu-panel[hidden],.page-menu-shade[hidden]{display:none}
  `;
  document.head.append(style);
  const tab=document.createElement('button');
  tab.type='button';
  tab.className='page-menu-tab';
  tab.textContent='☰ ເມນູ';
  tab.setAttribute('aria-controls','pageMenuPanel');
  tab.setAttribute('aria-expanded','false');
  const shade=document.createElement('div');
  shade.className='page-menu-shade';
  shade.hidden=true;
  const panel=document.createElement('aside');
  panel.id='pageMenuPanel';
  panel.className='page-menu-panel';
  panel.hidden=true;
  panel.setAttribute('aria-label','ເມນູ');
  panel.innerHTML=`
    <header><strong>☰ ເມນູ</strong><button type="button" class="page-menu-close" aria-label="ປິດເມນູ">×</button></header>
    <nav>
      <a href="../index.html">🏠 ໜ້າຫຼັກ</a>
      <a href="../index.html?page=copysets">📋 ຂໍ້ມູນສົ່ງລູກຄ້າ</a>
      <details><summary>📁 ປະຫວັດ</summary><div>
        <a href="../index.html?page=history">📅 ປະຫວັດອາທິດກ່ອນ</a>
        <a href="daily-history.html">🗂️ ປະຫວັດລາຍວັນ</a>
        <a href="transfer-history.html">📒 ປະຫວັດເຕີມ–ຖອນເງິນແລະເຄດິດ</a>
      </div></details>
      <a href="index.html">🛒 ລາຍງານຄ່າໃຊ້ຈ່າຍ</a>
      <a href="index2.html">🧾 ລາຍຈ່າຍ ONLINE</a>
      <button type="button" class="page-menu-logout">ອອກຈາກລະບົບ</button>
      <p class="page-menu-status" role="status"></p>
    </nav>`;
  document.body.append(tab,shade,panel);
  const close=panel.querySelector('.page-menu-close');
  function toggle(open){
    panel.hidden=!open;
    shade.hidden=!open;
    tab.setAttribute('aria-expanded',String(open));
    (open?close:tab).focus();
  }
  tab.onclick=()=>toggle(true);
  close.onclick=()=>toggle(false);
  shade.onclick=()=>toggle(false);
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape'&&!panel.hidden)toggle(false);
  });
  panel.querySelector('.page-menu-logout').onclick=async()=>{
    try{
      const authClient=typeof financeAuthClient!=='undefined'?financeAuthClient:client;
      const {error}=await authClient.auth.signOut();
      if(error)throw error;
      location.href='../index.html';
    }catch(error){panel.querySelector('.page-menu-status').textContent=error.message;}
  };
})();
