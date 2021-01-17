import styled, { CSSProperties } from "styled-components";

type FlexRowProps = {
  flexGrow?: number;
  flexBasis?: number;
};

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
