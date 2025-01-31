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
  min-width: 36rem;
  flex-shrink: 0;
  flex-direction: column;
  flex-shrink: 0;
  border-radius: 0.9375rem;
  border: 1px solid var(--gray);
  background: var(--background);
  padding: 2rem;
  box-shadow:
    0px 0px 4px 0px var(--light-gray) inset,
    0px 0px 4px 0px var(--black);
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
  margin-bottom: 3.37rem;
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    color: var(red);
    text-shadow: 0px 0px 4px var(--black);
    font-family: 'Pretendard';
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 0.31rem;
  }

  h1 {
    color: var(--red);
    text-shadow: 0px 0px 4px var(--black);
    font-family: 'Pretendard';
    font-size: 2.1875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 3.31rem;
  }

  h3 {
    color: var(--white);
    text-align: center;
    font-family: 'Pretendard';
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.81rem;
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
  background: var(--input);
  color: var(--white);
  font-family: 'Pretendard';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: none;
  cursor: pointer;
  margin-bottom: 0.5rem;

  &:hover {
    background: var(--black);
  }
`;
