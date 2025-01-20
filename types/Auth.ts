export interface AuthInputProps {
  type: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error: boolean;
  message: string;
}

export interface AuthButtonProps {
  onClick: () => void;
  disabled: boolean;
  text: string;
}
