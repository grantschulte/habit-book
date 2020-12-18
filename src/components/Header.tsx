import React from "react";
import styled from "styled-components";

import HeaderMenu from "./HeaderMenu";

interface HeaderProps {
  height?: string;
}

const StyledHeader = styled.header<HeaderProps>`
  display: flex;
  align-items: center;
  padding: 1rem;
  height: ${(props) => props.height || "80px"};
  font-size: 1.5em;
`;

const LogoText = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: var(--primary-color);
`;

function Header({ height }: HeaderProps): JSX.Element {
  return (
    <StyledHeader height={height}>
      <LogoText>HabitBook</LogoText>
      <HeaderMenu>Menu</HeaderMenu>
    </StyledHeader>
  );
}

export default Header;
