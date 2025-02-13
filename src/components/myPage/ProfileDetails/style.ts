import styled from '@emotion/styled';

export const ProfileInfoDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  label {
    color: ${({ theme }) => theme.colors.lightGray};
    ${({ theme }) => theme.fonts.title2};
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const EditInfo = styled.div`
  display: flex;
  gap: 1.88rem;
  align-items: center;

  button {
    width: 5.75rem;
    height: 3.4375rem;
    border: none;
    border-radius: 1.0625rem;
    background: ${({ theme }) => theme.colors.gray};

    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.button2};

    &:hover {
      background: ${({ theme }) => theme.colors.lightGray};
      color: ${({ theme }) => theme.colors.background};
    }
  }
`;

export const ProfileInfoDetailsContent = styled.div`
  color: ${({ theme }) => theme.colors.text};
  ${({ theme }) => theme.fonts.body7};
`;
