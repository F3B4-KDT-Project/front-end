import styled from '@emotion/styled';

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: var(--input);
  border: 1px solid var(--light-gray);
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
`;

export const ProfileImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Id = styled.p`
  color: var(--white);
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
`;
export const Nickname = styled.p`
  color: var(--light-gray);
  font-size: 0.875rem;
  margin: 0;
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: var(--red);
  cursor: pointer;
  font-size: 1.5rem;

  &:hover {
    color: var(--white);
  }
`;
