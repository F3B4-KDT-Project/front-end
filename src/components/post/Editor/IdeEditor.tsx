import React, { useEffect, useState, useRef } from 'react';
import Editor, { loader } from '@monaco-editor/react';
import * as monaco from 'monaco-editor';
import { IdeEditorProps, CustomTheme } from '../../../models/Editor.type';
import { Container, ButtonContainer, CopyButton, SaveButton } from './style';

import { Client } from '@stomp/stompjs';

const IdeEditor: React.FC<IdeEditorProps> = ({
  defaultLanguage,
  defaultValue,
  language,
  value,
  theme,
}) => {
  const [themeLoaded, setThemeLoaded] = useState(false);
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null); // 코드 복사, 저장 : 명시적으로 monaco.editor.IStandaloneCodeEditor 타입 지정
  const stompClientRef = useRef<Client | null>(null); // Websocket 클라이언트
  const postId = 1;
  const id = 1;
  const token = `Bearer ${localStorage.getItem('accessToken')}`;

  useEffect(() => {
    // JSON 테마 파일 로드 및 Monaco Editor 초기화
    const loadCustomTheme = async () => {
      try {
        const response = await fetch('/monaco-themes/dark.json'); // public 폴더 기준
        if (!response.ok) {
          throw new Error(
            `HTTP error! 테마 로드 안됨!! Status: ${response.status}`
          );
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

    if (editorRef.current) {
      editorRef.current.focus(); // 마운트 시 code 창에 자동으로 포커스
    }

    // Websocket 연결 설정
    stompClientRef.current = new Client({
      // [필수] 연결할 서버 주소 명시
      brokerURL:
        'ws://ec2-3-36-75-8.ap-northeast-2.compute.amazonaws.com:8080/chatting',
      connectHeaders: { Authorization: token },
      debug: (str) => console.log(`[ WebSocket Debug ] : ${str}`),
      onConnect: () => {
        console.log('[ ✅ 성공 ]Connected IDE');

        // 코드 변경 이벤트 구독
        // stompClientRef.current?.subscribe(`/ide/edit/${postId}`,(message)=>{
        //   const receivedData = JSON.parse(message.body);
        //   console.log(`[📥 수신] 코드 업데이트:`, receivedData);
        //   if(editorRef.current){
        //     editorRef.current.setValue(receivedData);
        //   }
        // });
        stompClientRef.current?.subscribe(`/ide/edit/${postId}`, (message) => {
          try {
            const receivedData = JSON.parse(message.body);
            console.log(`[📥 수신] 코드 업데이트:`, receivedData);
            if (editorRef.current) {
              editorRef.current.setValue(receivedData);
            }
          } catch (error) {
            console.error(
              '❌ JSON 파싱 오류: 서버 응답이 올바르지 않습니다.',
              message.body
            );
          }
        });
      },
      onStompError: (frame) => {
        console.error('[❌ STOMP 오류]', frame);
        if (frame.headers?.message?.includes('Not authenticated')) {
          alert('세션이 만료되었습니다. 다시 로그인해주세요.');
          // ✅ 로그인 페이지로 리디렉트 가능
          window.location.href = '/sign-in';
        }
      },
      onDisconnect: () => {
        console.log('🔥 웹 소켓 연결 끊어짐 ');
      },
      reconnectDelay: 5000, // 연결 끊어진 경우 재시도 간격(5초)
      heartbeatIncoming: 4000, // 서버와 클라이언트간 상태 확인 간격(4초)
      heartbeatOutgoing: 4000,
    });

    stompClientRef.current.activate();

    return () => {
      stompClientRef.current?.deactivate();
      if (stompClientRef.current) {
        console.log('💡 WebSocket 연결 해제');
        stompClientRef.current.deactivate();
      }
    };
  }, []);

  if (!themeLoaded) {
    return (
      <div style={{ color: '#000' }}>
        코드를 불러오는 중입니다! 잠시만 기다려주세요!
      </div>
    );
  }

  const handleEditorMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
    editor.onDidChangeModelContent(() => {
      if (!editorRef.current) return;
      const updateCode = editorRef.current?.getValue() || 'print(\"test\") '; // 값이 없을 경우 문자열로 설정

      const messageContent = {
        // Authorization:token,
        // destination:'/send/posts/edit/1',
        id: id, // 숫자 확인
        newContent: updateCode, // 문자열 값으로 보장
      };

      console.log('[ 📤 전송 ] 코드 업데이트:', messageContent);

      if (!stompClientRef.current) return;
      if (stompClientRef.current) {
        stompClientRef.current.publish({
          destination: `/send/posts/edit/${postId}`,
          headers: {
            Authorization: token,
            'content-type': 'application/json',
          },
          body: JSON.stringify(messageContent),
        });
      } else {
        console.warn('⚠️ WebSocket 클라이언트가 아직 초기화되지 않았습니다.');
      }
      // stompClientRef.current?.publish({
      //   destination: `/send/posts/edit/${postId}`,
      //   headers: {
      //     Authorization: token,
      //     'content-type': 'application/json'
      //   },
      //   body: JSON.stringify(messageContent),
      // });
    });
  };

  const handleCopyButton = async () => {
    if (editorRef.current) {
      const currentCode = editorRef.current.getValue();
      try {
        await navigator.clipboard.writeText(currentCode);
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
        alert('save!');
        console.log('save currentCode : \n', currentCode);
      } catch (error) {
        console.error('코드 저장 실패');
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
        value={value}
        theme={theme}
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
        <CopyButton onClick={handleCopyButton} />
        <SaveButton onClick={handleSaveButton} />
      </ButtonContainer>
    </Container>
  );
};

export default IdeEditor;
