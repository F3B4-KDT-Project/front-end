
export interface CreatePostRequest {
  boardId: number;
  name: string;
  language: string;
}

export interface PostResponse {
  id: number;
  boardId: number;
  name: string;
  language: string;
  filePath: string;
  createdAt: string;
  roomId: number;
}

export interface PostProps {
  id: number;
  boardId: string; // number -> string으로 변경
  name: string;
  language: string;
  filePath: string;
  createdAt: string;
  roomId: number;
}
