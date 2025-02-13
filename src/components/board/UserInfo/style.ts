import styled from '@emotion/styled';

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 30rem;
  height: 2.8125rem;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  background: ${({ theme }) => theme.colors.input};
  border-radius: 1.875rem;
  padding: 0.5rem 0.94rem;
  margin-bottom: 0.62rem;
`;

export const ProfileImage = styled.img`
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 1.875rem;
`;

export const Info = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 8rem;
`;

export const Id = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
  ${({ theme }) => theme.fonts.body3};
`;
export const Nickname = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
  ${({ theme }) => theme.fonts.body3};
`;

export const RemoveButton = styled.button`
  .CloseButton {
    display: flex;
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.lightGray};
    width: 1.125rem;
    height: 1.125rem;
  }
`;
