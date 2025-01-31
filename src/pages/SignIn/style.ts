import styled from '@emotion/styled';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const SignInHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.32rem;

  img {
    width: 9.375rem;
    height: 8.30244rem;
  }

  p {
    color: var(--white);
    text-align: center;
    font-family: 'Pretendard';
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 90%; /* 0.9rem */
  }
`;

export const SignInBody = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7.06rem;
  margin-top: 5.25rem;
  margin-bottom: 1.5rem;
`;

export const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 38.4375rem;
  gap: 1.69rem;
`;

export const SignInFooter = styled.footer`
  display: flex;
  gap: 1.06rem;
  align-items: center;

  p {
    color: var(--white);
    font-family: 'Pretendard';
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  button {
    color: var(--white);
    font-family: 'Pretendard';
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
  }
`;
