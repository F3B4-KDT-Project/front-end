export interface PostCardProps {
  postName: string;
  badgeCount: number;
  date: string;
  boardId: number;
  postId: number;
  roomId: number;
}

export interface UserInfoProps {
  profileImage: string;
  id: string;
  nickName: string;
  onRemove: () => void;
}
