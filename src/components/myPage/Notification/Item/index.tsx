import React from 'react';
import iconSrc from '../../../../assets/icons/notification_item.svg';
import { NotificationProps } from '../../../../models/MyPage';
import { Icon, ItemWrapper, Message } from './style';

export const Item: React.FC<NotificationProps & { onClick: () => void }> = ({
  type,
  message,
  onClick,
}) => {
  const category = type === 'SCHEDULE_CREATED' ? '일정' : '초대';

  return (
    <ItemWrapper>
      {type === 'INVITATION' ? (
        <button onClick={onClick}>
          <Icon src={iconSrc} alt={`${type} 알림 아이콘`} />
          <Message>
            <span>[ {category} ]</span>
            {message}
          </Message>
        </button>
      ) : (
        <div>
          <Icon src={iconSrc} alt={`${type} 알림 아이콘`} />
          <Message>
            <span>[ {category} ]</span>
            {message}
          </Message>
        </div>
      )}
    </ItemWrapper>
  );
};
