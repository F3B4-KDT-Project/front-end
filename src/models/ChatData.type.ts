export interface Message {
  senderId: number;
  memberProfileImageUrl: string;
  memberNickname: string;
  messageText: string;
  sendTime: string;
}

export interface MessageProps {
  isMyMessage: boolean;
}
