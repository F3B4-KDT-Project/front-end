import styled from '@emotion/styled';

export const SideBar = styled.div`
  width: 7.875rem;
  min-height: 100vh;
  box-shadow: var(--navigation-bs) !important;
  background: var(--navigation-gr);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const AddButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  cursor: pointer;
  transition: transform 0.2s;
  background-color: var(--input);
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  border: 3px dashed var(--light-gray);
  box-sizing: border-box;

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
    color: var(--light-gray);
  }
`;

export const ProfileButton = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s;
  background-color: var(--icon);
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
    color: var(--light-gray);
  }
`;
