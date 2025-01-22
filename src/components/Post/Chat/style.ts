import styled from '@emotion/styled';

export const Container = styled.div`
  width: 29.75rem;
  height: 46.125rem;

  border-radius: 0.9375rem;
  background: var(--bc_gray, #5a5a5a);
  box-shadow: 0px 0px 4px 0px var(--bc_background, #2b2b2b) inset;

  position: flex;
  flex-direction: column;
`;

export const ChatSection = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 91%;
  padding: 0 1.25rem 0 0.88rem;

  display: flex;
  flex-direction: column;
`;

export const InputSection = styled.form`
  width: 100%;
  height: 9%;

  border-radius: 0.9375rem;
  background: var(--bc_input, rgba(218, 218, 218, 0.35));
  box-shadow: 0px -2px 2px 0px rgba(0, 0, 0, 0.35);

  display: flex;

  > input {
    width: 100%;

    border: none;
    border-radius: 0.9375rem;
    background: var(--bc_light-gray, #dadada);

    color: var(--bc_background, #2b2b2b);
    font-family: 'Pretendard Variable';
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.4375rem;
  }

  > svg {
    box-sizing: border-box;
    width: 15%;
    height: 100%;
    padding: 0.44rem;

    border: none;
    fill: var(--bc-gray);
  }
`;
