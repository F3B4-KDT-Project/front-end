import React from 'react';
import iconSrc from '../../../../assets/icons/notification_item.svg';
import { NotificationProps } from '../../../../models/MyPage';
import { ItemWrapper, Message } from './style';

export const Item: React.FC<NotificationProps> = ({ type, message }) => {
  const category = type === 'SCHEDULE_CREATED' ? '일정' : '초대';

  return (
    <ItemWrapper>
      <button>
        <img src={iconSrc} alt={`${type} 알림 아이콘`} />
        <Message>
          <span>[ {category} ]</span>
          {message}
        </Message>
      </button>
    </ItemWrapper>
  );
};
