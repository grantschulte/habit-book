import styled from "styled-components";

type InputComboProps = {
  size?: "sm" | "md" | "lg";
};

const INPUT_COMBO_SIZES = {
  sm: "45px",
  md: "50px",
  lg: "60px",
};

const INPUT_FONT_SIZES = {
  sm: "0.85rem",
  md: "1rem",
  lg: "1.25rem",
};

const InputCombo = styled.div<InputComboProps>`
  display: flex;
  align-items: center;
  font-size: ${({ size }) =>
    size ? INPUT_FONT_SIZES[size] : INPUT_FONT_SIZES["md"]};
  height: ${({ size }) =>
    size ? INPUT_COMBO_SIZES[size] : INPUT_COMBO_SIZES["md"]};
`;

export default InputCombo;
