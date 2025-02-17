import { useState, useEffect, useRef } from 'react';
import { Client } from '@stomp/stompjs';

interface useIdeWebsocketProps {
  postId: number;
  token: string;
}

const baseUrl = `ownearth.shop`;
const websocketURL = `wss://${baseUrl}:8080/chatting`;

const useIdeWebsocket = ({ postId, token }: useIdeWebsocketProps) => {
  const stompClientRef = useRef<Client | null>(null);
  const [receivedCode, setReceivedCode] = useState('// 기본 데이터');

  useEffect(() => {
    stompClientRef.current = new Client({
      brokerURL: websocketURL,
      connectHeaders: { Authorization: `Bearer ${token}` },
      debug: (str) => console.log(`[ 🔍 WebSocket Debug ] : ${str}`),
      onConnect: () => {
        console.log('[ ✅ 성공 ] Connected IDE ');

        stompClientRef.current?.subscribe(`/ide/edit/${postId}`, (message) => {
          try {
            const receivedData = JSON.parse(message.body);
            console.log(`[ 📥 수신 ] 코드 업데이트:`, receivedData);
            setReceivedCode(receivedData.newContent);
          } catch (error) {
            console.error(
              `[ ❌ JSON 파싱 오류 ] 서버 응답이 올바르지 않습니다.`,
              message.body
            );
          }
        });
      },
      onStompError: (frame) => {
        console.error(`[❌ STOMP 오류]`, frame);
        if (frame.headers?.message?.includes('not authenticated')) {
          alert('세션 만료. 다시 로그인해주세요.');
          window.location.href = '/sign-in';
        }
      },
      onDisconnect: () => {
        console.log('웹소켓 연결 끊어짐');
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    });

    stompClientRef.current.activate();

    return () => {
      console.log('[연결 해제] 웹소켓 연결 해제');
      stompClientRef.current?.deactivate();
    };
  }, [postId, token]);

  const sendMessage = (newConent: string) => {
    if (!stompClientRef.current?.connected) return;

    const messageContent = {
      postId,
      newConent,
    };

    stompClientRef.current.publish({
      destination: `/send/posts/edit/${postId}`,
      headers: {
        Authorization: token,
        'content-type': 'application/json',
      },
      body: JSON.stringify(messageContent),
    });

    console.log('[전송] 코드 업데이트', messageContent);
  };

  return { receivedCode, sendMessage };
};

export default useIdeWebsocket;
