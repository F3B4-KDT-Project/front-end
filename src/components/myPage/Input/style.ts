import styled from '@emotion/styled';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex-grow: 1;

  input {
    border-radius: 2.1875rem;
    border: 3px solid ${({ theme }) => theme.colors.lightGray};
    background-color: ${({ theme }) => theme.colors.input};
    padding: 1.125rem 1.875rem;
    color: ${({ theme }) => theme.colors.text};
    ${({ theme }) => theme.fonts.input3};

    &::placeholder {
      color: ${({ theme }) => theme.colors.text};
      ${({ theme }) => theme.fonts.input3};
    }
  }

  div {
    color: ${({ theme }) => theme.colors.red};
    ${({ theme }) => theme.fonts.caption4};
    text-align: right;
  }
`;
