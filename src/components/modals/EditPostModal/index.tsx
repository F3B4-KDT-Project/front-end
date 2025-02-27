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

const EditPostModal: React.FC<BoardModalProps> = ({ isOpen, onClose }) => {
  const theme = useTheme(); // 현재 적용된 테마 가져오기
  // 더미 데이터: 기존 수업 제목과 사용 언어
  const dummyData = {
    title: '기존 수업 제목',
    language: 'JavaScript',
  };

  // 상태 관리
  const [postName, setPostName] = useState(dummyData.title);
  const [selectedLang, setSelectedLang] = useState<string>(dummyData.language);

  // 언어 옵션
  const languages = ['JavaScript', 'TypeScript', 'Java'];

  const handleLangClick = (lang: string) => {
    setSelectedLang(lang); // 선택한 언어 업데이트
  };

  const handleEditPost = () => {
    console.log('수정된 수업 제목:', postName);
    console.log('수정된 사용 언어:', selectedLang);
    onClose(); // 모달 닫기
  };

  // 모달이 열려 있지 않으면 null 반환
  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <h1>수업 수정하기</h1>
          <button onClick={onClose}>
            <BsXLg size="1.5rem" color={theme.colors.lightGray} />
          </button>
        </ModalHeader>
        <Line />
        <InputField
          type="text"
          placeholder="수업 제목을 입력하세요."
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
          <SubmitButton onClick={handleEditPost}>수업 수정</SubmitButton>
        </ButtonWrapper>
      </ModalContent>
    </ModalOverlay>
  );
};

export default EditPostModal;
