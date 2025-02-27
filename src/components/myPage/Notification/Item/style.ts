import styled from '@emotion/styled';

export const ItemWrapper = styled.li`
  display: flex;
  align-items: center;
  border-radius: 1.875rem;
  border: solid 1px ${({ theme }) => theme.colors.lightGray};
  background: ${({ theme }) => theme.colors.input};
  padding: 0.4rem 0.69rem;

  button {
    display: flex;
    align-items: center;
    gap: 0.69rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.69rem;
  }
`;

export const Icon = styled.img`
  width: 1.875rem;
  height: 1.875rem;
`;

export const Message = styled.p`
  display: flex;
  gap: 1rem;
  ${({ theme }) => theme.fonts.body3}
  color: ${({ theme }) => theme.colors.text};
`;
