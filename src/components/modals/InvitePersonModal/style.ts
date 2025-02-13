import styled from '@emotion/styled';

export const ModalOverlay = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 7.875rem;
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.modalBg};
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  border-radius: 0.9375rem;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  background: ${({ theme }) => theme.colors.background};
  padding: 2rem;
  box-shadow:
    0px 0px 4px 0px ${({ theme }) => theme.colors.lightGray} inset,
    0px 0px 4px 0px ${({ theme }) => theme.colors.black};

  h3 {
    color: ${({ theme }) => theme.colors.text};
    ${({ theme }) => theme.fonts.title3};
    margin-top: 1.69rem;
    margin-bottom: 1.63rem;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.37rem;

  h1 {
    color: ${({ theme }) => theme.colors.text};
    ${({ theme }) => theme.fonts.title6};
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 0.125rem;
  flex-shrink: 0;
  border-radius: 3.125rem;
  background-color: ${({ theme }) => theme.colors.gray};
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
  background-color: ${({ theme }) => theme.colors.modalArea};
  padding: 0.62rem 0.62rem;

  /* 스크롤바 스타일 */
  ::-webkit-scrollbar {
    width: 0.5625rem; /* 스크롤바 너비 */
    background-color: ${({ theme }) => theme.colors.input}; /* 스크롤바 배경 */
    border-radius: 0.3125rem; /* 스크롤바 둥글기 */
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) =>
      theme.colors.lightGray}; /* 스크롤바 색상 */
    border-radius: 0.3125rem; /* 스크롤바 둥글기 */
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) =>
      theme.colors.white}; /* 마우스 오버 시 색상 */
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
  flex-shrink: 0;
  background: ${({ theme }) => theme.colors.input};
  border-radius: 0.4375rem;
  border: 3px solid ${({ theme }) => theme.colors.lightGray};
  backdrop-filter: blur(2px);
  padding: 0.81rem 1.3rem;
  color: ${({ theme }) => theme.colors.text};
  ${({ theme }) => theme.fonts.input1};

  ::placeholder {
    color: ${({ theme }) => theme.colors.text};
  }
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
  background: ${({ theme }) => theme.colors.input};
  color: ${({ theme }) => theme.colors.text};
  ${({ theme }) => theme.fonts.button2};

  &:hover {
    background: ${({ theme }) => theme.colors.black};
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
  background: ${({ theme }) => theme.colors.input};
  color: ${({ theme }) => theme.colors.text};
  ${({ theme }) => theme.fonts.button2};

  &:hover {
    background: ${({ theme }) => theme.colors.black};
  }
`;
