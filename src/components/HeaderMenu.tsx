import React from "react";
import styled from "styled-components";

const StyledHeaderMenu = styled.div`
  font-size: 0.8rem;
  margin-left: auto;
  color: var(--text-color);
`;

function HeaderMenu(props: { children?: string }): JSX.Element {
  return <StyledHeaderMenu>{props.children}</StyledHeaderMenu>;
}

export default HeaderMenu;
