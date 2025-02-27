import {useEffect, useRef} from 'react';
import {Client} from '@stomp/stompjs';

interface useWebsocket {
    url:string,
    token:string;
    onMessageReceived:(message:any)=>void;
    topic:string;
}

const useWebsocket = ({url, token, onMessageReceived, topic}:useWebsocket) => {
    const stompClientRef = useRef<Client | null>(null);

    useEffect(()=>{
        if (stompClientRef.current?.connected){
            console.log('[ 😜 IDE websocket ] 기존 연결 유지 중 :) ');
            return ;
        }

        console.log('[ 😜 IDE websocket] 새로운 연결 시도 ')

        stompClientRef.current = new Client({
            brokerURL:url,
            connectHeaders:{ Authorization:`Bearer ${token}` },
            debug:(str) => console.log(`[💡 IDE Websocket Debug] : ${str}`),
            onConnect:()=>{
                console.log('[ 😜 ✅ IDE 성공 ] Connected to Websoclet');

                // 메세지 구독
                stompClientRef.current?.subscribe(topic, (message)=>{
                    try{
                        const receivedData = JSON.parse(message.body);
                        console.log(`[ 😜 💌 IDE 수신 ] 메세지 : `, receivedData);
                        onMessageReceived(receivedData);
                    } catch(error){
                        console.error(`[ 😜 ❌ IDE JSON 파싱 오류 ] : `, message.body);
                    }
                })
            },
            onStompError(frame) {
                console.error(`[ 😜 ❌ IDE STOMP 오류 ] : `,frame);
                if(frame.headers?.message?.includes('not authenticated')){
                    alert('세션이 만료되었습니다. 다시 로그인해주세요! :)'),
                    window.location.href='/login';
                }
            },
            onDisconnect:()=>{
                console.log('[ 😜 IDE ] 웹소켓 연결 끊어짐.');
            },
            reconnectDelay:5000,
            heartbeatIncoming : 4000,
            heartbeatOutgoing : 4000,
        });

        stompClientRef.current.activate();

        return ()=>{
            console.log('[ 😜 IDE 연결 해제 ] 웹소켓 연결 해제');
            if (stompClientRef.current?.connected){
                stompClientRef.current.deactivate();
            }
        };
    },[url, token, topic, onMessageReceived]);

    const sendMessage = (destination:string, message:object) => {
        if(!stompClientRef.current?.connected) {
            console.warn('[ 😜 IDE websocket ] 연결이 닫혀있어서 메세지를 보낼 수 없음.')
            return;
        }

        stompClientRef.current.publish({
            destination,
            headers:{
                Authorization : token,
                'content-type' : 'application/json',
            },
            body : JSON.stringify(message),
        });

        console.log('[ 😜 IDE 구독방에 전송~ ] : ', message);
    };

    return { sendMessage }
};

export default useWebsocket;