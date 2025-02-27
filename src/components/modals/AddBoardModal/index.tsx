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
import { useTheme } from '@emotion/react';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const AddBoardModal: React.FC<AddBoardModalProps> = ({ onClose }) => {
  const [boardName, setBoardName] = useState('');
  const [id, setId] = useState('');
  const [idList, setIdList] = useState<string[]>([]);
  const [idError, setIdError] = useState(false);
  const [idSuccess, setIdSuccess] = useState(false);
  const theme = useTheme();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: inviteUser } = useBoardInvite();
  const { mutate: createBoard } = useCreateBoard();
  // ✅ 게시판 생성 Mutation
  const createBoardMutation = useCreateBoard();
  const isLoading = createBoardMutation.isPending; // ✅ 최신 방식

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (id.trim() && !idList.includes(id)) {
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
        setIdError(true);
        setIdSuccess(false);
      }
    }
  };

  // ✅ 게시판 생성 버튼 클릭 이벤트
  const handleCreateBoard = () => {
    if (!boardName.trim()) {
      setIdError(true);
      return;
    }

    createBoard(
      { title: boardName }, // ✅ `boardName`을 API 요청에 포함
      {
        onSuccess: (newBoard) => {
          queryClient.invalidateQueries({ queryKey: ['boards'] }); // ✅ 최신화
          navigate(`/${newBoard.id}`); // ✅ 생성된 게시판으로 이동
          onClose(); // ✅ 모달 닫기
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
          <h1>교실 생성하기</h1>
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
            <ErrorMessage>틀린 아이디거나 없는 아이디입니다.</ErrorMessage>
          )}
        </InputFieldWrapper>
        <IdList>
          {idList.map((item, index) => (
            <div key={index} className="email-item">
              {item}
              <button
                onClick={() => setIdList(idList.filter((i) => i !== item))}
              >
                <BsXLg size="0.9375rem" color={theme.colors.lightGray} />
              </button>
            </div>
          ))}
        </IdList>
        <ButtonWrapper>
          <SubmitButton onClick={handleCreateBoard} disabled={isLoading}>
            {isLoading ? '생성 중...' : '교실 생성'}
          </SubmitButton>{' '}
        </ButtonWrapper>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AddBoardModal;
