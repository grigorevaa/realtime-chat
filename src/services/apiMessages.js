import supabase from './supabase';

export async function createMessage({ chatId, sendBy, text }) {
  const { data, error } = await supabase
    .from('messages')
    .insert([
      {
        chatId,
        sendBy,
        text,
      },
    ])
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getMessages(chatId) {
  const { data, error } = await supabase
    .from('messages')
    .select('*, profiles(*)')
    .eq('chatId', chatId);

  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function deleteMessage(messageId) {
  const { error } = await supabase
    .from('messages')
    .delete()
    .eq('id', messageId);

  if (error) {
    throw new Error(error.message);
  }
}
