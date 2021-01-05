import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import RouteConfig from "../route-config";

const StyledHeaderMenu = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  margin-left: auto;
  color: ${(props) => props.theme.color.bodyText};

  > * {
    margin-left: 1.5rem;
  }
`;

const StyledLink = styled(NavLink)<{ active?: boolean }>`
  color: ${(props) => props.theme.color.bodyText};
  text-decoration: none;

  &.active {
    color: ${(props) => props.theme.color.secondary};
    text-decoration: none;
  }
`;

function HeaderMenu() {
  return (
    <StyledHeaderMenu>
      <StyledLink exact to={RouteConfig.home.path}>
        Today
      </StyledLink>
      <StyledLink to={RouteConfig.scoreboard.path}>Scoreboard</StyledLink>
      <StyledLink to={RouteConfig.habits.path}>Habits</StyledLink>
      <StyledLink to={RouteConfig.settings.path}>Settings</StyledLink>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
