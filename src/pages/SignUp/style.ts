import styled from '@emotion/styled';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5.19rem;
  justify-content: center;
  height: 100vh;
`;

export const SignUpHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.19rem;

  img {
    width: 7.8125rem;
    height: 6.91869rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.88rem;

    p {
      color: var(--white);
      text-align: center;
      font-family: 'Pretendard';
      font-size: 1rem;
      font-style: normal;
      font-weight: 500;
      line-height: 90%; /* 0.9rem */
    }

    h1 {
      color: var(--white);
      font-family: 'Pretendard';
      font-size: 5.3125rem;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
    }
  }
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5.38rem;
  align-items: center;
`;

export const SignUpFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  width: 38.4375rem;
  gap: 2.19rem;
`;
