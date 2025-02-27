import styled from '@emotion/styled';

export const Container = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  margin: 0;
  padding: 0.62rem;

  width: 47.9375rem;
  height: 100%;

  p {
    font-size: 30px;
  }

  flex: 2;

  border-radius: 0.9375rem;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 0px 4px 0px ${({ theme }) => theme.colors.black} inset;
`;

export const ButtonContainer = styled.div`
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  color: ${({ theme }) => theme.colors.gray};
`;

export const CopyButton = styled.button`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
`;

export const SaveButton = styled.button`
  position: absolute;
  right: 1.5rem;
  bottom: 1.5rem;
`;

export const HighlightButton = styled.div`
  z-index: 10;
  position: absolute;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.input};
  border: none;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
`;

// 전역 스타일 추가 (형광펜 스타일)
export const GlobalStyle = styled.div`
  .highlighted-code {
    z-index: 5;
    background-color: rgba(255, 255, 0, 0.5);
    cursor: pointer;
  }

  > svg {
    color: ${({ theme }) => theme.colors.white};
  }
`;
