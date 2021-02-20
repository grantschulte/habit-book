import styled from "styled-components";

type PageProps = {
  center?: boolean;
  direction?: "column" | "row";
};

const Page = styled.div<PageProps>`
  padding: clamp(1.5rem, 5vw, 2rem) clamp(1rem, 5vw, 1.5rem);
  height: 100vh;
`;

export default Page;
