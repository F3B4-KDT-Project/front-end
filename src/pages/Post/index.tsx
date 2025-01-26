import React
// { useState }
 from 'react';
import styled from '@emotion/styled';

import Header from '../../components/Post/Header';
import IdeEditor from '../../components/Post/Editor/IdeEditor';



const Post: React.FC = () => {

  /* 추후 api 연동으로 변경*/
  const dummyData  = {
    // props api와 일치
    name : '[FE] 모달창 컴포넌트 만들기2',
    language:'javascript',

    // props api와 미일치
    boardName : '9oorm_KDT',
    defaultValue:'// [FE] 모달창 컴포넌트 만들기2',
    change_language:'typescript',
    value:'let num:number = 10;',
    theme:'vs-dark'
  }

  // 테스트용
  // const [value,setValue] = useState<string>(dummyData.defaultValue);
  // const handleChangeValue = (newValue : string) : void => {
  //   setValue(newValue);
  // };

  return (
    <Container>
      <Header 
        boardName={dummyData.boardName}
        postName={dummyData.name}
      />
      <Body>
        {/* 테스트 용 input */}
        {/* <input 
          type='text'
          value={value}
          onChange={(e)=>handleChangeValue(e.target.value)} // 상태 업데이트
        /> */}
        <IdeEditor
          defaultLanguage={dummyData.language}
          defaultValue={dummyData.defaultValue}
          language={dummyData.change_language}
          value={dummyData.value}
          theme={dummyData.theme}
        />

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
