import supabase from './supabase';

export async function createChat({ userId, chatName }) {
  const { data, error } = await supabase
    .from('chats')
    .insert([
      {
        createdBy: userId,
        chatName,
      },
    ])
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return data[0].id;
}

export async function getChat(chatId) {
  const { data, error } = await supabase
    .from('chats')
    .select('*')
    .eq('id', chatId)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export function deleteChat() {}
