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
  FlexContainer,
} from './style';
import InvitePersonModal from '../../components/modals/InvitePersonModal';
import { useFetchPosts } from '../../hooks/Board/useFetchPosts';
import { useFetchBoards } from '../../hooks/Board/useFetchBoards';
import { useParams } from 'react-router-dom';
import Calendar from '../../components/board/Calendar';

const ITEMS_PER_PAGE = 6;

const Board: React.FC = () => {
  const { boardId } = useParams<{ boardId: string }>();
  const [isInvitePersonModalOpen, setInvitePersonModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // 게시판 목록 불러오기
  const { data: boards } = useFetchBoards();
  const selectedBoard = boards?.find((board) => board.id === Number(boardId));

  // 게시판 내 게시글 불러오기
  const { data: posts } = useFetchPosts(Number(boardId));

  const totalPages = Math.ceil((posts?.length ?? 0) / ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const paginatedPosts = (posts ?? []).slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // 게시판은 있지만 게시글이 없을 때 화면
  if (!posts || posts.length === 0) {
    return (
      <BoardContainer>
        <Header boardName={selectedBoard?.title || '게시판'} />

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
      <Header boardName={selectedBoard?.title || '게시판'} />
      {/* 게시글 리스트 */}
      <FlexContainer>
        {/* 캘린더 */}
        <Calendar />

        <BodyContainer>
          {/* 참여자 수 */}
          <Participants onClick={() => setInvitePersonModalOpen(true)}>
            <BsFillPeopleFill size="1.5rem" />
            {selectedBoard?.participants ?? 0}
          </Participants>

          {/* 게시글 */}
          <PostList>
            {paginatedPosts.map((post) => (
              <PostCard
                key={post.id}
                postName={post.name}
                date={post.createdAt}
                badgeCount={post.badgeCount ?? 0} // ✅ 기본값 추가
                boardId={post.boardId}
                postId={post.id}
                roomId={post.roomId}
              />
            ))}
          </PostList>

          {/* 페이지 번호 */}
          <Pagination>
            <button onClick={() => handlePageChange(currentPage - 1)}>
              <BsFillCaretLeftFill size="1.5rem" />
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
              <BsFillCaretRightFill size="1.5rem" />
            </button>
          </Pagination>
        </BodyContainer>
      </FlexContainer>
      <InvitePersonModal
        isOpen={isInvitePersonModalOpen}
        onClose={() => setInvitePersonModalOpen(false)}
      />
    </BoardContainer>
  );
};

export default Board;
