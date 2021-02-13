import React from "react";
import styled from "styled-components";
import { BUTTON_PADDING, BUTTON_FONT_SIZE } from "config/button-sizes";
import { StyledButtonProps, ButtonProps } from "types/button-types";
import { percentageColor } from "utils/css.utils";
import InputCombo from "modules/common/InputCombo";
import { border } from "styles/mixins";

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
      : props.theme.color.black};
  background-color: ${(props) =>
    props.buttonType
      ? props.theme.color.button[props.buttonType].background
      : props.theme.color.primary};
  padding: ${(props) =>
    props.size ? BUTTON_PADDING[props.size] : BUTTON_PADDING.md};
  width: ${(props) => (props.fullWidth ? "100%" : "fit-content")};
  cursor: pointer;
  border: none;

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

  & :first-of-type {
    margin-right: 0.25rem;
  }

  ${InputCombo} & {
    /* ${border}; */
    border-left: none;
    height: 100%;
    width: fit-content;
    padding: 0 1rem;
    font-size: 1em;
    flex-shrink: 0;
  }
`;

const StyledButtonIcon = styled.span`
  font-size: inherit;
`;

const Button: React.FC<ButtonProps> = ({
  buttonType = "primary",
  ...props
}: ButtonProps) => {
  return (
    <StyledButton buttonType={buttonType} {...props}>
      {props.icon ? <StyledButtonIcon as={props.icon} /> : null}
      {props.children}
    </StyledButton>
  );
};

export default Button;
