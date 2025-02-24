import React from 'react';
import iconSrc from '../../../../assets/icons/notification_item.svg';
import { NotificationProps } from '../../../../models/MyPage';

export const Item: React.FC<NotificationProps> = ({ type, message }) => {
  return (
    <li>
      <img src={iconSrc} alt={`${type} 알림 아이콘`} />
      <p>
        <span>[ {type} ]</span>
        {message}
      </p>
    </li>
  );
};
