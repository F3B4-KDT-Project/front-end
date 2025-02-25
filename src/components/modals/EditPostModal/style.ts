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

  h2 {
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

export const LangFieldWrapper = styled.div`
  display: flex;
  justify-content: left;
  gap: 1rem;
  margin-bottom: 1.5rem;

  .lang-button {
    padding: 0.7rem 1.5rem;
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
    border-radius: 1.875rem;
    background-color: ${({ theme }) => theme.colors.input};
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
    ${({ theme }) => theme.fonts.button1};
    transition: all 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.gray};
    }

    &.active {
      background-color: ${({ theme }) => theme.colors.green};
      border-color: ${({ theme }) => theme.colors.green};
      color: ${({ theme }) => theme.colors.background};
    }
  }
`;

export const InputField = styled.input`
  width: 34.875rem;
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

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5.94rem;
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
