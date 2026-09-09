export async function fetchRAB() {
  const { data, error } = await supabase
    .from('rab')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

export async function insertRAB(entry) {
  const { data, error } = await supabase
    .from('rab')
    .insert([entry])
    .select()

  if (error) throw error
  return data[0]
}

export async function updateRAB(id, updates) {
  const { data, error } = await supabase
    .from('rab')
    .update(updates)
    .eq('id', id)
    .select()

  if (error) throw error
  return data[0]
}

export async function deleteRAB(id) {
  const { error } = await supabase
    .from('rab')
    .delete()
    .eq('id', id)

  if (error) throw error
}
