import { css } from "styled-components";

export const border = css`
  border: ${({ theme }) =>
    `${theme.borderWidth[2]} ${theme.borderWeight.solid} ${theme.color.black}`};
`;
