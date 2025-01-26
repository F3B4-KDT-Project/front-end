import styled from '@emotion/styled';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
`;

export const SignInLogo = styled.section`
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

export const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.69rem;
`;

export const SignInButtonWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  div {
    display: flex;
    gap: 1.06rem;
    align-items: center;

    span {
      color: var(--white);
      font-family: 'Pretendard';
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    button {
      background-color: transparent;
      border: none;
      color: var(--white);
      font-family: 'Pretendard';
      font-size: 1.375rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
`;
