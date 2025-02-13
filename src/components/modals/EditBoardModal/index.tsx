import React, { useState } from 'react';
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  InputFieldWrapper,
  InputField,
  IdList,
  ButtonWrapper,
  SubmitButton,
  Line,
  ErrorMessage,
  SuccessMessage,
} from './style';
import { BsXLg } from 'react-icons/bs';
import { BoardModalProps } from '../../../models/Modal';
import { useTheme } from '@emotion/react';

const EditBoardModal: React.FC<BoardModalProps> = ({ isOpen, onClose }) => {
  const theme = useTheme(); // 현재 적용된 테마 가져오기
  // 더미 데이터로 초기값 설정
  const [boardName, setBoardName] = useState('9oorm_KDT');
  const [id, setId] = useState('');
  const [idList, setIdList] = useState<string[]>(['user1', 'user2']);
  const [idError, setIdError] = useState(false);
  const [idSuccess, setIdSuccess] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // 기본 엔터 동작 방지
      if (id.trim()) {
        if (!idList.includes(id)) {
          setIdList([...idList, id]);
          setIdSuccess(true); // 성공 메시지 표시
          setIdError(false); // 에러 메시지 제거
          setId(''); // 입력 초기화
        } else {
          setIdError(true); // 중복된 ID 입력 시 에러 표시
          setIdSuccess(false); // 성공 메시지 제거
        }
      } else {
        setIdError(true); // 빈 입력 값에 대한 에러 표시
        setIdSuccess(false); // 성공 메시지 제거
      }
    }
  };

  const handleRemoveId = (targetId: string) => {
    setIdList(idList.filter((item) => item !== targetId));
  };

  const handleEditBoard = () => {
    onClose(); // 모달 닫기
  };

  if (!isOpen) {
    return null; // 모달이 열려있지 않으면 렌더링하지 않음
  }

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <h1>교실 수정하기</h1>
          <button onClick={onClose}>
            <BsXLg size="1.5rem" color={theme.colors.lightGray} />
          </button>
        </ModalHeader>
        <Line />
        <InputField
          type="text"
          placeholder="교실 이름을 입력하세요."
          value={boardName}
          onChange={(e) => setBoardName(e.target.value)}
        />
        <h2>참여자 초대하기</h2>
        <InputFieldWrapper>
          <InputField
            type="text"
            placeholder="초대하려는 사용자의 아이디를 입력하세요."
            value={id}
            onChange={(e) => setId(e.target.value)}
            onKeyDown={handleKeyDown}
            style={{
              borderColor: idError ? theme.colors.red : theme.colors.lightGray,
            }}
          />
          {idSuccess && <SuccessMessage>초대가 완료되었습니다.</SuccessMessage>}
          {idError && (
            <ErrorMessage>틀린 아이디거나 없는 아이디입니다..</ErrorMessage>
          )}
        </InputFieldWrapper>
        <IdList>
          {idList.map((item, index) => (
            <div key={index} className="email-item">
              {item}
              <button onClick={() => handleRemoveId(item)}>
                <BsXLg size="0.9375rem" color={theme.colors.lightGray} />
              </button>
            </div>
          ))}
        </IdList>
        <ButtonWrapper>
          <SubmitButton onClick={handleEditBoard}>교실 수정</SubmitButton>
        </ButtonWrapper>
      </ModalContent>
    </ModalOverlay>
  );
};

export default EditBoardModal;
