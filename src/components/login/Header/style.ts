import styled from '@emotion/styled';

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
