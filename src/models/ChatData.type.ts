export interface Message {
  senderId: number;
  memberProfileImageUrl: string;
  memberNickname: string;
  messageText: string;
  sendTime: string;
}

export interface MessageCardProps {
  senderId: number;
  memberProfileImageUrl: string;
  memberNickname: string;
  messageText: string;
  sendTime: string;
  isMyMessage: boolean;
}

export interface MessageProps {
  isFlexRight: boolean;
}

export interface UploadImageRequest {
  imageFile: File;
}
