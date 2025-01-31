import React, { useState } from 'react';
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  LangFieldWrapper,
  InputField,
  ButtonWrapper,
  SubmitButton,
  Line,
} from './style';
import { BsXLg } from 'react-icons/bs';
import { BoardModalProps } from '../../../models/Modal';

const AddPostModal: React.FC<BoardModalProps> = ({ onClose }) => {
  const [postName, setPostName] = useState('');
  const [selectedLang, setSelectedLang] = useState<string | null>(null);

  const languages = ['JavaScript', 'TypeScript', 'Java'];

  const handleLangClick = (lang: string) => {
    setSelectedLang(lang); // 선택한 언어를 설정
  };

  const handleCreatePost = () => {
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
          value={postName}
          onChange={(e) => setPostName(e.target.value)}
        />
        <h3>사용 언어 선택</h3>
        <LangFieldWrapper>
          {languages.map((lang) => (
            <button
              key={lang}
              className={`lang-button ${selectedLang === lang ? 'active' : ''}`}
              onClick={() => handleLangClick(lang)}
            >
              {lang}
            </button>
          ))}
        </LangFieldWrapper>
        <ButtonWrapper>
          <SubmitButton onClick={handleCreatePost}>교실 생성</SubmitButton>
        </ButtonWrapper>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AddPostModal;
