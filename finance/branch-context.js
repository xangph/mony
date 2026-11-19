async function resolveFinanceBranch(client, profile) {
  if (!profile?.active) throw new Error('Branch unavailable');
  const selected = profile.role === 'admin' && sessionStorage.getItem('promoflow.activeBranch');
  const id = selected || profile.branch_id;
  if (!id) throw new Error('Branch unavailable');
  const {data,error} = await client.from('branches').select('id').eq('id',id).eq('active',true).single();
  if (error || !data) throw new Error('Branch unavailable');
  return data.id;
}
