import React from "react";
import styled from "styled-components";

import HeaderMenu from "./HeaderMenu";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 60px;
  font-size: 1.5em;
`;

const LogoText = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: var(--primary-color);
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <LogoText>ThreeHabits</LogoText>
      <HeaderMenu></HeaderMenu>
    </StyledHeader>
  );
};

export default Header;
