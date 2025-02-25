import styled from '@emotion/styled';

export const Container = styled.div`
  width: 29.75rem;
  height: 46.125rem;

  border-radius: 0.9375rem;
  background: ${({ theme }) => theme.colors.gray};
  box-shadow: 0px 0px 4px 0px ${({ theme }) => theme.colors.background} inset;

  display: flex;
  flex-direction: column;
`;

export const ChatSection = styled.div`
  flex: 1;
  box-sizing: border-box;
  width: 100%;
  height: 91%;
  padding: 1.06rem 1.31rem;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }

  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  gap: 0.63rem;
`;

export const InputSection = styled.form`
  width: 100%;
  height: 9%;

  border-radius: 0.9375rem;
  background: ${({ theme }) => theme.colors.input};
  box-shadow: 0px -2px 2px 0px rgba(0, 0, 0, 0.35);

  display: flex;

  > textarea {
    width: 100%;
    padding: 1.25rem;
    resize: none;
    scrollbar-width: none;

    border: none;
    border-radius: 0.9375rem;
    background: ${({ theme }) => theme.colors.lightGray};

    color: ${({ theme }) => theme.colors.background};
    ${({ theme }) => theme.fonts.input2};
  }

  > svg {
    width: 15%;
    height: 100%;
    padding: 0.44rem;

    border: none;
    fill: ${({ theme }) => theme.colors.gray};
  }
`;
