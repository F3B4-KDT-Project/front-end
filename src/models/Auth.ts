export interface UserProfileResponse {
  memberId: number;
  nickName: string;
  profileImage: string;
  kakaoId: string;
}

export interface LogInRequest {
  authorizationCode: string;
}

export interface LogInResponse {
  memberId: number;
  nickName: string;
  profileImage: string;
  tokenResponse: {
    accessToken: string;
  };
}
