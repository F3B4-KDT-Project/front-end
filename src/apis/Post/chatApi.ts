import { Message } from '../../models/ChatData.type';
import { http } from '../httpClient';

export const ChatHistoryApi = async (roomId: number, token: string) => {
  return await http.get<Message[]>(`/api/chat/${roomId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
};
