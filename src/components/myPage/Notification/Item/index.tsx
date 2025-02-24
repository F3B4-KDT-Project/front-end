import React from 'react';
import iconSrc from '../../../../assets/icons/notification_item.svg';
import { NotificationProps } from '../../../../models/MyPage';
import { ItemWrapper, Message } from './style';

export const Item: React.FC<NotificationProps> = ({ type, message }) => {
  return (
    <ItemWrapper>
      <img src={iconSrc} alt={`${type} 알림 아이콘`} />
      <Message>
        <span>[ {type} ]</span>
        {message}
      </Message>
    </ItemWrapper>
  );
};
