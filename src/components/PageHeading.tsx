import React from "react";
import styled from "styled-components";
import Container from "./Layout/Container";
import usePageTitle from "../hooks/usePageTitle";

const StyledPageHeading = styled(Container)`
  grid-column: 2 / 3;
  grid-row: 2 / 3;

  h2 {
    margin: 0;
  }

  @media screen and (max-width: 768px) {
    grid-column: 1 / 3;
  }
`;

const PageHeading = () => {
  const pageTitle = usePageTitle();

  return (
    <StyledPageHeading>
      <h2>{pageTitle}</h2>
    </StyledPageHeading>
  );
};

export default PageHeading;
