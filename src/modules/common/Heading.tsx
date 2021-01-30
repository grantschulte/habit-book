import React from "react";
import styled from "styled-components";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingProps = {
  styleAs?: HeadingLevel;
  as: HeadingLevel;
  children?: React.ReactChild;
};

const StyledHeading = styled.h1`
  font-family: ${(props) => props.theme.font.heading};
  margin-top: 0;

  &.h1 {
    font-size: 2rem;
  }
  &.h2 {
    font-size: 1.5rem;
  }
  &.h3 {
    font-size: 1.3rem;
  }
  &.h4 {
    font-size: 1rem;
  }
  &.h5 {
    font-size: 0.8rem;
  }
  &.h6 {
    font-size: 0.7rem;
  }
`;

const Heading: React.FC<HeadingProps> = ({
  styleAs,
  as,
  children,
}: HeadingProps) => {
  return (
    <StyledHeading as={as} className={styleAs}>
      {children}
    </StyledHeading>
  );
};

export default Heading;
