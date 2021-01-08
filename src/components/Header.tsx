import React from "react";
import styled from "styled-components";

import Container from "./Container";
import { percentageColor } from "../utils/css.utils";

const StyledHeader = styled(Container)`
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  background-color: ${(props) => props.theme.color.black};
  color: ${(props) => props.theme.color.white};

  @media screen and (max-width: 768px) {
    grid-column: 1 / 3;
  }
`;

const LogoText = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: var(--primary-color);
`;

const Header: React.FC = () => {
  return (
    <StyledHeader as="header">
      <LogoText>HabitBook</LogoText>
    </StyledHeader>
  );
};

export default Header;
