import React from "react";
import styled from "styled-components";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingProps = {
  styleAs?: HeadingLevel;
  as: HeadingLevel;
  children?: React.ReactChild;
  noMargin?: boolean;
};

const StyledHeading = styled.h1<HeadingProps>`
  font-family: ${(props) => props.theme.font.heading};
  margin-top: 0;

  &.h1 {
    font-size: clamp(1.5rem, 3vw, 3rem);
  }
  &.h2 {
    font-size: clamp(1.25rem, 3vw, 2rem);
  }
  &.h3 {
    font-size: clamp(1rem, 3vw, 1.5rem);
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

  ${(props) => (props.noMargin ? "margin-bottom: 0" : null)};
`;

const Heading = ({
  styleAs,
  as,
  children,
  style,
  noMargin,
}: HeadingProps & React.HTMLProps<HTMLHeadingElement>) => {
  return (
    <StyledHeading
      as={as}
      className={styleAs}
      style={style}
      noMargin={noMargin}
    >
      {children}
    </StyledHeading>
  );
};

export default Heading;
