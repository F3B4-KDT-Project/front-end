import React from 'react';
import { Item } from './Item';
import { ItemList, NotificationContainer } from './style';
<<<<<<< HEAD

export const Notification: React.FC = () => {
  const notifications = [
    {
      type: '초대',
      message: '9oorm_KDT 교실 초대를 거절하였습니다.',
      iconSrc: 'cloud-icon.png',
    },
    {
      type: '일정',
      message: 'Front-end 회의 일정이 생성되었습니다.',
      iconSrc: 'cloud-icon.png',
    },
    {
      type: '초대',
      message: '9oorm_KDT 교실에 초대되었습니다.',
      iconSrc: 'cloud-icon.png',
    },
  ];
=======
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
>>>>>>> 9c59c688476b9eea4bc5f1147cf882bede21fcad

  return (
    <NotificationContainer>
      <div>| 알림</div>
      <ItemList>
<<<<<<< HEAD
        {notifications.map((notification, index) => (
          <Item key={index} {...notification} />
=======
        {notifications?.map((notification) => (
          <Item
            key={notification.id}
            {...notification}
            onClick={() =>
              onItemClick({ notificationId: notification.id, boardId: 123 })
            }
          />
>>>>>>> 9c59c688476b9eea4bc5f1147cf882bede21fcad
        ))}
      </ItemList>
    </NotificationContainer>
  );
};
