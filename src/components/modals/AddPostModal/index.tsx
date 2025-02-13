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
import { useTheme } from '@emotion/react';

const AddPostModal: React.FC<BoardModalProps> = ({ isOpen, onClose }) => {
  const theme = useTheme();
  const [postName, setPostName] = useState('');
  const [selectedLang, setSelectedLang] = useState<string | null>(null);

  const languages = ['JavaScript', 'TypeScript', 'Java'];

  const handleLangClick = (lang: string) => {
    setSelectedLang(lang);
  };

  const handleCreatePost = () => {
    if (!postName || !selectedLang) {
      alert('교실 이름과 언어를 모두 선택해주세요.');
      return;
    }
    console.log('교실 생성:', postName, '선택된 언어:', selectedLang);
    onClose(); // 모달 닫기
  };

  if (!isOpen) {
    return null; // 모달이 열리지 않으면 렌더링하지 않음
  }

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
          value={postName}
          onChange={(e) => setPostName(e.target.value)}
        />
        <h2>사용 언어 선택</h2>
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
