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
  padding: 2rem 0rem;
`;

export const AddButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

export const BoardItem = styled.div`
  width: 5rem;
  height: 5rem;
  margin-bottom: 2rem;
  border-radius: 50%;
  background: var(--input);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  font-family: 'Pretendard';
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  line-height: normal;
`;
