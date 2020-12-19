import React from "react";
import styled from "styled-components";
import { BiMenu } from "react-icons/bi";

const StyledHeaderMenu = styled.div`
  font-size: 0.8rem;
  margin-left: auto;
  color: var(--text-color);
`;

function HeaderMenu() {
  return (
    <StyledHeaderMenu>
      <BiMenu size="2rem"></BiMenu>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
