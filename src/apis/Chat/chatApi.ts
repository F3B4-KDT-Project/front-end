import { Message, UploadImageRequest } from '../../models/ChatData.type';
import { http } from '../httpClient';

export const ChatHistoryApi = async (roomId: number, token: string) => {
  return await http.get<Message[]>(`/api/chat/${roomId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
};

export const UploadImageApi = async (
  roomId: number,
  token: string,
  data: UploadImageRequest
): Promise<void> => {
  const formData = new FormData();
  formData.append('imageFile', data.imageFile);

  return await http.post(`/api/chat/${roomId}/images`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': undefined,
    },
  });
};
