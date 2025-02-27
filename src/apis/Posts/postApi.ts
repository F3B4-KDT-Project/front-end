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

// 게시글 조회 - 405 에러 도시뗴...?
// export const fetchPostDetail = async (postId: number): Promise<PostProps> => {
//   console.log("🔍 fetchPostDetail - 요청하는 API 경로:", `/api/posts/${postId}`);

//   return await http.get<PostProps>(`/api/posts/${postId}`, {
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//       "Content-Type": "application/json", 
//     },
//   });
// };
// export const fetchPostDetail = async (postId: number): Promise<PostProps> => {
//   const url = `/api/posts/${postId}`;
//   console.log("🔍 fetchPostDetail - 요청하는 API 경로:", url);

//   try {
//     const response = await http.get<PostProps>(url, {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//       },
//     });
//     console.log("✅ 성공적으로 데이터 가져옴:", response.data);
//     return response.data;
//   } catch (error: any) {
//     console.error("❌ 게시글 조회 오류:", error.response?.data || error.message);
//     throw error;
//   }
// };
export const fetchPostDetail = async (postId: number): Promise<PostProps> => {
  const url = `/api/posts/post/${postId}`;
  console.log("[ Post 페이지 ]🔍 fetchPostDetail - 요청하는 API 경로:", url);

  try {
    const data = await http.get<PostProps>(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });

    console.log("[ Post 페이지 - fetchPostDetail ]✅ 성공적으로 데이터 가져옴 :", data);
    return data;
  } catch (error: any) {
    console.error("[ Post 페이지 - fetchPostDetail ]❌ 게시글 조회 오류 상태 코드:", error.response?.status);
    console.error("[ Post 페이지 - fetchPostDetail ]❌ 게시글 조회 오류 메시지:", error.response?.data || error.message);
    throw error;
  }
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
