import styled from '@emotion/styled';

export const ModalOverlay = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 7.875rem;
  width: 100%;
  min-height: 100vh;
  background: var(--modal-bg);
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  border-radius: 0.9375rem;
  border: 1px solid var(--gray);
  background: var(--background);
  padding: 2rem;
  box-shadow:
    0px 0px 4px 0px var(--light-gray) inset,
    0px 0px 4px 0px var(--black);

  h3 {
    color: var(--white);
    font-family: 'Pretendard';
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 1.69rem;
    margin-bottom: 1.63rem;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.37rem;

  h2 {
    color: var(--white);
    font-family: 'Pretendard';
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .CloseButton {
    width: 1.5rem;
    height: 1.5rem;
    flex-shrink: 0;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--light-gray);
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 0.125rem;
  flex-shrink: 0;
  border-radius: 3.125rem;
  background-color: var(--gray);
  margin-bottom: 1.37rem;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const PartWrapper = styled.div`
  width: 36.125rem;
  height: 19rem; /* 적절한 높이 설정 */
  overflow-y: auto; /* 스크롤 가능 */
  flex-shrink: 0;
  border-radius: 0.4375rem;
  background-color: var(--modal-area);
  padding: 0.62rem 0.62rem;

  /* 스크롤바 스타일 */
  ::-webkit-scrollbar {
    width: 0.5625rem; /* 스크롤바 너비 */
    background-color: var(--input); /* 스크롤바 배경 */
    border-radius: 0.3125rem; /* 스크롤바 둥글기 */
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--light-gray); /* 스크롤바 색상 */
    border-radius: 0.3125rem; /* 스크롤바 둥글기 */
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--white); /* 마우스 오버 시 색상 */
  }
`;

export const InputFieldWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  gap: 1rem;
`;

export const InputField = styled.input`
  display: flex;
  width: 19.125rem;
  height: 2rem;
  flex-shrink: 0;
  background: var(--input);
  border-radius: 0.4375rem;
  border: 3px solid var(--light-gray);
  backdrop-filter: blur(2px);
  padding: 0.81rem 1.3rem;
  color: var(--white);
  font-family: 'Pretendard';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  outline: none;
`;

export const AddButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 14rem;
  height: 4rem;
  flex-shrink: 0;
  border-radius: 0.4375rem;
  background: var(--input);
  color: var(--white);
  font-family: 'Pretendard';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: none;
  cursor: pointer;

  &:hover {
    background: var(--black);
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.94rem;
`;

export const SubmitButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20.6875rem;
  height: 4.0625rem;
  flex-shrink: 0;
  border-radius: 0.4375rem;
  background: var(--input);
  color: var(--white);
  font-family: 'Pretendard';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: none;
  cursor: pointer;

  &:hover {
    background: var(--black);
  }
`;
