import styled from '@emotion/styled';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 7.37rem;
`;

export const LoginSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.06rem;

  p {
    ${({ theme }) => theme.fonts.body4};
    line-height: 1.125rem;
  }
`;
