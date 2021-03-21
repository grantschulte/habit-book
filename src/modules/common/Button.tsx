import React from "react";
import styled, { css, CSSProperties } from "styled-components";
import { percentageColor } from "utils/css";
import InputCombo from "modules/common/InputCombo";
import { Link } from "react-router-dom";

type ButtonSizes = "xs" | "sm" | "md" | "lg";
type ButtonType = "primary" | "secondary";
type ButtonSizesConfig = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
};

const BUTTON_PADDING: ButtonSizesConfig = {
  xs: "0.2rem 0.35rem",
  sm: "0.5rem 0.65rem",
  md: "0.85rem 1rem",
  lg: "1rem 1.5rem",
};
const BUTTON_FONT_SIZE: ButtonSizesConfig = {
  xs: "0.75rem",
  sm: "0.85rem",
  md: "1.10rem",
  lg: "1.25rem",
};

export type ButtonProps = {
  as?: "button" | "a" | "link";
  primary?: boolean;
  secondary?: boolean;
  size?: ButtonSizes;
  href?: string;
  fullWidth?: boolean;
  onClick?: (e: React.SyntheticEvent) => void;
  style?: CSSProperties;
  ref?: React.RefObject<HTMLButtonElement>;
};

export type StyledButtonProps = {
  size?: ButtonSizes;
  $buttonType: ButtonType;
  href?: string;
  $fullWidth?: boolean;
};

const buttonStyles = css<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) =>
    props.size ? BUTTON_FONT_SIZE[props.size] : BUTTON_FONT_SIZE.md};
  text-decoration: none;
  color: ${(props) =>
    props.$buttonType
      ? props.theme.color.button[props.$buttonType].text
      : props.theme.color.white};
  background-color: ${(props) =>
    props.$buttonType
      ? props.theme.color.button[props.$buttonType].background
      : props.theme.color.primary};
  padding: ${(props) =>
    props.size ? BUTTON_PADDING[props.size] : BUTTON_PADDING.md};
  width: ${(props) => (props.$fullWidth ? "100%" : "fit-content")};
  border: 2px solid;
  border-color: ${(props) =>
    props.theme.color.button[props.$buttonType].border};
  border-radius: ${(props) => props.theme.borderRadii[3]};

  &:hover {
    background-color: ${(props) =>
      props.$buttonType
        ? percentageColor(
            props.theme.color.button[props.$buttonType].background,
            5
          )
        : percentageColor(props.theme.color.primary, 5)};
  }

  &:active {
    background-color: ${(props) =>
      props.$buttonType
        ? percentageColor(
            props.theme.color.button[props.$buttonType].background,
            -5
          )
        : percentageColor(props.theme.color.primary, -5)};
  }

  &:focus {
    outline: 2px solid
      ${(props) => props.theme.color.button[props.$buttonType].outline};
  }

  ${InputCombo} & {
    height: 100%;
    width: fit-content;
    padding: 0 1rem;
    font-size: 1em;
    flex-shrink: 0;
    border-radius: ${(props) => props.theme.borderRadii[4]};
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export const StyledButton = styled.button<StyledButtonProps>`
  ${buttonStyles};
`;

export const StyledButtonAsLink = styled(Link)<StyledButtonProps>`
  ${buttonStyles};
`;

const Button: React.FC<ButtonProps> = ({
  primary,
  secondary,
  as = "button",
  href = "",
  fullWidth,
  ref,
  ...props
}) => {
  const buttonType = secondary ? "secondary" : "primary";

  if (as === "link") {
    return (
      <StyledButtonAsLink
        $buttonType={buttonType}
        {...props}
        to={href}
      ></StyledButtonAsLink>
    );
  }

  return (
    <StyledButton
      $buttonType={buttonType}
      as={as}
      $fullWidth={fullWidth}
      {...props}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
