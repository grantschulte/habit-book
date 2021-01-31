import React from "react";
import styled from "styled-components";

type PageProps = {
  children?: React.ReactNode;
  center?: boolean;
};

const StyledPage = styled.div<PageProps>`
  padding: ${(props) => props.theme.spacing[4]};
  height: 100%;

  ${({ center }) =>
    center && {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
`;

const Page = ({ children, center }: PageProps) => {
  return <StyledPage center={center}>{children}</StyledPage>;
};

export const PageCentered = styled(Page)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Page;
