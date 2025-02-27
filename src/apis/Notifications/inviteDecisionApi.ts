import { http } from '../httpClient';

// 초대 수락
export const acceptInvitation = async (
  notificationId: number,
  boardId: number
): Promise<string> => {
  return await http.post<string>(
    `/api/notifications/${notificationId}/accept?boardId=${boardId}`
  );
};

// 초대 거절
export const rejectInvitation = async (
  notificationId: number,
  boardId: number
): Promise<string> => {
  return await http.post<string>(
    `/api/notifications/${notificationId}/reject?boardId=${boardId}`
  );
};
