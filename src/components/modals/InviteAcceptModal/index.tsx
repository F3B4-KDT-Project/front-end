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
import { BoardModalProps } from '../../../models/Modal';
import { useTheme } from '@emotion/react';

const InviteAcceptModal: React.FC<BoardModalProps> = ({ isOpen, onClose }) => {
  const theme = useTheme();
  const [isAccepted, setIsAccepted] = useState(false);

  // 더미 데이터
  const dummyData = {
    boardName: '9oorm_KDT',
  };

  // 초대 수락 버튼 클릭 핸들러
  const handleAcceptInvite = () => {
    setIsAccepted(true);
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
        <Body>
          <h2>{dummyData.boardName}</h2>
          {isAccepted ? (
            <div>
              <p>초대가 수락되었습니다.</p>
            </div>
          ) : (
            <div>
              <p>해당 초대를 수락하시겠습니까?</p>
            </div>
          )}
        </Body>
        {!isAccepted && (
          <ButtonWrapper>
            <SubmitButton onClick={handleAcceptInvite}>초대 수락</SubmitButton>
          </ButtonWrapper>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

export default InviteAcceptModal;
