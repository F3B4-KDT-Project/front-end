import React from 'react';
import { PostCardProps } from '../../../models/PostCard';
import { CardContainer, Title, Badge, Date } from './style';
import { useNavigate } from 'react-router-dom';

const PostCard: React.FC<PostCardProps> = ({
  postName,
  badgeCount,
  date,
  boardId,
  postId,
}) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/${boardId}/${postId}`); // roomId를 상태로 전달
  };
  return (
    <CardContainer onClick={handleNavigate}>
      {/* 게시글 제목 */}
      <Title>
        {postName}
        {badgeCount > 0 && (
          <Badge>{badgeCount > 99 ? '99+' : badgeCount}</Badge>
        )}
      </Title>
      {/* 게시글 생성 시간 */}
      <Date>{date}</Date>
    </CardContainer>
  );
};

export default PostCard;
