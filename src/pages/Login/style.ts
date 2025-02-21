import styled from '@emotion/styled';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 7.37rem;
`;

export const LoginHeader = styled.header`
  display: flex;
  gap: 2.69rem;
  align-items: center;

  img {
    width: 12.5rem;
    height: 12.5rem;
  }
`;

export const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;

  p {
    ${({ theme }) => theme.fonts.body7};
  }

  h1 {
    ${({ theme }) => theme.fonts.header3};
  }
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
