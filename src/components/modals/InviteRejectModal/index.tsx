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

const InviteRejectModal: React.FC<BoardModalProps> = ({ isOpen, onClose }) => {
  const theme = useTheme();
  const [isRejected, setIsRejected] = useState(false);

  // 더미 데이터
  const dummyData = {
    boardName: '9oorm_KDT',
  };

  // 초대 수락 버튼 클릭 핸들러
  const handleRejectInvite = () => {
    setIsRejected(true);
  };

  if (!isOpen) {
    return null; // 모달이 열려있지 않으면 렌더링하지 않음
  }

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <h1>초대 거절하기</h1>
          <button onClick={onClose}>
            <BsXLg size="1.5rem" color={theme.colors.lightGray} />
          </button>
        </ModalHeader>
        <Line />
        <Body>
          <h2>{dummyData.boardName}</h2>
          {isRejected ? (
            <div>
              <p>초대가 거절되었습니다.</p>
            </div>
          ) : (
            <div>
              <p>해당 초대를 거절하시겠습니까?</p>
              <p>거절한 초대는 복구할 수 없습니다.</p>
            </div>
          )}
        </Body>
        {!isRejected && (
          <ButtonWrapper>
            <SubmitButton onClick={handleRejectInvite}>초대 거절</SubmitButton>
          </ButtonWrapper>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

export default InviteRejectModal;
