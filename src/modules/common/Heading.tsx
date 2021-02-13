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
    font-size: clamp(1.5rem, 2rem, 3rem);
  }
  &.h2 {
    font-size: clamp(1.25rem, 1.5rem, 2rem);
  }
  &.h3 {
    font-size: clamp(1rem, 1.3rem, 1.5rem);
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

const Heading = ({
  styleAs,
  as,
  children,
  style,
}: HeadingProps & React.HTMLProps<HTMLHeadingElement>) => {
  return (
    <StyledHeading as={as} className={styleAs} style={style}>
      {children}
    </StyledHeading>
  );
};

export default Heading;
