import React, { useEffect, useState, useRef } from 'react';
import Editor, { loader } from '@monaco-editor/react';
import * as monaco from 'monaco-editor';
import { IdeEditorProps, CustomTheme } from '../../../models/Editor.type';
import { Container, ButtonContainer, CopyButton, SaveButton } from './style';

import { Client } from '@stomp/stompjs';

const IdeEditor: React.FC<IdeEditorProps> = ({
  defaultLanguage,defaultValue,
  language,value,
  theme,
}) => {
  const [themeLoaded, setThemeLoaded] = useState(false);
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null); // 코드 복사, 저장 : 명시적으로 monaco.editor.IStandaloneCodeEditor 타입 지정
  const stompClientRef = useRef<Client | null>(null); // Websocket 클라이언트
  const postId = 1;
  const token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJtZW1iZXJJZCI6MSwibG9naW5JZCI6InRlc3QxIiwicm9sZSI6WyJVU0VSIl0sImV4cCI6MTczNzg3NDI3MCwiaWF0IjoxNzM3ODcwNjcwfQ.kGxYLNZWeMJ9VGmelENQWh7VYNu6umuVqt8yBwRtTaY';

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

    if(editorRef.current){
      editorRef.current.focus(); // 마운트 시 code 창에 자동으로 포커스
    }

    // Monaco Editor 하이라이트 스타일을 전역에 추가
    const style = document.createElement("style");
    style.innerHTML = `
      .highlighted-code {
        background-color: rgba(255, 255, 0, 0.15); /* 형광펜 색상 */
        color : white;
        padding: 0.5px;
        cursor: pointer;
        font-weight:600;
      }
    `;
    document.head.appendChild(style);

    // Websocket 연결 설정
    stompClientRef.current = new Client({
      brokerURL: // [필수] 연결할 서버 주소 명시
        'ws://ec2-3-36-75-8.ap-northeast-2.compute.amazonaws.com:8080/chatting',
      connectHeaders : { Authorization : token },
      debug: (str)=> console.log(`[ WebSocket Debug ] : ${str}`),
      onConnect:()=>{
        console.log("[ 성공 ]Connected IDE");

        // 코드 변경 이벤트 구독
        stompClientRef.current?.subscribe(`/ide/edit/${postId}`,(message)=>{
          const receivedData = JSON.parse(message.body);
          console.log(`[📥 수신] 코드 업데이트:`, receivedData);
          if(editorRef.current){
            editorRef.current.setValue(receivedData);
          } else {
            console.log('[코드 변경 이벤트 구독 에러]')
          }
        });

      },
      onStompError: (frame) => {
        console.error('[❌ STOMP 오류]', frame);
      },
      onDisconnect:()=>{
        console.log("🔥 웹 소켓 연결 끊어짐 ");
      },
      reconnectDelay : 5000, // 연결 끊어진 경우 재시도 간격(5초)
      heartbeatIncoming : 4000, // 서버와 클라이언트간 상태 확인 간격(4초)
      heartbeatOutgoing : 4000,
    });

    stompClientRef.current.activate();

    return ()=>{
      stompClientRef.current?.deactivate();
    };
  },[]);

  if (!themeLoaded) {
    return <div style={{color:'#000'}}>
      코드를 불러오는 중입니다! 잠시만 기다려주세요!
      </div>;
  }

  const handleEditorMount = (editor: monaco.editor.IStandaloneCodeEditor) => {

    editor.onDidChangeModelContent(()=>{
      if(!editorRef.current)return;
      const updateCode = editorRef.current.getValue();
      const messageContent = {
        Id: postId,
        newContent: updateCode,
      };
      console.log('[📤 전송] 코드 업데이트:', messageContent);
      stompClientRef.current?.publish({
        destination: `/send/posts/edit/${postId}`,
        headers: { Authorization: token, 'content-type': 'application/json' },
        body: JSON.stringify(messageContent),
      });
    });

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
        width="100%" height="100%"
        defaultLanguage={defaultLanguage} defaultValue={defaultValue}
        language={language} value={value}
        theme={theme}
        onMount={handleEditorMount}
        options={{ 
          minimap:{ enabled:false },
          scrollbar:{ 
            alwaysConsumeMouseWheel: true,
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