import { ReactChild } from "react";
import { IconType } from "react-icons/lib";

export type ButtonSizes = "sm" | "md" | "lg";
export type ButtonType = "primary" | "secondary" | "tertiary";
export type ButtonSizesConfig = {
  sm: string;
  md: string;
  lg: string;
};

export type ButtonProps = {
  as?: "button" | "a";
  children?: ReactChild;
  buttonType?: ButtonType;
  size?: ButtonSizes;
  icon?: IconType;
  href?: string;
  fullWidth?: boolean;
};

export type StyledButtonProps = {
  size?: ButtonSizes;
  buttonType?: ButtonType;
  href?: string;
  fullWidth?: boolean;
};
