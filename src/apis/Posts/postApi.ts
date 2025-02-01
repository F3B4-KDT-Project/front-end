import { CreatePostRequest, Post } from '../../models/Post';
import { http } from '../httpClient';

export const createPost = async (
  postData: CreatePostRequest
): Promise<Post> => {
  const data = await http.post<Post>('/api/posts', postData);
  return data;
};
