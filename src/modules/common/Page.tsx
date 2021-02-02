import { Row } from "modules/common/Grid";
import styled from "styled-components";

type PageProps = {
  center?: boolean;
  direction?: "column" | "row";
};

const Page = styled.div<PageProps>`
  padding: ${(props) => props.theme.spacing[4]};
  height: 100%;

  ${({ center }) =>
    center && {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}

  ${({ direction }) =>
    direction && {
      flexDirection: direction,
    }}

  ${Row} {
    width: ${({ center }) => (center ? "100%" : "auto")};
  }
`;

export default Page;
