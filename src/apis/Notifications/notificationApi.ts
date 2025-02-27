import { NotificationResponse } from '../../models/MyPage';
import { http } from '../httpClient';

// 알림 조회
export const fetchNotifications = async (): Promise<NotificationResponse[]> => {
  return await http.get<NotificationResponse[]>(`/api/notifications`);
};
