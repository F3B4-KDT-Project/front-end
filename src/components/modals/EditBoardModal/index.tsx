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

const EditBoardModal: React.FC<BoardModalProps> = ({ isOpen, onClose }) => {
  // 더미 데이터로 초기값 설정
  const [boardName, setBoardName] = useState('9oorm_KDT');
  const [email, setEmail] = useState('');
  const [emailList, setEmailList] = useState<string[]>([
    'esder1310@hufs.ac.kr',
    'imi21123@gmail.com',
  ]);
  const [emailError, setEmailError] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (validateEmail(email)) {
        if (!emailList.includes(email)) {
          setEmailList([...emailList, email]);
          setEmailSuccess(true);
          setEmailError(false);
          setEmail('');
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

  const handleEditBoard = () => {
    console.log('수정된 게시판 이름:', boardName);
    console.log('수정된 참여자 이메일 목록:', emailList);
    onClose();
  };

  if (!isOpen) {
    return null; // 모달이 열려있지 않으면 렌더링하지 않음
  }

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <h2>게시판 수정하기</h2>
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
          <SubmitButton onClick={handleEditBoard}>게시판 수정</SubmitButton>
        </ButtonWrapper>
      </ModalContent>
    </ModalOverlay>
  );
};

export default EditBoardModal;
