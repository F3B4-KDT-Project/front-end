import styled from '@emotion/styled';

export const ProfileInfoDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  label {
    color: var(--light-gray);
    font-family: 'Pretendard';
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.06875rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    button {
      background: none;
      border: none;
      cursor: pointer;

      .icon_edit {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
`;

export const EditInfo = styled.div`
  display: flex;
  gap: 1.88rem;
  align-items: center;

  button {
    width: 5.75rem;
    height: 3.4375rem;
    border: none;
    border-radius: 1.0625rem;
    background: var(--gray, #5a5a5a);
    cursor: pointer;

    color: var(--white, #fff);
    font-family: 'Pretendard';
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.025rem;

    &:hover {
      background: var(--light-gray);
      color: var(--background);
    }
  }
`;

export const ProfileInfoDetailsContent = styled.div`
  color: #fff;
  font-family: 'Pretendard';
  font-size: 1.625rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
