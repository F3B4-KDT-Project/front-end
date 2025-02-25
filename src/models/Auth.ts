export interface UserProfileResponse {
  loginId: string;
  memberId: number;
  nickName: string;
  profileImage: string;
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
