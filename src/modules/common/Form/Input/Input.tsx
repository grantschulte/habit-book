import styled from "styled-components";
import { InputProps } from "types/input";
import InputCombo from "modules/common/InputCombo";
import { border } from "styles/mixins";

const Input = styled.input.attrs((props) => ({
  type: props.type || "text",
}))<InputProps>`
  background-color: ${(props) => props.theme.color.background};
  border: 1px solid ${(props) => props.theme.color.black};
  height: 45px;
  width: 100%;
  padding: 0 0.75rem;
  font-size: 1rem;
  font-family: ${(props) => props.theme.font.body};
  ${border};

  &:focus {
    outline: ${(props) => props.theme.color.primary};
  }

  ${InputCombo} & {
    height: 100%;
    border-right: 0;
  }
`;

export default Input;
