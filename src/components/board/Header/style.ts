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
  margin-right: 1.19rem;
`;

export const Board = styled.h1`
  color: var(--white);
  margin: 0; /* 기본 마진 제거 */

  text-shadow: 0px 0px 4px var(--black);
  font-family: 'Pretendard';
  font-size: 4.0625rem;
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
  cursor: pointer;
`;

export const CreateButton = styled.button`
  color: var(--white);
  text-align: center;
  font-family: 'Pretendard';
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 9.92306rem;
  height: 3.25rem;
  flex-shrink: 0;
  border: none;
  border-radius: 3.125rem;
  background: var(--gray);
  cursor: pointer;
  margin-top: 3rem;

  &:hover {
    background: var(--black);
  }
`;
