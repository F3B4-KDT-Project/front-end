/* eslint-disable react/react-in-jsx-scope */
import { Global, Theme, css } from '@emotion/react';
import { useTheme } from '@emotion/react';
import emotionReset from 'emotion-reset';

const GlobalStyle = (theme: Theme) => css`
  ${emotionReset}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-family: 'Pretendard';
    // color-scheme: dark light;
    --transparent-opacity: 0.35;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('./assets/fonts/Pretendard-Medium.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  body {
    min-width: 1180px;
    min-height: 100vh;

    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    outline: none;
  }

  input {
    outline: none;
  }

  input:focus {
    outline: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default function GlobalStyles() {
  const theme = useTheme(); // 현재 적용된 테마 가져오기
  return <Global styles={GlobalStyle(theme)} />;
}
