import React, { useEffect, useState, useRef, useMemo } from 'react';
import Editor, { loader } from '@monaco-editor/react';
import * as monaco from 'monaco-editor';
import { IdeEditorProps, CustomTheme } from '../../../models/Editor.type';
import { Container, ButtonContainer, CopyButton, SaveButton } from './style';
import { BsFiles, BsDownload } from 'react-icons/bs';
// import useIdeWebsocket from '../../../hooks/IDE/useIdeWebsocket';
// import { Client } from '@stomp/stompjs';
import { useTheme } from '@emotion/react';
import { IdeCodeSaveApi } from '../../../apis/Ide/ideApi';


loader.config({
  paths:{
    vs:"https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.34.0/min/vs" // 테마 적용은 안되지만, IDE는 출력됨.
  },
});


const IdeEditor: React.FC<IdeEditorProps> = ({
  defaultLanguage,
  defaultValue,
  language,
  value,
  boardName,
  postName,
  token,
  sendCodeUpdate, // Post.tsx에서 전달된 함수
}) => {
  const myTheme = useTheme();
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null); // 코드 복사, 저장 : 명시적으로 monaco.editor.IStandaloneCodeEditor 타입 지정
  const [themeLoaded, setThemeLoaded] = useState(false);
  const [editorValue, setEditorValue] = useState(defaultValue);

  const postId = 1;
  // const { receivedCode, sendCodeUpdate } = useIdeWebsocket({ postId, token});

  // 에디터 설정 useMemo로 설정
  const editorOptions = useMemo<monaco.editor.IStandaloneEditorConstructionOptions>(()=>({
    minimap : { enabled : false },
    scrollbar :{
      alwaysConsumeMouseWheel: true,
      vertical:"auto",
      verticalScrollbarSize: 5,
      horizontal: 'auto',
    },
    accessibilitySupport: 'off', // iPad 키보드 방지
    readOnly:false,
  }),[]);

  const handleCodeChange = (newCode:string|undefined) => {
    const updatedCode = newCode || '';
    setEditorValue(updatedCode);
    sendCodeUpdate(updatedCode); // Post.tsx에 전달된 'sendCodeUpdate' 사용
  };

  // 2️⃣ JSON 테마 파일 로드 및 Monaco Editor 초기화
  useEffect(() => {
    const loadCustomTheme = async () => {
      try {
        const response = await fetch('/monaco-themes/dark.json'); // public 폴더 기준
        if (!response.ok) {
          throw new Error(
            `[ ❌ HTTP 오류 ] 테마 로드 실패. Status: ${response.status}`
          );
        }

        // 'response.json()'의 결과를 CustomTheme 타입으로 캐스팅
        const customTheme = (await response.json()) as CustomTheme;
        loader.init().then((monaco)=>{
          monaco.editor.defineTheme('custom-dark', customTheme);
          setThemeLoaded(true); // 테마 로드 완료
          console.log('✅ 테마 로드 완료')
        })
        setThemeLoaded(true); // 테마 로드 완료
      } catch (error) {
        console.error(
          '[ ❌ HTTP 오류 ] 테마 로드 실패 :',
          (error as Error).message
        );
      }
    };

    loadCustomTheme();
  }, []);

  useEffect(()=>{
    setEditorValue(value);
  },[value]);

  useEffect(()=>{
    if(editorRef.current){
      editorRef.current.updateOptions({accessibilitySupport:'off'});
    }
  },[editorValue]); // editorValue가 변경될 때마다 실행

  if (!themeLoaded) {
    return (
      <div style={{ color: '#fff' }}>
        코드를 불러오는 중입니다! 잠시만 기다려주세요! 테마가 로드가 안되용..
      </div>
    );
  }

  // 에디터 마운트 후 설정
  const handleEditorMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
    editorRef.current = editor;
    console.log('😇 Editor가 마운트 됨');

    // 리렌더링 후에도 iPad 키보드 안보이게 강제 설정
    editor.updateOptions({
      accessibilitySupport:'off',
    })

    // 자동 포커싱 방지 (키보드 뜨는 문제 해결)
    setTimeout(()=>{
      editor?.getContainerDomNode()?.blur();
    },100);

    editor.onDidChangeModelContent(() => {
      if (!editorRef.current) return;

      const updateCode = editorRef.current.getValue();
      sendCodeUpdate(updateCode); // Post.tsx에서 전달된 SendCodeUpdate 사용
      setEditorValue(updateCode);
    });
  };

  // 코드 클립보드 복사
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

  // 코드 저장 - 추후 api연동시 수정
  const handleSaveButton = async () => {
    if (editorRef.current) {
      const currentCode = editorRef.current.getValue();
      try {
        alert(`${boardName} - ${postName} 에 저장되었습니다.`);
        console.log('✅ save currentCode : \n', currentCode);
        await IdeCodeSaveApi(postId,token)
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
        // value={receivedCode}
        value={editorValue} 
        onChange={(value)=> handleCodeChange(value)}
        theme={'vs-dark'}
        onMount={handleEditorMount}
        options={editorOptions}
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
