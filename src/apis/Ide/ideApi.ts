import { IdeCodeSaveProps,GetIdeCodeProps } from "../../models/Ide";
import { http } from "../httpClient";

// IDE 코드 수정/저장
export const IdeCodeSaveApi = async( postId:number, token:string ) => {
    const url = `/api/posts/${postId}/modify`;
    console.log("🔍 IdeCodeSaveApi - 요청하는 API 경로 : ", url);

    try{
        const data = await http.put<IdeCodeSaveProps[]>(url, {
            headers:{
                Authorization:`Bearer ${token}`,
                "Content-Type" : `application/json`
            }
        })

        console.log('[ IdeCodeSaveApi ] ✅ 코드 저장 성공')
        console.log("[ IdeCodeSaveApi ] ✅ 성공적으로 데이터 가져옴 : ", data);
        return data
    } catch(error:any) {
        console.error("[ IdeCodeSaveApi ] ❌ IDE 코드 수정/저장 오류 상태 코드 : ", error.response?.status);
        console.error("[ IdeCodeSaveApi ] ❌ IDE 코드 수정/저장 오류 메세지 : ", error.response?.data || error.message);
        throw error;
    }
}

// IDE 코드 GET 요청
export const GetIdeCodeApi = async(postId: number, token: string) : Promise<GetIdeCodeProps[]> => {
    const url = `/api/posts/${postId}/content`;
    console.log("🔍 GetIdeCodeApi - 요청하는 API 경로 : ", url);

    try{
        const data = await http.get<GetIdeCodeProps[]>(url,{
            headers:{
                Authorization: `Bearer ${token}`,
                "Content-Type": `application/json`
            }
        })

        console.log("[ GetIdeCodeApi ] ✅ 성공적으로 데이터 가져옴 : ", data);
        return data;
    }catch(error:any){
        console.error("[ GetIdeCodeApi ] ❌ IDE 조회 오류 상태 코드 : ", error.response?.status);
        console.error("[ GetIdeCodeApi ] ❌ IDE 조회 오류 메세지 : ", error.response?.data || error.message);
        throw error;
    }
};

  