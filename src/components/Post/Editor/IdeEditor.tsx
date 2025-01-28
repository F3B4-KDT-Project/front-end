import React, { useEffect, useState, useRef } from 'react';
import styled from '@emotion/styled';
import Editor, { loader, useMonaco } from '@monaco-editor/react';

import { BsFiles,BsDownload,
  // BsLightbulbFill, 
  // BsLightbulbOffFill
 } from 'react-icons/bs';

// Monaco 타입 가져오기
import * as monaco from 'monaco-editor';


interface IdeEditorProps {
  defaultLanguage: string;
  defaultValue: string;
  language: string;
  value: string;
  theme: string;
}

// custom theme json 파일 구조 정의
interface CustomTheme {
  base: 'vs' | 'vs-dark' | 'hc-black';
  inherit: boolean;
  rules: Array<{
    token: string;
    foreground?: string;
    background?: string;
    fontStyle?: string;
  }>;
  colors: Record<string, string>;
};

const IdeEditor: React.FC<IdeEditorProps> = ({
  defaultLanguage,
  defaultValue,
  language,
  value,
  theme,
}) => {
  const [themeLoaded, setThemeLoaded] = useState(false);
  // 코드 복사, 저장 : 명시적으로 monaco.editor.IStandaloneCodeEditor 타입 지정
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  // 코드 하이라이트를 위한 변수
  // const monaco = useMonaco();

  useEffect(()=>{
    // JSON 테마 파일 로드 및 Monaco Editor 초기화
    const loadCustomTheme = async () => {
      try {
        const response = await fetch('/monaco-themes/dark.json'); // public 폴더 기준
        if (!response.ok) {
          throw new Error(`HTTP error! 테마 로드 안됨!! Status: ${response.status}`);
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
  },[])

  if (!themeLoaded) {
    return <div>Loading Editor...</div>;
  }

  const handleEditorMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
    editorRef.current = editor;
  };

  const handleCopyButton = async () => {
    if (editorRef.current) {
      const currentCode = editorRef.current.getValue();
      try {
        await navigator.clipboard.writeText(currentCode);
        alert('코드가 클립보드에 복사되었습니다!');
      } catch (error) {
        console.error('클립보드 복사 실패:', error);
        alert('클립보드 복사에 실패했습니다.');
      }
    } else {
      alert('Editor가 초기화되지 않았습니다.');
    }
  };

  // 추후 api연동시 수정
  const handleSaveButton = async() =>{
    if(editorRef.current){
      const currentCode = editorRef.current.getValue();
      try{
        
        alert('save!')
        console.log('save currentCode : \n',currentCode);
      } catch (error){
        console.error('코드 저장 실패')
      }
    }else {
      console.log('editor가 초기화 되지 않음.')
    }
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
        theme={theme}
        onMount={handleEditorMount}

        options={{ 
          minimap:{ enabled:false },
          scrollbar:{ 
            alwaysConsumeMouseWheel:true,
            vertical : 'auto',
            verticalScrollbarSize : 5,
            horizontal : 'auto'
           }
        }}
      />

      <ButtonContainer>
        <CopyButton onClick={handleCopyButton} />
        <SaveButton onClick={handleSaveButton}/>
      </ButtonContainer>
    </Container>
  );
};

export default IdeEditor;


const Container = styled.div`
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

const ButtonContainer=styled.div`
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  color: var(--gray);
`;

const CopyButton=styled(BsFiles)`
  width: 1.5rem;
  height: 1.5rem;

  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
`;

const SaveButton=styled(BsDownload)`
  width: 1.5rem;
  height: 1.5rem;

  position: absolute;
  right: 1.5rem;
  bottom : 1.5rem;
`;