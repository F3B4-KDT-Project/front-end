import { useEffect, useState } from 'react';

import Header from '../../components/post/Header';
import IdeEditor from '../../components/post/Editor';
// import Chat from '../../components/post/Chat';

import { Body, Container } from './style';

import { PostProps } from '../../models/Post';
import { GetIdeCodeProps } from '../../models/Ide';

import { fetchPostDetail,  } from '../../apis/Posts/postApi';
import { GetIdeCodeApi } from '../../apis/Ide/ideApi';

// ⭐️ 웹소켓 hook
import useIdeWebsocket from '../../hooks/IDE/useIdeWebsocket';

const Post = () => {

  // api 페이지 데이터 상태 - 게시글 데이터 상태
  const [postData, setPostData] = useState<PostProps | null>(null);
  // api IDE 코드 데이터 상태 - 코드 데이터 상태
  const [code, setCode] = useState<GetIdeCodeProps|null>(null);
  
  const postId = 1;
  // const [token,setToken] = useState('');
  const token = localStorage.getItem('accessToken')??'';

  // websocket hook
  const { receivedCode, sendCodeUpdate } = useIdeWebsocket({postId, token});

  // useEffect(()=>{
  //  console.log('before : ',token);
  //   const getToken = localStorage.getItem('accessToken')??'';
  //   setToken(getToken);
  //   console.log('after : ',token);
    
    
  //   if(token){
  //     const getData = async() => {
  //       try{
  //         // api 연동 : 게시글 조회
  //         const data = await fetchPostDetail(postId);
  //         setPostData({
  //           id: data.id,
  //           boardId: data.boardId,
  //           name: data.name,
  //           language: data.language,
  //           filePath: data.filePath,
  //           createdAt: data.createdAt,
  //           roomId: data.roomId,
  //         })
  //         console.log('[ ✅ 성공 ]',data)
  //       } catch(error) {
  //         console.error('[error] 게시글 조회 : ', error);
  //       }
  //     }
  //     getData();
  
  //     // api : 게시글 파일 코드 내용 조회
  //     const getCodeData = async() => {
  //       try {
  //         const data = await GetIdeCodeApi(postId, token);
  //         setCode({
  //           code:data[0].code,
  //           token:token ?? '',
  //         }); // 배열? or 객체?
  //       } catch(error){
  //         console.error('[error] 게시글 파일 코드 내용 조회 : ', error);
  //       }
  //     }
  //     getCodeData();
  // },[])

  useEffect(() => {
    // 비동기적으로 token을 가져온 후 API 실행
    setTimeout(() => {
      const token = localStorage.getItem('accessToken') ?? '';
  
      if (!token) {
        console.error('[ Post 페이지 ]❌ accessToken이 없습니다. API 요청을 실행하지 않습니다.');
        return;
      }
  
      const getData = async () => {
        try {
          const data = await fetchPostDetail(postId);
          // setPostData({
          //   id: data.id,
          //   boardId: data.boardId,
          //   name: data.name,
          //   language: data.language,
          //   filePath: data.filePath,
          //   createdAt: data.createdAt,
          //   roomId: data.roomId,
          // });
          setPostData(data);
          console.log('[ ✅ Post 페이지 getData 성공 ] 게시글 데이터 :', data);
        } catch (error) {
          console.error('[ ❌ Post 페이지 getData 오류 ] 게시글 조회 실패 :', error);
        }
      };
  
      const getCodeData = async () => {
        try {
          const data = await GetIdeCodeApi(postId, token);
          setCode({
            code: data[0]?.code ?? '',
            token,
          });
          console.log('[ ✅ Post 페이지 getCodeData 성공 ] 코드 데이터:', data);
        } catch (error) {
          console.error('[❌ Post 페이지 getCodeData 오류 ] 코드 데이터 조회 실패:', error);
        }
      };
  
      getData();
      getCodeData();
    }, 0); // 0ms 딜레이를 줘서 localStorage에서 데이터를 확실히 가져온 후 실행
  }, [postId, token]);
  
  useEffect(()=>{

  },[])

  if(!postData){
    return <div>게시글 데이터를 불러오는 중입니다. 잠시만 기다려주세요! :)</div>
  }

  return (
    <Container>
      <Header 
        boardId={postData?.boardId ?? ''} postId={postData?.name ?? ''} 
      />
      <Body>
        <IdeEditor
          boardName={postData?.boardId ?? ''}
          postName={postData?.name ?? ''}
          defaultLanguage={postData?.language ?? 'javascript'}
          // api 통신으로 받아와야함
          defaultValue={code?.code ?? ''}
          language={postData.language}

          // 웹소켓 구독방에서 받은 최신 코드 내용
          value={receivedCode}

          token={token}

          // 웹소켓 구독방 메세지 전송 함수 전달
          sendCodeUpdate={sendCodeUpdate}
        />

        {/* <Chat /> */}
      </Body>
    </Container>
  );
};

export default Post;
