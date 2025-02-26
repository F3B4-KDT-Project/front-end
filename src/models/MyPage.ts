export interface ProfileImageProps {
  profileImage: string;
  patchUserProfileImage: (file: File) => void;
}

export interface ProfileDetailsProps {
  label: string;
  isEditing?: boolean;
  setIsEditing?: (value: boolean) => void;
  value: string;
  setValue?: (value: string) => void;
  placeholder?: string;
  handleChange?: () => void;
  detail: string;
}

export interface InputProps {
  type: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: boolean;
  message?: string;
}

export interface ThemeSelectionProps {
  isDarkMode: boolean;
  setIsDarkMode: (theme: boolean) => void;
}

export interface NotificationProps {
  type: string;
  message: string;
}
