import styled from "styled-components";

type PageProps = {
  center?: boolean;
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
`;

export default Page;
