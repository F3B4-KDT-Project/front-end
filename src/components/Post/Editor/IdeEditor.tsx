import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Editor, { loader } from '@monaco-editor/react';

interface IdeEditorProps {
  defaultLanguage: string;
  defaultValue: string;
  language: string;
  value: string;
  theme: string;
}

// custom theme json 파일 구조 정의
interface CustomTheme {
  base: 'vs' | 'vs-dark' | 'hc-black'; // Built-in theme 타입
  inherit: boolean;
  rules: Array<{
    token: string;
    foreground?: string;
    background?: string;
    fontStyle?: string;
  }>;
  colors: Record<string, string>;
}

const IdeEditor: React.FC<IdeEditorProps> = ({
  defaultLanguage,
  defaultValue,
  language,
  value,
  theme,
}) => {
  const [themeLoaded, setThemeLoaded] = useState(false);

  useEffect(() => {
    // JSON 테마 파일 로드 및 Monaco Editor 초기화
    const loadCustomTheme = async () => {
      try {
        const response = await fetch('/monaco-themes/dark.json'); // public 폴더 기준
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // 'response.json()'의 결과를 CustomTheme 타입으로 캐스팅
        const customTheme = (await response.json()) as CustomTheme;

        const monaco = await loader.init(); // Monaco 로더 초기화
        monaco.editor.defineTheme('custom-dark', customTheme); // 커스텀 테마 등록
        setThemeLoaded(true); // 테마 로드 완료
      } catch (error) {
        console.error('Failed to load Monaco theme:', (error as Error).message);
      }
    };

    loadCustomTheme();
  }, []);

  if (!themeLoaded) {
    return <div>Loading Editor...</div>;
  }

  return (
    <Container>
      <Editor
        width="100%"
        height="100%"
        defaultLanguage={defaultLanguage}
        defaultValue={defaultValue}
        language={language}
        value={value}
        theme={theme} // 'custom-dark' 또는 기본 테마 이름 전달 가능
      />
    </Container>
  );
};

export default IdeEditor;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0;
  padding: 0.62rem 1.19rem;
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
