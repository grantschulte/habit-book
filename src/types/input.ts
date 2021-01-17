export type InputType = "text" | "password" | "email";

export type InputProps = {
  id?: string;
  type: InputType;
};

export type PasswordVisibilityToggleProps = {
  onClick: () => void;
  passwordVisible: boolean;
};