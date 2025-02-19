import { IdeCodeSaveProps,GetIdeCodeProps } from "../../models/Ide";
import { http } from "../httpClient";

// IDE 코드 수정/저장
export const IdeCodeSaveApi = async( postId:number, token:string ) => {
    return await http.put<IdeCodeSaveProps[]>(`/api/posts/${postId}/modify`,{
        header:{
            Authorization : `Bearer ${token}`,
            'Content-Type':'application/json'
        }
    })
}

// IDE 코드 GET 요청
// export const GetIdeCodeApi = async (postId:number, token:string):Promise<GetIdeCodeProps>=> {
//     return await http.get<GetIdeCodeProps[]>(`/api/posts/${postId}/content`,{
//         headers:{
//             Authorization : `Bearer ${token}`,
//             'Content-Type':'application/json'
//         }
//     })
// }

export const GetIdeCodeApi = (postId: number, token: string): Promise<GetIdeCodeProps[]> => 
    http.get<GetIdeCodeProps[]>(`/api/posts/${postId}/content`, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });

  