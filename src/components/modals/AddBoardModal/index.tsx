import React, { useState } from 'react';
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  InputFieldWrapper,
  InputField,
  EmailList,
  ButtonWrapper,
  SubmitButton,
  Line,
  ErrorMessage,
  SuccessMessage,
} from './style';
import { BsXLg } from 'react-icons/bs';
import { BoardModalProps } from '../../../models/Modal';

const AddBoardModal: React.FC<BoardModalProps> = ({ onClose }) => {
  const [boardName, setBoardName] = useState('');
  const [email, setEmail] = useState('');
  const [emailList, setEmailList] = useState<string[]>([]);
  const [emailError, setEmailError] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // 기본 엔터 동작 방지
      if (validateEmail(email)) {
        if (!emailList.includes(email)) {
          setEmailList([...emailList, email]);
          setEmailSuccess(true);
          setEmailError(false);
          setEmail(''); // 입력 초기화
        } else {
          setEmailError(true);
          setEmailSuccess(false);
        }
      } else {
        setEmailError(true);
        setEmailSuccess(false);
      }
    }
  };

  const handleRemoveEmail = (targetEmail: string) => {
    setEmailList(emailList.filter((item) => item !== targetEmail));
  };

  const handleCreateBoard = () => {
    console.log('게시판 이름:', boardName);
    console.log('참여자 이메일 목록:', emailList);
    onClose(); // 모달 닫기
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <h2>게시판 생성하기</h2>
          <BsXLg className="CloseButton" onClick={onClose} />
        </ModalHeader>
        <Line />
        <InputField
          type="text"
          placeholder="게시판 이름을 입력하세요."
          value={boardName}
          onChange={(e) => setBoardName(e.target.value)}
        />
        <h3>참여자 초대하기</h3>
        <InputFieldWrapper>
          <InputField
            type="text"
            placeholder="초대하려는 사용자의 이메일을 입력하세요."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleKeyDown}
            style={{
              borderColor: emailError ? 'var(--red)' : 'var(--light-gray)',
            }}
          />
          {emailSuccess && (
            <SuccessMessage>초대가 완료되었습니다.</SuccessMessage>
          )}
          {emailError && (
            <ErrorMessage>틀린 이메일이거나 없는 이메일입니다.</ErrorMessage>
          )}
        </InputFieldWrapper>
        <EmailList>
          {emailList.map((item, index) => (
            <div key={index} className="email-item">
              {item}
              <BsXLg
                className="CloseEmailButton"
                onClick={() => handleRemoveEmail(item)}
              />
            </div>
          ))}
        </EmailList>
        <ButtonWrapper>
          <SubmitButton onClick={handleCreateBoard}>게시판 생성</SubmitButton>
        </ButtonWrapper>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AddBoardModal;
