import React from 'react';
import iconSrc from '../../../../assets/icons/notification_item.svg';
import { NotificationProps } from '../../../../models/MyPage';
import { ItemWrapper, Message } from './style';

<<<<<<< HEAD
export const Item: React.FC<NotificationProps> = ({ type, message }) => {
  return (
    <ItemWrapper>
      <img src={iconSrc} alt={`${type} 알림 아이콘`} />
      <Message>
        <span>[ {type} ]</span>
        {message}
      </Message>
=======
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
          <img src={iconSrc} alt={`${type} 알림 아이콘`} />
          <Message>
            <span>[ {category} ]</span>
            {message}
          </Message>
        </button>
      ) : (
        <div>
          <img src={iconSrc} alt={`${type} 알림 아이콘`} />
          <Message>
            <span>[ {category} ]</span>
            {message}
          </Message>
        </div>
      )}
>>>>>>> 9c59c688476b9eea4bc5f1147cf882bede21fcad
    </ItemWrapper>
  );
};
