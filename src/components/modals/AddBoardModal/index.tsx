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
import { AddBoardModalProps } from '../../../models/Modal';
import { useBoardInvite } from '../../../hooks/Board/useBoardInvite';
import { useCreateBoard } from '../../../hooks/Board/useCreateBoard';

const AddBoardModal: React.FC<AddBoardModalProps> = ({
  onClose,
  onAddBoard,
}) => {
  const [boardName, setBoardName] = useState('');
  const [id, setId] = useState('');
  const [idList, setIdList] = useState<string[]>([]);
  const [idError, setIdError] = useState(false);
  const [idSuccess, setIdSuccess] = useState(false);

  const { mutate: inviteUser } = useBoardInvite();
  const { mutate: createBoard } = useCreateBoard();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // 기본 Enter 동작 방지
      if (id.trim() && id.trim() && !idList.includes(id)) {
        // API 호출
        inviteUser(
          { boardId: 1, loginId: id },
          {
            onSuccess: () => {
              setIdList([...idList, id]);
              setIdSuccess(true);
              setIdError(false);
              setId('');
            },
            onError: () => {
              setIdError(true);
              setIdSuccess(false);
            },
          }
        );
      } else {
        setIdError(true); // 빈 입력값 또는 중복 ID 에러
        setIdSuccess(false);
      }
    }
  };

  const handleRemoveId = (targetId: string) => {
    setIdList(idList.filter((item) => item !== targetId));
  };

  const handleCreateBoard = () => {
    if (!boardName.trim()) {
      alert('교실 이름을 입력하세요.');
      return;
    }

    createBoard(
      { title: boardName },
      {
        onSuccess: () => {
          onAddBoard(boardName); // Sidebar에 교실 이름 전달
          onClose(); // 모달 닫기
        },
        onError: (error) => {
          console.error('교실 생성 실패:', error);
          alert('교실 생성에 실패했습니다. 다시 시도해주세요.');
        },
      }
    );
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <h2>교실 생성하기</h2>
          <BsXLg className="CloseButton" onClick={onClose} />
        </ModalHeader>
        <Line />
        <InputField
          type="text"
          placeholder="교실 이름을 입력하세요."
          value={boardName}
          onChange={(e) => setBoardName(e.target.value)}
        />
        <h3>참여자 초대하기</h3>
        <InputFieldWrapper>
          <InputField
            type="text"
            placeholder="초대하려는 사용자의 아이디를 입력하세요."
            value={id}
            onChange={(e) => setId(e.target.value)}
            onKeyDown={handleKeyDown}
            style={{
              borderColor: idError ? 'var(--red)' : 'var(--light-gray)',
            }}
          />
          {idSuccess && <SuccessMessage>초대가 완료되었습니다.</SuccessMessage>}
          {idError && (
            <ErrorMessage>틀린 아이디거나 없는 아이디입니다.</ErrorMessage>
          )}
        </InputFieldWrapper>
        <IdList>
          {idList.map((item, index) => (
            <div key={index} className="email-item">
              {item}
              <BsXLg
                className="CloseEmailButton"
                onClick={() => handleRemoveId(item)}
              />
            </div>
          ))}
        </IdList>
        <ButtonWrapper>
          <SubmitButton onClick={handleCreateBoard}>교실 생성</SubmitButton>
        </ButtonWrapper>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AddBoardModal;
