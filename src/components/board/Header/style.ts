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
  color: ${({ theme }) => theme.colors.white};

  text-shadow: 0px 0px 4px ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.header3}
`;

export const EditButton = styled.button`
  color: ${({ theme }) => theme.colors.lightGray};
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
`;

export const DeleteButton = styled.button`
  color: ${({ theme }) => theme.colors.lightGray};
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
`;

export const CreateButton = styled.button`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  ${({ theme }) => theme.fonts.button3}
  width: 9.92306rem;
  height: 3.25rem;
  flex-shrink: 0;
  border-radius: 3.125rem;
  background: ${({ theme }) => theme.colors.gray};

  margin-top: 3rem;

  &:hover {
    background: ${({ theme }) => theme.colors.black};
  }
`;
