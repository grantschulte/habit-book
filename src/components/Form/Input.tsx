import styled from "styled-components";
import { percentageColor } from "../../utils/css.utils";
import { InputProps } from "../../types/input";

const Input = styled.input.attrs((props) => ({
  type: props.type || "text",
}))<InputProps>`
  background-color: ${(props) => props.theme.color.background};
  border: 2px solid ${(props) => percentageColor(props.theme.color.black, 99)};
  border-radius: 4px;
  height: 45px;
  width: 100%;
  padding: 0 0.5rem;
  max-width: 400px;
  font-size: 1rem;
  font-family: ${(props) => props.theme.font.body};

  &:focus {
    border-color: ${(props) => props.theme.color.primary};
    outline: ${(props) => props.theme.color.primary};
  }
`;

export default Input;
