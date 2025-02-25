import React, { useEffect, useState, useRef } from 'react';
import Editor, { loader } from '@monaco-editor/react';
import * as monaco from 'monaco-editor';
import { IdeEditorProps, CustomTheme } from '../../../models/Editor.type';
import { Container, ButtonContainer, CopyButton, SaveButton } from './style';
import { BsFiles, BsDownload } from 'react-icons/bs';
import useIdeWebsocket from '../../../hooks/Chat/useIdeWebsocket';
// import { Client } from '@stomp/stompjs';
import { useTheme } from '@emotion/react';
import { IdeCodeSaveApi } from '../../../apis/Ide/ideApi';

const IdeEditor: React.FC<IdeEditorProps> = ({
  defaultLanguage,
  defaultValue,
  language,
  // value,
  // theme,/
  boardName,
  postName,
}) => {
  const myTheme = useTheme();
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null); // 코드 복사, 저장 : 명시적으로 monaco.editor.IStandaloneCodeEditor 타입 지정
  const [themeLoaded, setThemeLoaded] = useState(false);

  const postId = 1;
  // const id = 1;
  // const token = `Bearer ${localStorage.getItem('accessToken')}`;
  const token =
    'eyJhbGciOiJIUzI1NiJ9.eyJtZW1iZXJJZCI6Miwicm9sZSI6IlVTRVIiLCJleHAiOjE3Mzk2OTc0MjMsImlhdCI6MTczOTY5MzgyM30.7vSb7mRm3-byiJKRl4tsU-Fu3NCxCkGHResws-AalJE';

  const { receivedCode, sendMessage } = useIdeWebsocket({ postId, token });

  useEffect(() => {
    // 2️⃣ JSON 테마 파일 로드 및 Monaco Editor 초기화
    const loadCustomTheme = async () => {
      try {
        const response = await fetch('/monaco-themes/dark.json'); // public 폴더 기준
        if (!response.ok) {
          throw new Error(
            `[ ❌ HTTP 오류 ] 테마 로드 안됨. Status: ${response.status}`
          );
        }

        // 'response.json()'의 결과를 CustomTheme 타입으로 캐스팅
        const customTheme = (await response.json()) as CustomTheme;
        const monaco = await loader.init(); // Monaco 로더 초기화

        monaco.editor.defineTheme('custom-dark', customTheme); // 커스텀 테마 등록
        setThemeLoaded(true); // 테마 로드 완료
      } catch (error) {
        console.error(
          '[ ❌ HTTP 오류 ] 테마 로드 안됨 :',
          (error as Error).message
        );
      }
    };

    loadCustomTheme();
  }, []);

  if (!themeLoaded) {
    return (
      <div style={{ color: '#000' }}>
        코드를 불러오는 중입니다! 잠시만 기다려주세요!
      </div>
    );
  }

  const handleEditorMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
    editorRef.current = editor;
    console.log('😇 Editor가 마운트 됨');

    editor.onDidChangeModelContent(() => {
      if (!editorRef.current) return;

      const updateCode = editorRef.current.getValue();
      sendMessage(updateCode);
    });
  };

  const handleCopyButton = async () => {
    if (editorRef.current) {
      const currentCode = editorRef.current.getValue();
      try {
        await navigator.clipboard.writeText(currentCode);
        alert(`${boardName} - ${postName} 의 코드가 전체 복사 되었습니다`);
        console.log('[ ✅ 성공 ] 코드가 클립보드에 복사되었습니다!');
      } catch (error) {
        console.error('[ ❌ 실패 ] 클립보드 복사 실패 :', error);
      }
    } else {
      alert('Editor가 초기화되지 않았습니다.');
    }
  };

  // 추후 api연동시 수정
  const handleSaveButton = async () => {
    if (editorRef.current) {
      const currentCode = editorRef.current.getValue();
      try {
        alert(`${boardName} - ${postName} 에 저장되었습니다.`);
        console.log('✅ save currentCode : \n', currentCode);
        IdeCodeSaveApi(postId,token)
      } catch (error) {
        console.error('[ ❌ 실패 ] 코드 저장 실패');
      }
    } else {
      console.log('editor가 초기화 되지 않음.');
    }
  };

  return (
    <Container>
      <Editor
        width="100%"
        height="100%"
        defaultLanguage={defaultLanguage}
        defaultValue={defaultValue}
        language={language}
        value={receivedCode}
        theme={'vs-dark'}
        onMount={handleEditorMount}
        options={{
          minimap: { enabled: false },
          scrollbar: {
            alwaysConsumeMouseWheel: true,
            vertical: 'auto',
            verticalScrollbarSize: 5,
            horizontal: 'auto',
          },
        }}
      />
      <ButtonContainer>
        <CopyButton onClick={handleCopyButton}>
          <BsFiles size="1.5rem" color={myTheme.colors.gray} />
        </CopyButton>
        <SaveButton onClick={handleSaveButton}>
          <BsDownload size="1.5rem" color={myTheme.colors.gray} />
        </SaveButton>
      </ButtonContainer>
    </Container>
  );
};

export default IdeEditor;
