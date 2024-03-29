import styled from "styled-components";
import InputCombo from "modules/common/InputCombo";

export type InputType = "text" | "password" | "email";

export interface InputProps {
  id?: string;
  type: InputType;
  isValid?: boolean;
  required?: boolean;
}

const Input = styled.input.attrs((props) => ({
  type: props.type || "text",
}))<InputProps>`
  background-color: ${(props) => props.theme.color.background};
  height: 60px;
  width: 100%;
  padding: 0 0.75rem;
  font-size: 1rem;
  color: ${(props) => props.theme.color.text};
  border: ${({ theme }) =>
    `${theme.borderWidth[2]} ${theme.borderWeight.solid} ${theme.color.border}`};
  border-radius: ${(props) => props.theme.borderRadii[4]};

  &:focus,
  &:active {
    outline: ${(props) => props.theme.color.secondary};
  }

  &:disabled {
    color: ${(props) => props.theme.color.textDisabled};
  }

  ${InputCombo} & {
    height: 100%;
    border-right: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

export default Input;
