import { CreatePostRequest, PostProps } from '../../models/Post';
import { http } from '../httpClient';

// 전체 게시글 조회
export const fetchPosts = async (boardId: number): Promise<PostProps[]> => {
  const response = await http.get<PostProps[]>('/api/posts', {
    params: {
      boardId,
    },
  });
  return response;
};

// 게시글 생성
export const createPost = async (
  postData: CreatePostRequest
): Promise<PostProps> => {
  const data = await http.post<PostProps>('/api/posts', postData);
  return data;
};

// 게시글 조회
export const fetchPostDetail = async (id: number): Promise<PostProps> => {
  const response = await http.get<PostProps>(`/api/posts/${id}`);
  return response;
};

// 게시글 수정
export const updatePost = async (
  id: number,
  postData: { boardId: number; name: string; language: string }
): Promise<string> => {
  const response = await http.put<string>(`/api/posts/${id}/update`, postData);
  return response;
};

// 게시글 삭제
export const deletePost = async (id: string): Promise<string> => {
  const response = await http.delete<string>(`/api/posts/${id}`);
  return response;
};
