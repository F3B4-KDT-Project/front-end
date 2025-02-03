import React from 'react';
import { Container,Body } from './style';
import Header from '../../components/post/Header';
import IdeEditor from '../../components/post/Editor/IdeEditor';
import Chat from '../../components/post/Chat';

const Post: React.FC = () => {
  /* 추후 api 연동으로 변경*/
  const dummyData = {
    // props api와 일치
    name: '[FE] 모달창 컴포넌트 만들기2',
    language: 'javascript',

    // props api와 미일치
    boardName: '9oorm_KDT',
    defaultValue: '// [FE] 모달창 컴포넌트 만들기2',
    change_language: 'javascript',
    value: `// [FE] 모달창 컴포넌트 만들기2 code`,
    theme: 'custom-dark',
  };

  return (
    <Container>
      <Header boardId={dummyData.boardName} postId={dummyData.name} />
      <Body>
        <IdeEditor
          defaultLanguage={dummyData.language}
          defaultValue={dummyData.defaultValue}
          language={dummyData.change_language}
          value={dummyData.value}
          theme={dummyData.theme}
          boardName={dummyData.boardName}
          postName={dummyData.name}
        />

        <Chat />
      </Body>
    </Container>
  );
};

export default Post;

