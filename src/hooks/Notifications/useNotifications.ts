import { useQuery } from '@tanstack/react-query';
import { NotificationResponse } from '../../models/MyPage';
import { fetchNotifications } from '../../apis/Notifications/notificationApi';

export const useNotifications = () => {
  return useQuery<NotificationResponse[]>({
    queryKey: ['notifications'],
    queryFn: fetchNotifications,
    staleTime: 5000,
  });
};
