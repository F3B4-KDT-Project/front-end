export interface AuthButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
  text: string;
}

export interface UserProfileResponse {
  loginId: string;
  memberId: number;
  nickName: string;
  profileImage: string;
}

export interface SignInRequest {
  loginId: string;
  password: string;
}

export interface SignInResponse {
  memberId: number;
  nickName: string;
  loginId: string;
  tokenResponse: {
    accessToken: string;
    refreshToken: string;
    key: string;
  };
}

export interface SignUpRequest {
  loginId: string;
  nickName: string;
  password: string;
  password2: string;
}

export interface SignUpResponse {
  memberId: number;
  loginId: string;
  nickName: string;
  profileImage: string;
}
