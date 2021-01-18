import styled, { CSSProperties } from "styled-components";
import { FlexRowProps } from "../../types/types";

export const FlexRow = styled.div<CSSProperties>`
  display: flex;
`;

export const FlexRowItem = styled.div<FlexRowProps>`
  ${(props) => {
    return {
      flexGrow: props.flexGrow,
      flexBasis: props.flexBasis,
    };
  }};
`;
