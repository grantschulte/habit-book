import React from "react";
import styled, { CSSProperties } from "styled-components";
import { percentageColor } from "utils/css";
import InputCombo from "modules/common/InputCombo";

type ButtonSizes = "xs" | "sm" | "md" | "lg";
type ButtonType = "primary" | "secondary";
type ButtonSizesConfig = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
};

const BUTTON_PADDING: ButtonSizesConfig = {
  xs: "0.55rem",
  sm: "0.65rem 0.85rem",
  md: "0.85rem 1rem",
  lg: "1rem 1.5rem",
};
const BUTTON_FONT_SIZE: ButtonSizesConfig = {
  xs: "0.85rem",
  sm: "0.85rem",
  md: "1.10rem",
  lg: "1.25rem",
};

export type ButtonProps = {
  as?: "button" | "a";
  primary?: boolean;
  secondary?: boolean;
  size?: ButtonSizes;
  href?: string;
  fullWidth?: boolean;
  onClick?: (e: React.SyntheticEvent) => void;
  style?: CSSProperties;
};

export type StyledButtonProps = {
  size?: ButtonSizes;
  buttonType: ButtonType;
  href?: string;
  fullWidth?: boolean;
};

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${(props) => props.theme.font.heading};
  font-size: ${(props) =>
    props.size ? BUTTON_FONT_SIZE[props.size] : BUTTON_FONT_SIZE.md};
  text-decoration: none;
  color: ${(props) =>
    props.buttonType
      ? props.theme.color.button[props.buttonType].text
      : props.theme.color.white};
  background-color: ${(props) =>
    props.buttonType
      ? props.theme.color.button[props.buttonType].background
      : props.theme.color.primary};
  padding: ${(props) =>
    props.size ? BUTTON_PADDING[props.size] : BUTTON_PADDING.md};
  width: ${(props) => (props.fullWidth ? "100%" : "fit-content")};
  border: 2px solid;
  border-color: ${(props) => props.theme.color.button[props.buttonType].border};

  &:hover {
    background-color: ${(props) =>
      props.buttonType
        ? percentageColor(
            props.theme.color.button[props.buttonType].background,
            5
          )
        : percentageColor(props.theme.color.primary, 5)};
  }

  &:active {
    background-color: ${(props) =>
      props.buttonType
        ? percentageColor(
            props.theme.color.button[props.buttonType].background,
            -5
          )
        : percentageColor(props.theme.color.primary, -5)};
  }

  &:focus {
    outline: 2px solid
      ${(props) => props.theme.color.button[props.buttonType].outline};
  }

  ${InputCombo} & {
    height: 100%;
    width: fit-content;
    padding: 0 1rem;
    font-size: 1em;
    flex-shrink: 0;
  }
`;

const Button: React.FC<ButtonProps> = ({ primary, secondary, ...props }) => {
  const buttonType = secondary ? "secondary" : "primary";

  return (
    <StyledButton buttonType={buttonType} {...props}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
