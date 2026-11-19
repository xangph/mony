(() => {
  const dictionary = [
    ['ດຶງຍອດຈາກລາຍຈ່າຍ ONLINE','Total from online expenses'],
    ['ສ້າງສາຂາ ແລະບັນຊີເຂົ້າລະບົບ','Create branch and login account'],
    ['ລະບົບຈະສ້າງຊື່ຜູ້ໃຊ້ ແລະລະຫັດໃຫ້ອັດຕະໂນມັດ','A username and password will be generated automatically'],
    ['ຢືນຢັນສ້າງສາຂາ','Confirm branch creation'],
    ['ສ້າງສາຂາສຳເລັດ','Branch created successfully'],
    ['ເກັບລະຫັດນີ້ໄວ້ ລະບົບສະແດງພຽງຄັ້ງດຽວ','Save this password now. It is shown only once.'],
    ['ສະແດງລະຫັດ','Show password'],
    ['ກ໊ອບປີ້ຂໍ້ມູນເຂົ້າລະບົບ','Copy login details'],
    ['ກະລຸນາກ໊ອບປີ້ຈາກຊ່ອງດ້ານເທິງ','Please copy from the fields above'],
    ['ເກັບແລ້ວ — ປິດ','Saved — close'],
    ['ໃຊ້ຊື່ຜູ້ໃຊ້ ແລະລະຫັດຜ່ານ ຫຼື Email ເກົ່າ','Sign in with your username and password, or existing email'],
    ['ຊື່ຜູ້ໃຊ້ / Email','Username / Email'],
    ['ຊື່ຜູ້ໃຊ້ ຫຼືລະຫັດຜ່ານບໍ່ຖືກຕ້ອງ','Incorrect username or password'],
    ['ບັນຊີເຂົ້າສາຂາ','Branch login accounts'],
    ['Admin ກຳນົດຊື່ຜູ້ໃຊ້ ແລະລະຫັດຜ່ານໃຫ້ສາຂາ','Admin assigns usernames and passwords to branches'],
    ['ຕ້ອງຕິດຕັ້ງ SQL 21 ແລະຟັງຊັນບັນຊີກ່ອນ','Install SQL 21 and the account function first'],
    ['ສ້າງບັນຊີສາຂາແລ້ວ','Branch login account created'],
    ['ສ້າງບັນຊີສາຂາ','Create branch login account'],
    ['ຕັ້ງລະຫັດໃໝ່','Set new password'],
    ['ຍັງບໍ່ມີບັນຊີສາຂາ','No branch login accounts yet'],
    ['ຊື່ຜູ້ໃຊ້','Username'],
    ['ລະຫັດຜ່ານ (6–128 ຕົວ)','Password (6–128 characters)'],
    ['ບໍ່ສາມາດຕິດຕໍ່ຟັງຊັນບັນຊີໄດ້','Unable to connect to the account service'],
    ['ກະລຸນາເລືອກຊື່ພະນັກງານກ່ອນ Save','Please select a staff name before saving'],
    ['ສົ່ງອອກຈາກລະບົບ','Exported from the system'],
    ['ຫຼືລະຫັດຜ່ານບໍ່ຖືກຕ້ອງ','or password is incorrect'],
    ['ເຂົ້າລະບົບບໍ່ສຳເລັດ','Sign-in failed'],
    ['ຕິດຕໍ່ Supabase ບໍ່ໄດ້','Cannot connect to Supabase'],
    ['ບໍ່ພົບ Profile ຂອງ User','User profile not found'],
    ['ບັນຊີນີ້ຖືກປິດ','This account is inactive'],
    ['ສາມາດວາງຫຼາຍຊຸດ ແກ້ໄຂ ແລະລຶບໄດ້','Paste, edit and delete message sets'],
    ['ກົດກ໊ອບປີ້ທັງຊຸດ ແລ້ວນຳໄປວາງໃນ WhatsApp','Copy a complete set and paste it into WhatsApp'],
    ['ໃສ່ເລກ 01, 02, 03','Number the sets 01, 02, 03'],
    ['ໄວ້ໜ້າແຕ່ລະຊຸດ. ລະບົບຈະແຍກໃຫ້ອັດຕະໂນມັດ.','before each set to split them automatically.'],
    ['ຢູ່ເຊື່','Username'],
    ['ຄຳແນະນຳ','Instructions'],
    ['ສະເພາະ Admin ເທົ່ານັ້ນ','Admins only'],
    ['ບໍ່ພົບຂໍ້ມູນ','No data found'],
    ['ຊຸດບໍ','sets?'],
    ['ຊຸດແລ້ວ','sets added'],
    ['ກ໊ອບປີ້ທັງຊຸດແລ້ວ','Complete set copied'],
    ['ແກ້ໄຂຂໍ້ມູນຊຸດນີ້','Edit this message set'],
    ['ແກ້ໄຂແລ້ວ','Updated'],
    ['ຢືນຢັນລຶບຂໍ້ມູນຊຸດນີ້ບໍ','Delete this message set?'],
    ['ລຶບແລ້ວ','Deleted'],
    ['ຈັດການໂປຣປະຈຳອາທິດ','Manage weekly promotions'],
    ['ບັນທຶກອາທິດເກົ່າໄປປະຫວັດ ແລະເລີ່ມຕາຕະລາງໃໝ່','Archive this week and start a new report'],
    ['ເບິ່ງຍອດລວມ ໝາຍເຫດ ແລະຜົນງານພະນັກງານ','View totals, notes and staff activity'],
    ['ເບິ່ງປະຫວັດ','View history'],
    ['ຍອດລວມ','Total'],
    ['ຍັງບໍ່ໄດ້ກຳນົດລາຍຊື່','No staff names configured'],
    ['ເຊັ່ນ 020xxxxxxxx','e.g. 020xxxxxxxx'],
    ['ກະລຸນາເລືອກຊື່ພະນັກງານ','Please select a staff name'],
    ['ກະລຸນາໃສ່ເບີລູກຄ້າ','Please enter the customer phone number'],
    ['ຈຳນວນໂປຕ້ອງຫຼາຍກວ່າ 0','Promotion amount must be greater than 0'],
    ['ຢືນຢັນວ່າ','Confirm that'],
    ['ເຕີມເບີ','credited phone'],
    ['ສ້າງລາຍການແລ້ວ ແຕ່ຢືນຢັນບໍ່ສຳເລັດ','Entry created, but confirmation failed'],
    ['ບັນທຶກໂປ 100+100 ສຳເລັດ','100+100 promotion saved'],
    ['ຂໍ້ມູນເກົ່າ','Previous data'],
    ['ບໍ່ຮູ້ຊື່','Unknown name'],
    ['ຍັງບໍ່ມີການຢືນຢັນ','No confirmations yet'],
    ['ໝາຍເຫດ: ໜ້າຍອດລວມຈະຕັດເລກທົດສະນິຍົມອອກ ເຊັ່ນ 10.5 ເປັນ 10','Note: totals omit decimal places, e.g. 10.5 becomes 10'],
    ['ຈາກ Excel ແລ້ວວາງ','from Excel and paste'],
    ['ກະລຸນາເລືອກຊື່ຂອງທ່ານກ່ອນ','Please select your name first'],
    ['ໄດ້ເຕີມໂປໃຫ້ລູກຄ້າແລ້ວບໍ','Has this customer received the promotion?'],
    ['ລາຍການນີ້ຖືກຢືນຢັນແລ້ວ','This entry has already been confirmed'],
    ['ຢືນຢັນສຳເລັດ','Confirmed successfully'],
    ['ປ່ຽນຜູ້ຢືນຢັນລາຍການນີ້ເປັນ','Change the confirming staff member to'],
    ['ແກ້ຊື່ບໍ່ສຳເລັດ','Rename failed'],
    ['ປ່ຽນຊື່ເປັນ','Renamed to'],
    ['ບັນຊີ Staff Login ໃນລະບົບ','Staff login accounts'],
    ['ບັນຊີ. ບໍ່ຈຳເປັນສ້າງ Email ໃໝ່ເມື່ອເພີ່ມຊື່.','accounts. Adding names does not require a new email.'],
    ['ຍັງບໍ່ມີຊື່—ກົດ','No names yet. Click'],
    ['ກຳລັງບັນທຶກ','Saving'],
    ['ເພີ່ມຊື່ພະນັກງານແລ້ວ','Staff name added'],
    ['ໃສ່ຊື່ພະນັກງານ','Enter staff name'],
    ['ເປີດຊື່ນີ້ໃຫ້ເລືອກບໍ','Activate this staff name?'],
    ['ປິດຊື່ນີ້ບໍ','Deactivate this staff name?'],
    ['ຂໍ້ມູນເກົ່າຍັງຢູ່','Previous data is retained'],
    ['ເບິ່ງຍອດ ແລະໝາຍເຫດຂອງແຕ່ລະອາທິດ','View amounts and notes for each week'],
    ['ຍັງບໍ່ມີປະຫວັດອາທິດກ່ອນ','No previous weeks yet'],
    ['ອາທິດນີ້ຍັງບໍ່ມີປະຫວັດລາຍຈ່າຍ (ລະບົບເລີ່ມບັນທຶກຫຼັງອັບເດດ)','No expense snapshot for this week (recording started after the update)'],
    ['ກະລຸນາກຳນົດສາຂາກ່ອນ','Please assign a branch first'],
    ['ການລຶບຈະກູ້ຄືນບໍ່ໄດ້. ພິມ DELETE ເພື່ອຢືນຢັນ','Deletion cannot be undone. Type DELETE to confirm'],
    ['ຍົກເລີກການລຶບ','Deletion cancelled'],
    ['ລຶບປະຫວັດທັງໝົດແລ້ວ','All history deleted'],
    ['ບໍ່ພົບປະຫວັດອາທິດນີ້','Week history not found'],
    ['ຂໍ້ມູນຂອງອາທິດນີ້ຈະກູ້ຄືນບໍ່ໄດ້.','This week’s data cannot be recovered.'],
    ['ລຶບບໍ່ສຳເລັດ','Deletion failed'],
    ['ປ່ຽນລະຫັດຂອງບັນຊີທີ່ Login ຢູ່','Change the password of the signed-in account'],
    ['ທ່ານກຳລັງປ່ຽນລະຫັດຂອງ','You are changing the password for'],
    ['ຢ່າງໜ້ອຍ 6 ຕົວ','at least 6 characters'],
    ['ເພື່ອຄວາມປອດໄພ ບັນຊີແຕ່ລະຄົນປ່ຽນລະຫັດຂອງຕົນເອງ.','Each user changes their own account password.'],
    ['ລະຫັດສອງຊ່ອງບໍ່ຄືກັນ','Passwords do not match'],
    ['ປ່ຽນລະຫັດສຳເລັດ','Password changed'],
    ['ມີໂປຣໂມຊັນໃໝ່','New promotions available'],
    ['ຮັບຊາບ ແລະເຂົ້າໄປເບິ່ງ','Acknowledge and view'],
    ['ຈື່ໃນອຸປະກອນແລ້ວ','Saved on this device'],
    ['ໂຫຼດຂໍ້ມູນໃໝ່ແລ້ວ','Data refreshed'],
    ['ບັນທຶກໝາຍເຫດແລ້ວ','Note saved'],
    ['ກະລຸນາວາງຂໍ້ມູນ Excel','Please paste Excel data'],
    ['ໃສ່ໝາຍເຫດກ່ອນສ້າງຕາຕະລາງ','Enter a note before creating the report'],
    ['ຕ້ອງໃສ່ໝາຍເຫດ','A note is required'],
    ['ຜູ້ໃຊ້','User'],
    ['ບໍ່ພົບລາຍການ','No entries found'],
    ['ລາຍການບໍ','entries?'],
    ['ສ້າງຕາຕະລາງສຳເລັດ','Report created'],
    ['ໂຫຼດຂໍ້ມູນ PromoFlow ບໍ່ສຳເລັດ','Unable to load PromoFlow data'],
    ['ຍັງບໍ່ພ້ອມ: ກະລຸນາ Run SQL ລະບົບສາຂາກ່ອນ','Not ready: run the branch SQL migration first'],
    ['ເພີ່ມ ແລະປິດ/ເປີດສາຂາໄດ້ຈາກໜ້ານີ້','Add, activate or deactivate branches here'],
    ['ກະລຸນາໃສ່ຊື່ສາຂາ','Please enter a branch name'],
    ['ເພີ່ມສາຂາແລ້ວ','Branch added'],
    ['ເປີດສາຂານີ້ບໍ','Activate this branch?'],
    ['ປິດສາຂານີ້ບໍ','Deactivate this branch?'],
    ['ບໍ່ກຳນົດ','Unassigned'],
    ['ສາຂາຂອງບັນຊີ','Account branch'],
    ['ບັນທຶກສາຂາຂອງບັນຊີແລ້ວ','Account branch saved'],
    ['ບັນທຶກສາຂາພະນັກງານແລ້ວ','Staff branch saved'],
    ['ສະແດງ 3 ຊຸດລ່າສຸດ','Latest 3 records'],
    ['ແຍກຈາກປະຫວັດອາທິດ','Separate from weekly history'],
    ['ຄົ້ນຫາປະຫວັດຕາມວັນທີ','Search history by date'],
    ['ກຳລັງໂຫຼດປະຫວັດ','Loading history'],
    ['ດຶງຈາກ Grand Total ຂອງ PromoFlow ອັດຕະໂນມັດ','Automatically linked to PromoFlow Grand Total'],
    ['ຢືນຢັນການ Reset','Confirm reset'],
    ['ທ່ານແນ່ໃຈບໍວ່າຈະລ້າງຂໍ້ມູນທັງໝົດ','Clear all data?'],
    ['ການກົດຢືນຢັນຈະຄືນຄ່າເປັນ 0.','Confirming will reset the values to 0.'],
    ['ຂໍ້ຄວາມ','Message'],
    ['ກວດເບິ່ງຂໍ້ຄວາມກ່ອນສົ່ງ — ຕັ້ງເບີ WhatsApp ຈ່າຍບໍ່ຕ້ອງພາຍໃນ (+856...)','Review the message and enter a WhatsApp phone number (+856...)'],
    ['ກະລຸນາ Run SQL 19 ໃນ promoflow-test ກ່ອນ','Run SQL 19 in promoflow-test first'],
    ['ກະລຸນາໃສ່ຈຳນວນໃຫ້ຖືກຕ້ອງ','Please enter a valid amount'],
    ['ບັນທຶກການຕັ້ງຄ່າບໍ່ສຳເລັດ','Settings could not be saved'],
    ['ບັນທຶກການຕັ້ງຄ່າແລ້ວ','Settings saved'],
    ['ກະລຸນາ Run SQL ສຳລັບປະຫວັດລາຍວັນກ່ອນ','Run the daily history SQL migration first'],
    ['ກຳລັງ Save','Saving'],
    ['ບັນທຶກປະຫວັດລາຍວັນແລ້ວ','Daily record saved'],
    ['ຢືນຢັນລຶບບັນທຶກຂອງ','Delete the record for'],
    ['ການລຶບນີ້ກູ້ຄືນບໍ່ໄດ້.','This deletion cannot be undone.'],
    ['ບໍ່ສາມາດວາງຂໍ້ມູນໄດ້','Unable to paste data'],
    ['ລ້າງຂໍ້ມູນສຳເລັດ','Data cleared'],
    ['ໃສ່ເບີ WhatsApp ຼຍ່ອງຖືກ (ເຊັ່ນ 85620xxxxxxx)','Enter a valid WhatsApp number (e.g. 85620xxxxxxx)'],
    ['ບິນໃຊ້ໄດ້ສະເພາະ ຕົວເລກ ແລະ + -','Bills accept only numbers and + -'],
    ['ຮູບແບບບິນບໍ່ຖືກຕ້ອງ','Invalid bill expression'],
    ['ບໍ່ມີຂໍ້ມູນ','No data'],
    ['ຊື່ເກົ່າ','Previous name'],
    ['ກຳລັງໂຫຼດ','Loading'],
    ['ຄົ້ນຫາຕາມວັນທີ','Search by date'],
    ['ຜົນຄົ້ນຫາ','Search results'],
    ['ຢືນຢັນລຶບບັນທຶກນີ້','Delete this record?'],
    ['ກູ້ຄືນບໍ່ໄດ້.','Cannot be undone.'],
    ['ແລະຄິດຍອດສະສົມໃໝ່','and recalculate the running balance'],
    ['ຂໍ້ມູນ','Data'],
    ['ອາທິດ','Week'],
    ['ເພີ່ມ','Add'],
    ['ສ້າງ','Create'],
    ['ເບີ','Phone'],
    ['ແລ້ວ','done'],
    ['ບໍ','?'],
    ['ມ.ກ','Jan'],['ກ.ພ','Feb'],['ມ.ນ','Mar'],['ມ.ສ','Apr'],
    ['ພ.ພ','May'],['ມິ','Jun'],['ກ.ລ','Jul'],['ສ.ຫ','Aug'],
    ['ກ.ຍ','Sep'],['ຕ.ລ','Oct'],['ພ.ຈ','Nov'],['ທ.ນ','Dec'],
    ['ແກ້ໄຂຊື່ຊ່ອງ','Edit field names'],
    ['ລາວ','Lao'],
    ['ປະຫວັດເຕີມ–ຖອນເງີີນເເລະເຄດິດ','Cash and credit transfer history'],
    ['ປະຫວັດເຕີມ–ຖອນເງິນແລະເຄດິດ','Cash and credit transfer history'],
    ['ປະຫວັດ 10 ລາຍການລ່າສຸດ','Latest 10 transactions'],
    ['ປະຫວັດອາທິດກ່ອນ','Previous weeks'],
    ['ລາຍລະອຽດປະຫວັດລາຍວັນ','Daily record details'],
    ['ປະຫວັດລາຍວັນ','Daily history'],
    ['ປະຫວັດລາຍຈ່າຍ','Expense history'],
    ['ປະຫວັດຍອດລວມຂອງອາທິດນີ້','Weekly history'],
    ['ລາຍງານຄ່າໃຊ້ຈ່າຍ','Expense report'],
    ['ສະຫຼຸບລາຍຮັບ - ລາຍຈ່າຍ','Income and expense summary'],
    ['ລາຍຮັບ–ລາຍຈ່າຍ','Income and expenses'],
    ['ຈັດການໂປຣໂມຊັນ','Manage promotions'],
    ['ໃຫ້ງ່າຍຂຶ້ນ','with ease'],
    ['ສົ່ງໂປຣໂມຊັນໃຫ້ທີມງານ ແລະຕິດຕາມການຢືນຢັນໃນບ່ອນດຽວ','Share promotions and track team confirmations in one place'],
    ['ໃຊ້ Email ແລະລະຫັດຂອງ Admin ຫຼືພະນັກງານ','Use your Admin or Staff email and password'],
    ['ເຂົ້າສູ່ລະບົບ','Sign in'],
    ['ເຂົ້າລະບົບ','Sign in'],
    ['ອອກຈາກລະບົບ','Sign out'],
    ['ອອກລະບົບ','Sign out'],
    ['ໜ້າຄວບຄຸມ Admin','Admin dashboard'],
    ['ໜ້າພະນັກງານ','Staff dashboard'],
    ['ຂໍ້ມູນສົ່ງລູກຄ້າ','Customer messages'],
    ['ຈັດການຊື່ພະນັກງານ','Manage staff names'],
    ['ຈັດການພະນັກງານ','Manage staff'],
    ['ກຳນົດພະນັກງານເຂົ້າສາຂາ','Assign staff to branches'],
    ['ສາຂາຂອງບັນຊີເຂົ້າລະບົບ','Login account branches'],
    ['ຈັດການສາຂາ','Manage branches'],
    ['ຊື່ສາຂາໃໝ່','New branch name'],
    ['ຢືນຢັນເພີ່ມສາຂາ','Confirm new branch'],
    ['ເພີ່ມສາຂາ','Add branch'],
    ['ເລືອກສາຂາ','Select branch'],
    ['ສາຂາທັງໝົດ','All branches'],
    ['ປິດສາຂາ','Deactivate branch'],
    ['ເປີດສາຂາ','Activate branch'],
    ['ສ້າງສາຂາ ແລະກຳນົດພະນັກງານຂອງແຕ່ລະສາຂາ','Create branches and assign staff'],
    ['ໃຊ້ Login ພະນັກງານດຽວ ແລະສ້າງຊື່ໃຫ້ເລືອກໄດ້ບໍ່ຈຳກັດ','Add staff names for each branch'],
    ['ລາຍຊື່ໃຫ້ພະນັກງານເລືອກ','Available staff names'],
    ['ຢືນຢັນເພີ່ມຊື່','Confirm new name'],
    ['ເພີ່ມຊື່','Add name'],
    ['ແກ້ຊື່','Rename'],
    ['ບັນທຶກຊື່','Save name'],
    ['ປິດຊື່','Deactivate'],
    ['ເປີດຊື່','Activate'],
    ['ເປີດໃຊ້','Active'],
    ['ປິດໃຊ້','Inactive'],
    ['ເລືອກຊື່ພະນັກງານກ່ອນ Save','Select a staff name before saving'],
    ['ເລືອກຊື່ພະນັກງານ','Select staff'],
    ['ຊື່ພະນັກງານ','Staff name'],
    ['ເລືອກຊື່','Select name'],
    ['ພະນັກງານ','Staff'],
    ['ສ້າງອາທິດໃໝ່','New week'],
    ['ເລີ່ມໂປຣອາທິດໃໝ່','Start a new promotion week'],
    ['ເປີດອາທິດໂປຣ','Open a promotion week'],
    ['ຊື່ອາທິດ','Week name'],
    ['ພິມ ok ເພື່ອຢືນຢັນ','Type ok to confirm'],
    ['ຢືນຢັນສ້າງອາທິດ','Confirm new week'],
    ['ອາທິດທີ່ເປີດຢູ່ຈະເຂົ້າປະຫວັດ ແລະລາຍຈ່າຍຈະກັບເປັນ 0.','The current week will be archived and expenses reset to 0.'],
    ['ຍັງບໍ່ມີອາທິດທີ່ເປີດໃຊ້','No active week'],
    ['ເຂົ້າໄປຢືນຢັນ','Open to confirm'],
    ['ເຂົ້າໄປເບິ່ງ','View promotion'],
    ['ຕາຕະລາງອາທິດນີ້','This week’s entries'],
    ['ຈຳນວນໂປຣໂມຊັນ','Promotion amount'],
    ['ເບີລູກຄ້າ','Customer number'],
    ['ເພີ່ມໂປ 100+100','Add 100+100 promotion'],
    ['ຍອດລວມໂປນີ້','Promotion summary'],
    ['ລາຍການທັງໝົດ','Total entries'],
    ['ຢືນຢັນແລ້ວ','Confirmed'],
    ['ຍອດຢືນຢັນລວມ','Confirmed amount'],
    ['ຍອດແຍກຕາມພະນັກງານ','Totals by staff'],
    ['ຍອດລວມຂອງທຸກຄົນ (Total)','All staff totals'],
    ['ສະແດງຍອດແຍກຕາມຊື່ທີ່ພະນັກງານເລືອກ','Totals by the selected staff name'],
    ['ລາຍລະອຽດທຸກລາຍການ','All entry details'],
    ['ສະຖານະ/ຢືນຢັນ','Status / confirmation'],
    ['ຄືນຍອດເສຍ 5%','5% loss return'],
    ['ໂປຣໂມຊັນ','Promotion'],
    ['ໂປໂມຊັນ','Promotion'],
    ['ກ໊ອບປີ້ທັງຊຸດ','Copy entire message'],
    ['ເພີ່ມຂໍ້ມູນຫຼາຍຊຸດ','Add message sets'],
    ['ບັນທຶກທຸກຊຸດ','Save all sets'],
    ['ເຂົ້າເວັບ','Open website'],
    ['ບັນທຶກໝາຍເຫດ','Save note'],
    ['ໝາຍເຫດອາທິດນີ້','Weekly note'],
    ['ໝາຍເຫດ','Note'],
    ['ສ້າງຕາຕະລາງ','Create table'],
    ['Copy ຈາກ Excel ແລ້ວວາງ','Paste from Excel'],
    ['ເຕີມ-ຖອນ(ເຄດິດ)','Credit adjustments'],
    ['ເຕີມ-ຖອນ(ເງີນ)','Cash adjustments'],
    ['ເຕີມ-ຖອນ(ເງິນ)','Cash adjustments'],
    ['ເງິນສົດ / ບັນຊີ','Cash / bank'],
    ['ຍອດເປີດ-ເຄດິດເຂົ້າ','Opening cash and credit in'],
    ['ຍອດປິດ-ເຄດິດອອກ','Closing cash and credit out'],
    ['ເປີດ','Open'],
    ['ປ້ອນຍອດ','Enter amount'],
    ['ຈຳນວນທີ່ຈະເພີ່ມ','Amount to add'],
    ['ໃສ່ເລກບວກເພື່ອເພີ່ມ ຫຼືເລກລົບເພື່ອຫັກຍອດ','Enter a positive number to add or a negative number to subtract'],
    ['ຍອດສະສົມ','Running balance'],
    ['ຍອດເລີ່ມຕົ້ນ','Opening balance'],
    ['ອື່ນໆ (Expenses)','Other expenses'],
    ['ເງີນ-ລາຍຈ່າຍຕ່າງໆ','Other amounts and expenses'],
    ['ບາດ','THB'],
    ['ເງິນສົດ','Cash count'],
    ['ໃບເງິນ','Denomination'],
    ['ໃສ່ຈຳນວນໃບເງິນ ແລ້ວລະບົບຈະລວມໃຫ້.','Enter the number of banknotes to calculate the total.'],
    ['ບິນ','Bills'],
    ['ລາຍຈ່າຍ','Expenses'],
    ['ຈຳນວນເງິນ','Amount'],
    ['ຈຳນວນ','Amount'],
    ['ຈໍານວນ','Amount'],
    ['ຕາຕະລາງ','Report'],
    ['ເພີ່ມແຖວ','Add row'],
    ['ລ້າງຂໍ້ມູນ','Clear data'],
    ['ສົ່ງໄປ WhatsApp','Send to WhatsApp'],
    ['ວັນທີ / ເວລາ','Date / time'],
    ['ວັນເວລາ','Date / time'],
    ['ວັນທີ','Date'],
    ['ຄົ້ນຫາ','Search'],
    ['ປະເພດ','Type'],
    ['ທັງໝົດ','All'],
    ['ເຄດິດ','Credit'],
    ['ເງິນ','Cash'],
    ['ເບິ່ງ ແລະຄົ້ນຫາບັນທຶກລາຍວັນ','View and search daily records'],
    ['ບັນທຶກລາຍວັນ','Daily record'],
    ['ບັນທຶກຄ່າການເງິນຂອງວັນນີ້ ແຍກຈາກປະຫວັດອາທິດ','Save today’s financial snapshot to daily history'],
    ['ບັນທຶກເມື່ອ','Saved at'],
    ['ຄິກເບິ່ງລາຍລະອຽດທັງໝົດ','View full details'],
    ['ຄິກເບິ່ງລາຍລະອຽດ','View details'],
    ['ລຶບບັນທຶກນີ້','Delete this record'],
    ['ລຶບອາທິດນີ້','Delete this week'],
    ['ລຶບປະຫວັດທັງໝົດ','Delete all history'],
    ['ຢືນຢັນລຶບ','Confirm deletion'],
    ['ຢືນຢັນບັນທຶກ','Confirm and save'],
    ['ກຳລັງບັນທຶກ…','Saving…'],
    ['ບັນທຶກບໍ່ສຳເລັດ','Save failed'],
    ['ບັນທຶກແລ້ວ','Saved'],
    ['ມີການແກ້ໄຂ ກະລຸນາກົດຢືນຢັນບັນທຶກ','Changes pending. Press Confirm and save'],
    ['ກະລຸນາເລືອກຊື່ພະນັກງານສຳລັບລາຍຈ່າຍກ່ອນບັນທຶກ','Select a staff name for each expense before saving'],
    ['ຍັງບໍ່ມີປະຫວັດ','No history yet'],
    ['ບໍ່ພົບປະຫວັດລາຍວັນ','No daily records found'],
    ['ຍັງບໍ່ມີລາຍການ','No entries yet'],
    ['ຍັງບໍ່ມີຂໍ້ມູນ','No data yet'],
    ['ຍັງບໍ່ມີພະນັກງານ','No staff yet'],
    ['ຍັງບໍ່ມີສາຂາ','No branches yet'],
    ['ບໍ່ມີລາຍຈ່າຍ ONLINE','No online expenses'],
    ['ກຳລັງໂຫຼດປະຫວັດ…','Loading history…'],
    ['ກຳລັງໂຫຼດ…','Loading…'],
    ['ໂຫຼດເພີ່ມ','Load more'],
    ['ໂຫຼດໃໝ່','Refresh'],
    ['ໂຫຼດບໍ່ສຳເລັດ','Loading failed'],
    ['ບໍ່ສາມາດໂຫຼດໄດ້','Unable to load'],
    ['ເກີດຂໍ້ຜິດພາດ','An error occurred'],
    ['ຕັ້ງຄ່າຊ່ອງສຳລັບພະນັກງານ','Staff field visibility'],
    ['ແອດມິນສາມາດປິດຊ່ອງທີ່ບໍ່ຕ້ອງການໃຫ້ພະນັກງານເຫັນ. ຕິກແລ້ວກົດຢືນຢັນເພື່ອບັນທຶກ.','Select visible fields and confirm to save.'],
    ['ຈັດການລະຫັດຜ່ານ','Manage password'],
    ['ລະຫັດຜ່ານ','Password'],
    ['ຢືນຢັນລະຫັດໃໝ່','Confirm new password'],
    ['ລະຫັດໃໝ່','New password'],
    ['ປ່ຽນລະຫັດ','Change password'],
    ['ລາຍລະອຽດ','Details'],
    ['ລາຍການ','Entry'],
    ['ຈັດການ','Manage'],
    ['ກັບໄປລາຍການປະຫວັດ','Back to history'],
    ['ກັບຄືນ','Back'],
    ['ກັບໄປ Home','Back to home'],
    ['ກັບ PromoFlow','Back to PromoFlow'],
    ['ໜ້າຫຼັກ','Home'],
    ['ເມນູ','Menu'],
    ['ປະຫວັດ','History'],
    ['ຢືນຢັນ','Confirm'],
    ['ຍົກເລີກ','Cancel'],
    ['ບັນທຶກ','Save'],
    ['ແກ້ໄຂ','Edit'],
    ['ລຶບ','Delete'],
    ['ປິດ','Close'],
    ['ສົ່ງ','Send'],
    ['ລວມ','Total'],
    ['ສະແດງ','Showing'],
    ['ລະຫັດ','Code'],
    ['ສາຂາ','Branch'],
    ['ຊື່','Name'],
    ['ລໍຖ້າ','Pending']
  ].sort((a,b)=>b[0].length-a[0].length);
  const pattern=new RegExp(dictionary.map(([source])=>source.replace(/[.*+?^$\{\}()|[\]\\]/g,'\\$&')).join('|'),'g');
  const english=new Map(dictionary);
  function translate(text){return String(text).replace(pattern,match=>english.get(match));}
  let language=localStorage.getItem('promoflow.language')==='en'?'en':'lo';
  const textCache=new WeakMap();
  const attributeCache=new WeakMap();
  // User-authored messages, notes, names and editable values retain their original text.
  const excluded='script,style,textarea,input,pre,[contenteditable],.value,.preview,.note p,.staff-row b,.staff-total span,.done,#identity,#financeIdentity,[data-language-control],[data-no-translate]';
  function skip(node){
    const element=node.parentElement;
    if(!element||element.closest(excluded))return true;
    const option=element.closest('option');
    if(option&&option.value&& !['credit_in6','credit_out8'].includes(option.value))return true;
    if(element.closest('td:not(.label)')&&!element.closest('button,[data-i18n]'))return true;
    return false;
  }
  function apply(){
    observer.disconnect();
    document.documentElement.lang=language;
    const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
    while(walker.nextNode()){
      const node=walker.currentNode;
      if(skip(node))continue;
      let cached=textCache.get(node);
      if(!cached||node.data!==cached.rendered)cached={source:node.data};
      cached.rendered=language==='en'?translate(cached.source):cached.source;
      if(node.data!==cached.rendered)node.data=cached.rendered;
      textCache.set(node,cached);
    }
    for(const element of document.querySelectorAll('[placeholder],[title],[aria-label]')){
      if(element.closest('[data-language-control]'))continue;
      const cache=attributeCache.get(element)||{};
      for(const attribute of ['placeholder','title','aria-label']){
        if(!element.hasAttribute(attribute))continue;
        const value=element.getAttribute(attribute);
        let cached=cache[attribute];
        if(!cached||value!==cached.rendered)cached={source:value};
        cached.rendered=language==='en'?translate(cached.source):cached.source;
        if(value!==cached.rendered)element.setAttribute(attribute,cached.rendered);
        cache[attribute]=cached;
      }
      attributeCache.set(element,cache);
    }
    const titleSource=document.title;
    if(!originalTitle)originalTitle=titleSource;
    document.title=language==='en'?translate(originalTitle):originalTitle;
    observer.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['placeholder','title','aria-label']});
    document.dispatchEvent(new Event('promoflow-language-change'));
  }
  let scheduled=false,originalTitle='';
  const observer=new MutationObserver(()=>{
    if(scheduled)return;
    scheduled=true;
    queueMicrotask(()=>{scheduled=false;apply();});
  });
  function start(){
    const style=document.createElement('style');
    style.textContent='[data-language-control]{position:fixed;bottom:12px;right:12px;z-index:1400;display:flex;align-items:center;gap:8px;padding:7px 10px;background:#fff;color:#123b29;border:1px solid #bfd9cc;border-radius:10px;box-shadow:0 2px 8px #0002;font:14px system-ui}[data-language-control] select{padding:7px;border:1px solid #bfd9cc;border-radius:7px;background:#fff;color:#123b29;font:inherit}';
    document.head.append(style);
    const control=document.createElement('label');
    control.dataset.languageControl='';
    control.textContent='🌐';
    const select=document.createElement('select');
    select.setAttribute('aria-label','ພາສາ / Language');
    select.add(new Option('ລາວ','lo'));
    select.add(new Option('English','en'));
    select.value=language;
    select.onchange=()=>{
      language=select.value;
      localStorage.setItem('promoflow.language',language);
      apply();
    };
    control.append(select);
    document.body.append(control);
    apply();
  }
  // Native dialogs are outside the document tree. Translate their message only;
  // prompt defaults and the user's response must remain unchanged.
  for(const method of ['alert','confirm','prompt']){
    const original=window[method];
    if(typeof original!=='function')continue;
    window[method]=function(message,...args){
      return original.call(window,language==='en'?translate(message):message,...args);
    };
  }
  window.addEventListener('storage',event=>{
    if(event.key!=='promoflow.language')return;
    language=event.newValue==='en'?'en':'lo';
    const select=document.querySelector('[data-language-control] select');
    if(select)select.value=language;
    if(document.body)apply();
  });
  window.PromoFlowLanguage={translate,text:value=>language==='en'?translate(value):value,get language(){return language;}};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});
  else start();
})();
