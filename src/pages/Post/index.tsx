import React from 'react';
import styled from '@emotion/styled';

import Header from '../../components/Post/Header';
import IdeEditor from '../../components/Post/Editor/IdeEditor';
import Chat from '../../components/Post/Chat';


const Post: React.FC = () => {

  /* 추후 api 연동으로 변경*/
  const dummyData  = {
    // props api와 일치
    name : '[FE] 모달창 컴포넌트 만들기2',
    language:'javascript',

    // props api와 미일치
    boardName : '9oorm_KDT',
    defaultValue:'// [FE] 모달창 컴포넌트 만들기2',
    change_language:'javascript',
    value:`// [FE] 모달창 컴포넌트 만들기2 code`,
    theme:'custom-dark'
  }

  return (
    <Container>
      <Header 
        boardId={dummyData.boardName}
        postId={dummyData.name}
      />
      <Body>
        <IdeEditor
          defaultLanguage={dummyData.language}
          defaultValue={dummyData.defaultValue}
          language={dummyData.change_language}
          value={dummyData.value}
          theme={dummyData.theme}
        />

        <Chat />
      </Body>
    </Container>
  );
};

export default Post;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 2.38rem 1.94rem;
  gap: 2.19rem;
  box-sizing: border-box; /* 패딩을 크기 계산에 포함 */

  width: 100%;
  height: 100%;

  color: var(--white);
  background-color: var(--background);
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start; /* 컴포넌트를 상단 정렬 */

  width: 100%;
  height: auto;
  box-sizing: border-box; /* 패딩을 크기 계산에 포함 */

  padding: 1.31rem 1.56rem;
  gap: 1.25rem;

  border-radius: 2.1875rem;
  background-color: var(--input);
  background: var(--input, rgba(218, 218, 218, 0.35));
  box-shadow: 0px 0px 4px 0px var(--black, #161616);
`;
