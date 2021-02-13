import styled from "styled-components";
import { InputProps } from "types/input";
import InputCombo from "modules/common/InputCombo";
import { border } from "styles/mixins";

const Input = styled.input.attrs((props) => ({
  type: props.type || "text",
}))<InputProps>`
  background-color: ${(props) => props.theme.color.background};
  height: 60px;
  width: 100%;
  padding: 0 0.75rem;
  font-size: 1rem;
  font-family: ${(props) => props.theme.font.body};
  color: ${(props) => props.theme.color.text};
  /* ${border}; */
  border: none;

  &:focus,
  &:active {
    outline: ${(props) => props.theme.color.secondary};
  }

  &:disabled {
    color: ${(props) => props.theme.color.textDisabled};
  }

  ${InputCombo} & {
    height: 100%;
    /* border-right: 0; */
    /* border-color: ${(props) => props.theme.color.border}; */
  }
`;

export default Input;
