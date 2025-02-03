
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

export interface Post {
  id: number;
  boardId: number;
  name: string;
  language: string;
  filePath: string;
  createdAt: string;
  roomId: number;
}