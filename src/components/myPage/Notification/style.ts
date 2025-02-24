import styled from '@emotion/styled';

export const NotificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.62rem;
  flex-grow: 1; /* 나머지 공간을 채우도록 설정 */

  div {
    color: ${({ theme }) => theme.colors.lightGray};
    ${({ theme }) => theme.fonts.title2};
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const ItemList = styled.ul`
  border-radius: 1.0625rem;
  background: ${({ theme }) => theme.colors.gray};
  padding: 1.25rem 1.31rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-height: 100%;
  overflow-y: auto;
`;
