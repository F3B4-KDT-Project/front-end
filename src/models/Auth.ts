export interface UserProfileResponse {
  loginId: string;
  memberId: number;
  nickName: string;
  profileImage: string;
}

export interface SignInRequest {
  authorizationCode: string;
}

export interface SignInResponse {
  memberId: number;
  nickName: string;
  profileImage: string;
  tokenResponse: {
    accessToken: string;
  };
}
