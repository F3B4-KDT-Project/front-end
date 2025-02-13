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
  min-width: 36rem;
  flex-shrink: 0;
  flex-direction: column;
  flex-shrink: 0;
  border-radius: 0.9375rem;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  background: ${({ theme }) => theme.colors.background};
  padding: 2rem;
  box-shadow:
    0px 0px 4px 0px ${({ theme }) => theme.colors.lightGray} inset,
    0px 0px 4px 0px ${({ theme }) => theme.colors.black};
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
  margin-bottom: 3.37rem;
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    color: ${({ theme }) => theme.colors.red};
    text-shadow: 0px 0px 4px ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.title1};
    margin-bottom: 0.31rem;
  }

  h3 {
    color: ${({ theme }) => theme.colors.red};
    text-shadow: 0px 0px 4px ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.title7};
    margin-bottom: 3.31rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.81rem;
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
    ${({ theme }) => theme.fonts.caption8};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5.25rem;
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
  margin-bottom: 0.5rem;

  &:hover {
    background: ${({ theme }) => theme.colors.black};
  }
`;
