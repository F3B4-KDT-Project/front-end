import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2.38rem 1.94rem;
  gap: 2.19rem;

  width: 100%;
  height: 100%;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start; /* 컴포넌트를 상단 정렬 */

  width: 100%;
  height: 100%;
  overflow: hidden;

  padding: 1.31rem 1.56rem;
  gap: 1.25rem;

  border-radius: 2.1875rem;
  background-color: ${({ theme }) => theme.colors.input};
  box-shadow: 0px 0px 4px 0px ${({ theme }) => theme.colors.black};
`;
