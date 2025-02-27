import React from 'react';
import { Item } from './Item';
import { ItemList, NotificationContainer } from './style';
import { useNotifications } from '../../../hooks/Notifications/useNotifications';

export const Notification: React.FC<{
  onItemClick: (notification: {
    notificationId: number;
    boardId: number;
  }) => void;
}> = ({ onItemClick }) => {
  const { data: notifications, isLoading, error } = useNotifications();

  if (isLoading) return <p>로딩 중...</p>;
  if (error) return <p>오류 발생: {error.message}</p>;

  return (
    <NotificationContainer>
      <div>| 알림</div>
      <ItemList>
        {notifications?.map((notification) => (
          <Item
            key={notification.id}
            {...notification}
            onClick={() =>
              onItemClick({ notificationId: notification.id, boardId: 123 })
            }
          />
        ))}
      </ItemList>
    </NotificationContainer>
  );
};
