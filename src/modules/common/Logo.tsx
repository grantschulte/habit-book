import React from "react";
import styled from "styled-components";
import { percentageColor } from "utils/css.utils";

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  background-color: ${(props) =>
    percentageColor(props.theme.color.background, -10)};
  color: ${(props) => props.theme.color.text};

  @media screen and (max-width: 768px) {
    grid-column: 1 / 3;
    padding: 1rem;
  }
`;

const LogoText = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  font-family: ${(props) => props.theme.font.display};
  color: var(--primary-color);
`;

const Logo: React.FC = () => {
  return (
    <StyledLogo>
      <LogoText>HabitBook</LogoText>
    </StyledLogo>
  );
};

export default Logo;
