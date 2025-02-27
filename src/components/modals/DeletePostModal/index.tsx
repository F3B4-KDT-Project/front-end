import React from 'react';
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

const DeleteBoardModal: React.FC<BoardModalProps> = ({ isOpen, onClose }) => {
  const theme = useTheme();
  // 더미 데이터
  const dummyData = {
    boardName: '9oorm_KDT',
    postName: '[FE] 모달창 컴포넌트 만들기',
  };

  // 삭제 버튼 클릭 핸들러
  const handleDeleteBoard = () => {
    onClose(); // 모달 닫기
  };
  if (!isOpen) {
    return null; // 모달이 열려있지 않으면 렌더링하지 않음
  }

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <h1>수업 삭제하기</h1>
          <button onClick={onClose}>
            <BsXLg size="1.5rem" color={theme.colors.lightGray} />
          </button>
        </ModalHeader>
        <Line />
        <Body>
          <h2>{dummyData.boardName}</h2>
          <h3>{dummyData.postName}</h3>
          <div>
            <p>해당 수업을 삭제하시겠습니까?</p>
            <p>삭제한 수업은 복구할 수 없습니다.</p>
          </div>
        </Body>
        <ButtonWrapper>
          <SubmitButton onClick={handleDeleteBoard}>수업 삭제</SubmitButton>
        </ButtonWrapper>
      </ModalContent>
    </ModalOverlay>
  );
};

export default DeleteBoardModal;
