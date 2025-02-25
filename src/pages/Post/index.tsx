import { useEffect, useState } from 'react';

import Header from '../../components/post/Header';
import IdeEditor from '../../components/post/Editor';
import Chat from '../../components/post/Chat';
import { Body, Container } from './style';
import { usePostDetail } from '../../hooks/Posts/usePostDetail';

import { PostProps } from '../../models/Post';
import { fetchPostDetail,  } from '../../apis/Posts/postApi';
// import {GetIdeCodeProps} from '../../models/Ide';
// import {GetIdeCodeApi} from '../../apis/Ide/ideApi';
import { GetIdeCodeApi } from '../../apis/Ide/ideApi';
// import { IdeEditorProps } from '../../models/Editor.type';
import { GetIdeCodeProps } from '../../models/Ide';


const Post = () => {
  /* 추후 api 연동으로 변경*/
  // const dummyData = {
  //   // props api와 일치
  //   name: '[FE] 모달창 컴포넌트 만들기2',
  //   language: 'javascript',

  //   // props api와 미일치
  //   boardName: '9oorm_KDT-2',
  //   defaultValue: '// [FE] 모달창 컴포넌트 만들기2',
  //   change_language: 'javascript',
  //   value: `// [FE] 모달창 컴포넌트 만들기2 code`,
  //   theme: 'custom-dark',
  // };
  // const { data } = usePostDetail(1);
  // const token = localStorage.getItem('accessToke')??'';
  // const token = 'eyJhbGciOiJIUzI1NiJ9.eyJtZW1iZXJJZCI6Miwicm9sZSI6IlVTRVIiLCJleHAiOjE3NDAzMTkzMDcsImlhdCI6MTc0MDMxNTcwN30.-nCevhcQ7I2DPsOhaiHfgdxQ59TVE8InFE0T27SWY7Q';
  // console.log(data);

  // api 페이지 데이터 상태
  const [postData, setPostData] = useState<PostProps | null>(null);
  // api IDE 코드 데이터 상태
  const [code, setCode] = useState<GetIdeCodeProps|null>(null);
  const postId = 1;

  
  useEffect(()=>{
    localStorage.setItem('accessToken','eyJhbGciOiJIUzI1NiJ9.eyJtZW1iZXJJZCI6Miwicm9sZSI6IlVTRVIiLCJleHAiOjE3NDAzMTkzMDcsImlhdCI6MTc0MDMxNTcwN30.-nCevhcQ7I2DPsOhaiHfgdxQ59TVE8InFE0T27SWY7Q');
    const token=localStorage.getItem('accessToken')??'';
    
    if(token){
      const getData = async() => {
        try{
          // api 연동 : 게시글 조회
          const data = await fetchPostDetail(postId);
          setPostData({
            id: data.id,
            boardId: data.boardId,
            name: data.name,
            language: data.language,
            filePath: data.filePath,
            createdAt: data.createdAt,
            roomId: data.roomId,
          })
          console.log('[ ✅ 성공 ]',data)
        } catch(error) {
          console.error('[error] 게시글 조회 : ', error);
        }
      }
      getData();
  
      // api : 게시글 파일 코드 내용 조회
      const getCodeData = async() => {
        try {
          const data = await GetIdeCodeApi(postId, token);
          setCode({
            code:data[0].code,
            token:token ?? '',
          }); // 배열? or 객체?
        } catch(error){
          console.error('[error] 게시글 파일 코드 내용 조회 : ', error);
        }
      }
      getCodeData();
    }
    // const getData = async() => {
    //   try{
    //     // api 연동 : 게시글 조회
    //     const data = await fetchPostDetail(postId);
    //     setPostData({
    //       id: data.id,
    //       boardId: data.boardId,
    //       name: data.name,
    //       language: data.language,
    //       filePath: data.filePath,
    //       createdAt: data.createdAt,
    //       roomId: data.roomId,
    //     })
    //     console.log('[ ✅ 성공 ]',data)
    //   } catch(error) {
    //     console.error('[error] 게시글 조회 : ', error);
    //   }
    // }
    // getData();

    // // api : 게시글 파일 코드 내용 조회
    // const getCodeData = async() => {
    //   try {
    //     const data = await GetIdeCodeApi(postId, token);
    //     setCode({
    //       code:data[0].code,
    //       token:token ?? '',
    //     }); // 배열? or 객체?
    //   } catch(error){
    //     console.error('[error] 게시글 파일 코드 내용 조회 : ', error);
    //   }
    // }
    // getCodeData();
  },[])

  useEffect(() => {
    localStorage.setItem('accessToken', 'eyJhbGciOiJIUzI1NiJ9...');
  
    // 비동기적으로 token을 가져온 후 API 실행
    setTimeout(() => {
      const token = localStorage.getItem('accessToken') ?? '';
  
      if (!token) {
        console.error('❌ accessToken이 없습니다. API 요청을 실행하지 않습니다.');
        return;
      }
  
      const getData = async () => {
        try {
          const data = await fetchPostDetail(postId);
          setPostData({
            id: data.id,
            boardId: data.boardId,
            name: data.name,
            language: data.language,
            filePath: data.filePath,
            createdAt: data.createdAt,
            roomId: data.roomId,
          });
          console.log('[✅ 성공] 게시글 데이터:', data);
        } catch (error) {
          console.error('[❌ 오류] 게시글 조회 실패:', error);
        }
      };
  
      const getCodeData = async () => {
        try {
          const data = await GetIdeCodeApi(postId, token);
          setCode({
            code: data[0]?.code ?? '',
            token: token ?? '',
          });
          console.log('[✅ 성공] 코드 데이터:', data);
        } catch (error) {
          console.error('[❌ 오류] 코드 데이터 조회 실패:', error);
        }
      };
  
      getData();
      getCodeData();
    }, 0); // 0ms 딜레이를 줘서 localStorage에서 데이터를 확실히 가져온 후 실행
  }, []);
  

  if(!postData){
    return <div>게시글 데이터를 불러오는 중입니다. 잠시만 기다려주세요! :)</div>
  }

  return (
    <Container>
      <Header 
        boardId={postData.boardId} 
        // post ID가 없는디?
        postId={postData.name} 
      />
      <Body>
        <IdeEditor
          boardName={postData.boardId}
          postName={postData.name}
          defaultLanguage={postData.language}
          // api 통신으로 받아와야함
          defaultValue={code?.code ?? ''}
          language={postData.language}

          // 다시 통신해서 받아와야함.
          value={code?.code ?? ''}
          // theme={}
        />

        <Chat />
      </Body>
    </Container>
  );
};

export default Post;
