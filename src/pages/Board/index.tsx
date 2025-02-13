import React, { useState } from 'react';
import Header from '../../components/board/Header';
import PostCard from '../../components/board/PostCard';
import {
  BsFillEmojiWinkFill,
  BsFillPeopleFill,
  BsFillCaretLeftFill,
  BsFillCaretRightFill,
} from 'react-icons/bs';
import {
  EmptyBoardContainer,
  Message,
  Description,
  BoardContainer,
  BodyContainer,
  Participants,
  PostList,
  Pagination,
  PageNumber,
} from './style';
import InvitePersonModal from '../../components/modals/InvitePersonModal';
import { useTheme } from '@emotion/react';

// 더미 데이터
const dummyData = {
  hasBoard: true, // 게시판 존재 여부
  boardName: '9oorm_KDT', // 게시판 이름
  hasPosts: true, // 게시글 존재 여부
  participants: 7, // 참여자 수
  posts: [
    { id: 1, name: 'Github 세팅', date: '2025.01.12 14:32', badgeCount: 12 },
    {
      id: 2,
      name: '[FE] 모달창 컴포넌트 만들기',
      date: '2025.01.12 14:32',
      badgeCount: 3,
    },
    { id: 3, name: '[FE] 채팅 구현', date: '2025.01.12 14:32', badgeCount: 99 },
    { id: 4, name: '[BE] 폴더 구조', date: '2025.01.12 14:32', badgeCount: 12 },
    {
      id: 5,
      name: '[BE] 라이브러리 세팅',
      date: '2025.01.12 14:32',
      badgeCount: 1,
    },
    { id: 6, name: '[FE] UI 구현', date: '2025.01.12 14:32', badgeCount: 35 },
    { id: 7, name: '[FE] 아자자~', date: '2025.01.12 14:32', badgeCount: 12 },
  ],
};

const ITEMS_PER_PAGE = 6;

const Board: React.FC = () => {
  const theme = useTheme();
  const [isInvitePersonModalOpen, setInvitePersonModalOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(dummyData.posts.length / ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const paginatedPosts = dummyData.posts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // 게시판이 없을 때 화면
  if (!dummyData.hasBoard) {
    return (
      <EmptyBoardContainer>
        <BsFillEmojiWinkFill size="12.5rem" />
        <Message>
          아직 <strong>교실</strong>이 없어요.
        </Message>
        <Description>
          교실을 만들려면 <strong>좌측 상단의 + 버튼</strong>을 눌러주세요!!
        </Description>
      </EmptyBoardContainer>
    );
  }
  // 게시판은 있지만 게시글이 없을 때 화면
  if (!dummyData.hasPosts) {
    return (
      <BoardContainer>
        {/* 게시판 헤더 */}
        <Header boardName={dummyData.boardName} />

        {/* 게시글이 없을 때 */}
        <EmptyBoardContainer>
          <BsFillEmojiWinkFill size="12.5rem" />
          <Message>
            아직 <strong>수업</strong>이 없어요.
          </Message>
          <Description>
            수업을 만들려면 <strong>우측 상단의 수업 생성 버튼</strong>을
            눌러주세요!!
          </Description>
        </EmptyBoardContainer>
      </BoardContainer>
    );
  }
  // 게시판, 게시글 둘 다 존재할 때 화면
  return (
    <BoardContainer>
      {/* 게시판 헤더 */}
      <Header boardName={dummyData.boardName} />
      {/* 게시글 리스트 */}
      <BodyContainer>
        {/* 참여자 수 */}
        <Participants onClick={() => setInvitePersonModalOpen(true)}>
          <BsFillPeopleFill size="1.5rem" />
          {dummyData.participants}
        </Participants>

        {/* 게시글 */}
        <PostList>
          {paginatedPosts.map((post) => (
            <PostCard
              key={post.id}
              postName={post.name}
              date={post.date}
              badgeCount={post.badgeCount}
            />
          ))}
        </PostList>

        {/* 페이지 번호 */}
        <Pagination>
          <button onClick={() => handlePageChange(currentPage - 1)}>
            <BsFillCaretLeftFill size="1.5rem" color={theme.colors.footer} />
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <PageNumber
              key={index}
              isActive={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </PageNumber>
          ))}
          <button onClick={() => handlePageChange(currentPage + 1)}>
            <BsFillCaretRightFill size="1.5rem" color={theme.colors.footerAr} />
          </button>
        </Pagination>
      </BodyContainer>
      <InvitePersonModal
        isOpen={isInvitePersonModalOpen}
        onClose={() => setInvitePersonModalOpen(false)}
      />
    </BoardContainer>
  );
};

export default Board;
