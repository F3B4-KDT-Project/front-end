export interface AuthButtonProps {
  onClick: () => void;
  disabled: boolean;
  text: string;
}

export interface UserProfileResponse {
  loginId: string;
  memberId: number;
  nickName: string;
  profileImage: string;
}
