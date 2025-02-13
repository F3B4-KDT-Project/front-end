import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.31rem;
`;

export const Board = styled.h1`
  color: ${({ theme }) => theme.colors.lightGray};
  margin: 0; /* 기본 마진 제거 */
  ${({ theme }) => theme.fonts.header1};
`;

export const Post = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  margin: 0; /* 기본 마진 제거 */

  text-shadow: 0px 0px 4px ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.header2};
`;
