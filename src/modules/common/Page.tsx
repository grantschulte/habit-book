import { Row } from "lib/Grid";
import styled from "styled-components";

type PageProps = {
  center?: boolean;
  direction?: "column" | "row";
};

const Page = styled.div<PageProps>`
  padding: clamp(1.5rem, 5vw, 2rem) clamp(1rem, 5vw, 1.5rem);
  height: 100vh;

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

  @media screen and (max-width: 768px) {
    display: block;
    height: auto;
  }

  ${Row} {
    width: ${({ center }) => (center ? "100%" : "auto")};
  }
`;

export default Page;
