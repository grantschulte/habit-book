import { IconType } from "react-icons/lib";

export type ButtonSizes = "sm" | "md" | "lg";
export type ButtonType = "primary" | "secondary" | "primary";
export type ButtonSizesConfig = {
  sm: string;
  md: string;
  lg: string;
};

export type ButtonProps = {
  as?: "button" | "a";
  children?: React.ReactNode;
  buttonType?: ButtonType;
  size?: ButtonSizes;
  icon?: IconType;
  href?: string;
  fullWidth?: boolean;
  onClick?: (e: React.SyntheticEvent) => void;
};

export type StyledButtonProps = {
  size?: ButtonSizes;
  buttonType: ButtonType;
  href?: string;
  fullWidth?: boolean;
};
