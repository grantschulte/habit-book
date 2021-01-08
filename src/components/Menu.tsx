import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import RouteConfig from "../route-config";
import { percentageColor } from "../utils/css.utils";
import Container from "./Container";

const StyledMenu = styled(Container)`
  display: flex;
  flex-direction: column;
  grid-column: 1 / 2;
  grid-row: 2 / 4;
  font-size: 1rem;
  color: ${(props) => props.theme.color.bodyText};
  background-color: ${(props) =>
    percentageColor(props.theme.color.background, -10)};

  @media screen and (max-width: 768px) {
    grid-column: 1 / 3;
    grid-row: 3 / 4;
  }
`;

const StyledLink = styled(NavLink)<{ active?: boolean }>`
  color: ${(props) => props.theme.color.bodyText};
  text-decoration: none;
  padding: 0.5rem 0;

  &.active {
    color: ${(props) => props.theme.color.secondary};
    text-decoration: none;
  }
`;

function Menu() {
  return (
    <StyledMenu>
      <StyledLink exact to={RouteConfig.home.path}>
        Today
      </StyledLink>
      <StyledLink to={RouteConfig.scoreboard.path}>Scoreboard</StyledLink>
      <StyledLink to={RouteConfig.habits.path}>Habits</StyledLink>
      <StyledLink to={RouteConfig.settings.path}>Settings</StyledLink>
    </StyledMenu>
  );
}

export default Menu;
