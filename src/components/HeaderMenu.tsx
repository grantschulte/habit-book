import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import RouteConfig from "../route-config";

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

const StyledLink = styled(NavLink)<{ active?: boolean }>`
  color: ${(props) => props.theme.color.bodyText};

  &.active {
    color: ${(props) => props.theme.color.primary};
    text-decoration: none;
    font-weight: bold;
  }
`;

function HeaderMenu() {
  return (
    <StyledHeaderMenu>
      <StyledLink exact to={RouteConfig.home.path}>
        Today
      </StyledLink>
      <StyledLink to={RouteConfig.scores.path}>My Scores</StyledLink>
      <StyledLink to={RouteConfig.settings.path}>Settings</StyledLink>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
