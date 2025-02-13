import styled from '@emotion/styled';

export const SideBar = styled.div`
  width: 7.875rem;
  box-shadow: ${({ theme }) => theme.colors.navigationBs} !important;
  background: ${({ theme }) => theme.colors.navigationGr};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0rem;
`;

export const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s;
  background-color: ${({ theme }) => theme.colors.input};
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  border: 3px dashed ${({ theme }) => theme.colors.lightGray};

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }

  .AddIcon {
    width: 5rem;
    height: 5rem;
    flex-shrink: 0;
    transition: background-color 0.2s;
    color: ${({ theme }) => theme.colors.lightGray};
  }
`;

export const ProfileButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s;
  background-color: ${({ theme }) => theme.colors.icon};
  width: 5rem;
  height: 5rem;
  border-radius: 50%;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }

  .ProfileIcon {
    width: 3.125rem;
    height: 3.125rem;
    flex-shrink: 0;
    transition: background-color 0.2s;
    color: ${({ theme }) => theme.colors.lightGray};
  }
`;

export const BoardItem = styled.div`
  width: 5rem;
  height: 5rem;
  margin-bottom: 2rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.input};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  ${({ theme }) => theme.fonts.body1};
`;
