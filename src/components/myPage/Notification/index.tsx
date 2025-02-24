import React from 'react';
import { Item } from './Item';

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

  return (
    <div>
      <div>| 알림</div>
      <ul>
        {notifications.map((notification, index) => (
          <Item key={index} {...notification} />
        ))}
      </ul>
    </div>
  );
};
