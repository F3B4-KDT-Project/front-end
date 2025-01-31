export interface ProfileImageProps {
  profileImage: string;
  patchUserProfileImage: (file: File) => void;
}

export interface ProfileDetailsProps {
  label: string;
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  handleChange: () => void;
  detail: string;
}
