import styled from "styled-components";
import { percentageColor } from "utils/css.utils";
import { InputProps } from "types/input";
import InputCombo from "modules/common/InputCombo";

const Input = styled.input.attrs((props) => ({
  type: props.type || "text",
}))<InputProps>`
  background-color: ${(props) => props.theme.color.background};
  border: 2px solid ${(props) => percentageColor(props.theme.color.black, 99)};
  border-radius: ${(props) => props.theme.borderRadii[4]};
  height: 45px;
  width: 100%;
  padding: 0 0.5rem;
  font-size: 1rem;
  font-family: ${(props) => props.theme.font.body};

  &:focus {
    border-color: ${(props) => props.theme.color.primary};
    outline: ${(props) => props.theme.color.primary};
  }

  ${InputCombo} & {
    height: 100%;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

export default Input;
