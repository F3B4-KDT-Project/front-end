import React from "react";
import { PostCardProps } from '../../../models/PostCard';
import { CardContainer, Title, Badge, Date } from "./style";

const PostCard: React.FC<PostCardProps> = ({ postName, badgeCount, date }) => {
    return (
      <CardContainer>
        {/* 게시글 제목 */}
        <Title>
          {postName}
          {badgeCount > 0 && <Badge>{badgeCount > 99 ? "99+" : badgeCount}</Badge>}
        </Title>
        {/* 게시글 생성 시간 */}
        <Date>{date}</Date>
      </CardContainer>
    );
  };
  
export default PostCard;
