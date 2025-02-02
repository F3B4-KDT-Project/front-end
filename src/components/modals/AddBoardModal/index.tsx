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
import { useBoardInvite } from '../../../hooks/Board/useBoardInvite';

const AddBoardModal: React.FC<BoardModalProps> = ({ onClose }) => {
  const [boardName, setBoardName] = useState('');
  const [id, setId] = useState('');
  const [idList, setIdList] = useState<string[]>([]);
  const [idError, setIdError] = useState(false);
  const [idSuccess, setIdSuccess] = useState(false);

  const { mutate: inviteUser } = useBoardInvite();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // 기본 Enter 동작 방지
      if (id.trim() && !idList.includes(id)) {
        // API 호출
        inviteUser(
          { boardId: 1 /* 실제 boardId를 전달해야 합니다 */, loginId: id },
          {
            onSuccess: (data) => {
              setIdList([...idList, id]); // 초대 성공 시 리스트에 추가
              setIdSuccess(true);
              setIdError(false);
              setId(''); // 입력 초기화
              console.log(`초대 성공: ${data.message}`);
            },
            onError: (error) => {
              setIdError(true);
              setIdSuccess(false);
              console.error(`초대 실패:`, error);
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
      alert('게시판 이름을 입력하세요.');
      return;
    }
    onClose(); // 모달 닫기
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
