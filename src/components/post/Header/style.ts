import styled from '@emotion/styled';

export const Container = styled.header`
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

export const Board = styled.p`
  color: var(--light-gray);
  margin: 0; /* 기본 마진 제거 */
  font-family: 'Pretendard Variable';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Post = styled.h1`
  color: var(--white);
  margin: 0; /* 기본 마진 제거 */
  text-shadow: 0px 0px 4px var(--black, #161616);
  font-family: 'Pretendard Variable';
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const EditButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  background: transparent;
  border: none;
  margin-top: 3rem;
  cursor: pointer;
`;
