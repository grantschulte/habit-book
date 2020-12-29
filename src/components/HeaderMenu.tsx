import React from "react";
import styled from "styled-components";

const StyledHeaderMenu = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  margin-left: auto;
  color: var(--text-color);

  > * {
    margin-left: 1rem;
  }
`;

const StyledLink = styled.a<{ active?: boolean }>`
  color: ${(props) => props.theme.color.bodyText};
  color: ${(props) =>
    props.active ? props.theme.color.primary : props.theme.color.bodyText};
  text-decoration: ${(props) => (props.active ? "none" : "underline")};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
`;

function HeaderMenu() {
  return (
    <StyledHeaderMenu>
      <StyledLink href="/" active>
        Today
      </StyledLink>
      <StyledLink href="/">My Scores</StyledLink>
      <StyledLink href="/">Settings</StyledLink>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
