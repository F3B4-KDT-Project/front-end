import styled from '@emotion/styled';

export const EmptyBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  padding: 2.44rem 3.38rem;
  gap: 2.31rem;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Message = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
  text-shadow: 0px 0px 4px ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.title7};
  margin-top: 4.81rem;

  strong {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 900;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
  text-shadow: 0px 0px 4px ${({ theme }) => theme.colors.black};
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 2.19rem;

  strong {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 900;
  }
`;

export const FlexContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 1.44rem;
`;

export const BodyContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-shrink: 0;
  padding: 2.12rem 2.06rem;
  border-radius: 2.1875rem;
  background-color: ${({ theme }) => theme.colors.container};
`;

export const Participants = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: ${({ theme }) => theme.colors.text};
  ${({ theme }) => theme.fonts.body4};
  margin-bottom: 1.06rem;
  margin-right: 0.56rem;
  gap: 0.81rem;
`;

export const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.69rem;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.69rem;
  gap: 0.94rem;
`;

export const PageNumber = styled.button<{ isActive: boolean }>`
  ${({ theme }) => theme.fonts.body6};
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.white : theme.colors.lightGray};

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;
