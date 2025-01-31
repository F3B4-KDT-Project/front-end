import styled from '@emotion/styled';

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 30rem;
  height: 2.8125rem;
  border: 1px solid var(--light-gray);
  background: var(--input, rgba(218, 218, 218, 0.35));
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
  color: var(--light-gray);
  font-family: 'Pretendard';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const Nickname = styled.p`
  color: var(--light-gray);
  font-family: 'Pretendard';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const RemoveButton = styled.button`
  .CloseButton {
    display: flex;
    flex-shrink: 0;
    background: none;
    border: none;
    color: var(--light-gray);
    width: 1.125rem;
    height: 1.125rem;
    cursor: pointer;
  }
`;
