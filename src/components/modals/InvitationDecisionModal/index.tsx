import React, { useState } from 'react';
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Line,
  Body,
  ButtonWrapper,
  SubmitButton,
} from './style';
import { BsXLg } from 'react-icons/bs';
import { InviteDecisionProps } from '../../../models/Modal';
import { useTheme } from '@emotion/react';
import { useAcceptInvitation } from '../../../hooks/Notifications/useAcceptInvitation';
import { useRejectInvitation } from '../../../hooks/Notifications/useRejectInvitation';

const InvitationDecisionModal: React.FC<InviteDecisionProps> = ({
  isOpen,
  onClose,
  notificationId,
  boardId,
  boardTitle,
}) => {
  const theme = useTheme();
  const { mutate: acceptNotification } = useAcceptInvitation();
  const { mutate: rejectNotification } = useRejectInvitation();

  const [isAccepted, setIsAccepted] = useState(false);
  const [isRejected, setIsRejected] = useState(false);
  const [isDecision, setIsDecision] = useState(false);

  // 더미 데이터
  // 초대 수락 버튼 클릭 핸들러
  const handleAcceptInvite = () => {
    acceptNotification(
      { notificationId, boardId },
      {
        onSuccess: () => {
          setIsAccepted(true);
          setIsDecision(true);
          console.log('초대 수락 성공');
        },
        onError: (error) => {
          console.error('초대 수락 실패:', error);
          alert('초대 수락에 실패했습니다.');
        },
      }
    );
  };

  // 초대 거절 버튼 클릭 핸들러
  const handleRejectInvite = () => {
    rejectNotification(notificationId, {
      onSuccess: () => {
        setIsRejected(true);
        setIsDecision(true);
        console.log('초대 거절 성공');
      },
      onError: (error) => {
        console.error('초대 거절 실패:', error);
        alert('초대 거절에 실패했습니다.');
      },
    });
  };

  if (!isOpen) {
    return null; // 모달이 열려있지 않으면 렌더링하지 않음
  }

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <h1>초대 수락하기</h1>
          <button onClick={onClose}>
            <BsXLg size="1.5rem" color={theme.colors.lightGray} />
          </button>
        </ModalHeader>
        <Line />
        <Body isAccepted={isAccepted} isRejected={isRejected}>
          <h2>{boardTitle}</h2>
          {isAccepted ? (
            <div>
              <p>초대가 수락되었습니다.</p>
            </div>
          ) : isRejected ? (
            <div>
              <p>초대가 거절되었습니다.</p>
            </div>
          ) : (
            <div>
              <p>해당 초대를 수락하시겠습니까?</p>
            </div>
          )}
        </Body>
        {!isDecision && (
          <ButtonWrapper>
            <SubmitButton onClick={handleRejectInvite}>초대 거절</SubmitButton>
            <SubmitButton onClick={handleAcceptInvite}>초대 수락</SubmitButton>
          </ButtonWrapper>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

export default InvitationDecisionModal;
