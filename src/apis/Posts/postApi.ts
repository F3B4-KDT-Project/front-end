import { CreatePostRequest, Post } from '../../models/Post';
import { http } from '../httpClient';

export const fetchPosts = async (boardId: number): Promise<Post[]> => {
  const response = await http.get<Post[]>('/api/posts', {
    params: {
      boardId,
    },
  });
  return response;
};

export const createPost = async (
  postData: CreatePostRequest
): Promise<Post> => {
  const data = await http.post<Post>('/api/posts', postData);
  return data;
};

export const fetchPostDetail = async (id: number): Promise<Post> => {
  const response = await http.get<Post>(`/api/posts/${id}`);
  return response;
};
