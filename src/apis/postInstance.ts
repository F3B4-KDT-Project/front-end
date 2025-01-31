import axiosInstance from "./axiosInstance";

export const editPost = async(postData:any)=>{
    try{
        const response = await axiosInstance.put(`/api/posts/{id}/update`)
    } catch(error) {
        console.error('[ 🚨 Error ] edit post : ',error)
    }
}

/* 게시글 삭제 */
export const deletePost = async( postData:any )=>{
    try{
        const response = await axiosInstance.delete(`/api/boards/${postData.boardId}/posts/${postData.postId}`,postData);
        return response.data;
    } catch (error) {
        console.error('[ 🚨 Error ] delete post : ',error);
        throw error;
    }
};

/* 코드 저장 */
export const saveCode = async ( codeData : any ) => {
    try{
        const response = await axiosInstance.put(`/api/posts/${codeData.postId}/modify`,codeData);
        return response.data;
    } catch(error) {
        console.error('[ 🚨 Error ] saving post : ',error);
        throw error;
    } 
};