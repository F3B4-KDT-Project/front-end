import styled from '@emotion/styled';

export const InputSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 38.4375rem;

  input {
    border-radius: 2.1875rem;
    border: 3px solid var(--bc-light-gray, #dadada);
    background-color: var(--bc-input, rgba(218, 218, 218, 0.35));
    padding: 1.125rem 1.875rem;
    color: var(--bc-white);
    font-family: 'Pretendard';
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    &::placeholder {
      color: var(--bc-white);
      font-family: 'Pretendard';
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }

  div {
    color: var(--bc-red, #d75656);
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: right;
  }
`;
