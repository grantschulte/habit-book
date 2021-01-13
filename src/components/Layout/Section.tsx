import React from "react";
import styled from "styled-components";

type SectionProps = { children: React.ReactNode };

const StyledSection = styled.div`
  margin: 2rem 0;

  &:first-of-type {
    margin-top: 0;
  }
`;

const Section: React.FC<SectionProps> = ({ children }: SectionProps) => {
  return <StyledSection>{children}</StyledSection>;
};

export default Section;
