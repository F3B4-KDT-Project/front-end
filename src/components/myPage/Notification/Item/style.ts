import styled from '@emotion/styled';

export const ItemWrapper = styled.li`
  height: 2.8125rem;
  display: flex;
  align-items: center;
  gap: 0.69rem;
  border-radius: 1.875rem;
  border: solid 1px ${({ theme }) => theme.colors.lightGray};
  background: ${({ theme }) => theme.colors.input};
  padding: 0 0.69rem;

  img {
    width: 1.875rem;
    height: 1.875rem;
  }
`;

export const Message = styled.p`
  display: flex;
  gap: 1rem;
  ${({ theme }) => theme.fonts.body3}
`;
