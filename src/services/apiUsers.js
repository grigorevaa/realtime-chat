import supabase from './supabase';

export async function getUsers(ids) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .in('id', ids);

  if (error) {
    throw new Error(error);
  }

  return data;
}
