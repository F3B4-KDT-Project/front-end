import React from 'react';
import styled from '@emotion/styled';

import Header from '../../components/Post/Header';
import IdeEditor from '../../components/Post/Editor/IdeEditor';


const Post: React.FC = () => {
  /* 추후 api 연동으로 변경*/
  const dummyData = {
    boardName : '9oorm_KDT',
    postName : '[FE] 모달창 컴포넌트 만들기2'
  }

  return (
    <Container>
      <Header 
        boardName={dummyData.boardName}
        postName={dummyData.postName}
      />
      <Body>
        <IdeEditor />

        {/* 아래 부분에 채팅 컴포넌트 넣어주시면 됩니다! */}
        <Test />
      </Body>
    </Container>
  )
}

export default Post;

const Container=styled.div`
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

const Body=styled.div`
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

const Test=styled.div`
  flex: 1;
  width: 29.75rem;
  height: 46.125rem;
  flex-shrink: 0;

  background-color: red;
`;
