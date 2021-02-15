import { css } from "styled-components";

export const border = css`
  border: ${({ theme }) =>
    `${theme.borderWidth[2]} ${theme.borderWeight.solid} ${theme.color.border}`};
  transition: border-color 200ms;
`;
