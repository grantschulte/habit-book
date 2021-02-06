import { Row } from "modules/common/Grid";
import styled from "styled-components";

type PageProps = {
  center?: boolean;
  direction?: "column" | "row";
};

const Page = styled.div<PageProps>`
  padding: clamp(1rem, 5vw, 1.5rem);
  height: 100vh;

  ${({ center }) =>
    center && {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 0,
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
