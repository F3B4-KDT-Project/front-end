import styled from '@emotion/styled';

export const InputSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 38.4375rem;

  input {
    border-radius: 2.1875rem;
    border: 3px solid var(--light-gray);
    background-color: var(--input);
    padding: 1.125rem 1.875rem;
    color: var(--white);
    font-family: 'Pretendard';
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    &::placeholder {
      color: var(--white);
      font-family: 'Pretendard';
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }

  div {
    color: var(--red);
    font-family: 'Pretendard';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: right;
  }
`;
