import React from "react";
import styled from "styled-components";

import HeaderMenu from "./HeaderMenu";
import Container from "./Container";

const StyledHeader = styled(Container)`
  display: flex;
  align-items: center;
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
    <StyledHeader as="header">
      <LogoText>HabitBook</LogoText>
      <HeaderMenu></HeaderMenu>
    </StyledHeader>
  );
};

export default Header;
