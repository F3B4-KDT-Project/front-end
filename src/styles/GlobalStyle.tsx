/* eslint-disable react/react-in-jsx-scope */
import { Global, css } from '@emotion/react';
import { useTheme } from '@emotion/react';

const GlobalStyle = (theme) => css`
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
`;

export default function GlobalStyles() {
  const theme = useTheme(); // 현재 적용된 테마 가져오기
  return <Global styles={GlobalStyle(theme)} />;
}
