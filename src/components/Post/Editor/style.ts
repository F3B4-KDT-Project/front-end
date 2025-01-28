import styled from '@emotion/styled';
import { BsFiles,BsDownload } from 'react-icons/bs';

export const Container = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  margin: 0;
  padding: 0.62rem;
  box-sizing: border-box;

  width: 47.9375rem;
  height: 46.125rem;

  p {
    font-size: 30px;
  }

  flex: 2;

  border-radius: 0.9375rem;
  background: var(--background, #2b2b2b);
  box-shadow: 0px 0px 4px 0px var(--black, #161616) inset;
`;

export const ButtonContainer=styled.div`
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  color: var(--gray);
`;

export const CopyButton=styled(BsFiles)`
  width: 1.5rem;
  height: 1.5rem;

  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
`;

export const SaveButton=styled(BsDownload)`
  width: 1.5rem;
  height: 1.5rem;

  position: absolute;
  right: 1.5rem;
  bottom : 1.5rem;
`;

export const HighlightButton = styled.div`
  position: absolute;
  z-index: 10;
  background-color: var(--input);
  border: none;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
`;

// 전역 스타일 추가 (형광펜 스타일)
export const GlobalStyle = styled.div`
  .highlighted-code {
    background-color: rgba(255, 255, 0, 0.5);
    /* background-color: var(--input); */
    cursor: pointer;
  }
  
  > svg{
    color: var(--white);
  }
`;