import { useEffect, useState } from 'react';

import Header from '../../components/post/Header';
import IdeEditor from '../../components/post/Editor';
import Chat from '../../components/post/Chat';
import { Body, Container } from './style';
import { usePostDetail } from '../../hooks/Posts/usePostDetail';

import { PostProps } from '../../models/Post';
import {fetchPostDetail} from '../../apis/Posts/postApi';
// import {GetIdeCodeProps} from '../../models/Ide';
// import {GetIdeCodeApi} from '../../apis/Ide/ideApi';

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
  const { data } = usePostDetail(1);
  console.log(data);

  // api 페이지 데이터 상태
  const [postData, setPostData] = useState<PostProps | null>(null);

  // api IDE 코드 데이터 상태
  // const [code, setCode] = useState<GetIdeCodeProps[]| null>(null);

  const postId = 1;
  

  useEffect(()=>{
    const getData = async() => {
      try{
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
      } catch(error) {
        console.error('[error!!] ', error);
      }
    }

    getData()

    // const getCodeData = async() => {
    //   // 토근
    //   const token = localStorage?.getItem('accessToken');
    //   try{
    //     const codeData = await GetIdeCodeApi(postId,token);
        
    //   } catch (error) {

    //   }
    // }
  },[])

  if(!postData){
    return <div>게시글 데이터를 불러오는 중입니다. 잠시만 기다려주세요!</div>
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
          defaultValue={'// api 통신으로 받아와야함'}
          language={postData.language}

          // 다시 통신해서 받아와야함.
          value={'// api 통신으로 받아와야함'}
          // theme={}
        />

        <Chat />
      </Body>
    </Container>
  );
};

export default Post;
