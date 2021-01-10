import React from "react";
import styled from "styled-components";
import {
  BUTTON_PADDING,
  BUTTON_FONT_SIZE,
  BUTTON_WIDTH,
} from "../constants/button-sizes";
import { StyledButtonProps, ButtonProps } from "../types/ButtonTypes";
import { percentageColor } from "../utils/css.utils";

const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  font-family: ${(props) => props.theme.font.heading};
  font-size: ${(props) =>
    props.size ? BUTTON_FONT_SIZE[props.size] : BUTTON_FONT_SIZE.md};
  font-weight: normal;
  color: ${(props) =>
    props.buttonType
      ? props.theme.button[props.buttonType].text
      : props.theme.color.white};
  background-color: ${(props) =>
    props.buttonType
      ? props.theme.button[props.buttonType].background
      : props.theme.color.primary};
  padding: ${(props) =>
    props.size ? BUTTON_PADDING[props.size] : BUTTON_PADDING.md};
  min-width: ${(props) => (props.size ? BUTTON_WIDTH[props.size] : "100%")};
  max-width: 100%;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.buttonType
        ? percentageColor(props.theme.button[props.buttonType].background, 5)
        : percentageColor(props.theme.color.primary, 5)};
  }

  &:active {
    background-color: ${(props) =>
      props.buttonType
        ? percentageColor(props.theme.button[props.buttonType].background, -5)
        : percentageColor(props.theme.color.primary, -5)};
  }
`;

const StyledButtonIcon = styled.span`
  font-size: inherit;
  margin-right: 0.25em;
  margin-left: -0.25em;
`;

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <StyledButton size={props.size} buttonType={props.buttonType} as={props.as}>
      {props.icon && <StyledButtonIcon as={props.icon} />}
      {props.children}
    </StyledButton>
  );
};

export default Button;
