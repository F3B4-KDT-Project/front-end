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

const DeleteBoardModal: React.FC<BoardModalProps> = ({ isOpen, onClose }) => {
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
          <h2>수업 삭제하기</h2>
          <BsXLg className="CloseButton" onClick={onClose} />
        </ModalHeader>
        <Line />
        <Body>
          <p>{dummyData.boardName}</p>
          <h1>{dummyData.postName}</h1>
          <h3>
            해당 수업을 삭제하시겠습니까?
            <br />
            삭제한 수업은 복구할 수 없습니다.
          </h3>
        </Body>
        <ButtonWrapper>
          <SubmitButton onClick={handleDeleteBoard}>수업 삭제</SubmitButton>
        </ButtonWrapper>
      </ModalContent>
    </ModalOverlay>
  );
};

export default DeleteBoardModal;
