import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import RouteConfig from "../route-config";
import { percentageColor } from "../utils/css.utils";
import Container from "./Container";
import {
  BiChart,
  BiCheckDouble,
  BiRecycle,
  BiCog,
  BiTachometer,
} from "react-icons/bi";

const StyledMenu = styled(Container)`
  display: flex;
  flex-direction: column;
  grid-column: 1 / 2;
  grid-row: 2 / 5;
  font-size: 1rem;
  background-color: ${(props) =>
    percentageColor(props.theme.color.background, -10)};
  color: ${(props) => props.theme.color.bodyText};

  @media screen and (max-width: 768px) {
    grid-column: 1 / 3;
    grid-row: 4 / 5;
    flex-direction: row;
    padding: 0;
  }
`;

const StyledLink = styled(NavLink)<{ active?: boolean }>`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.color.bodyText};
  text-decoration: none;
  padding: 0.5rem 0;
  font-weight: bold;

  .menu-icon {
    margin-right: 0.5rem;
  }

  &.active {
    color: ${(props) => props.theme.color.secondary};
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    font-size: 0.75rem;
    flex-grow: 1;
    flex-basis: 0;

    .menu-icon {
      width: 2rem;
      height: 2rem;
      margin-right: 0;
      margin-bottom: 0.25rem;
    }
  }
`;

function Menu() {
  return (
    <StyledMenu>
      <StyledLink exact to={RouteConfig.dashboard.path}>
        <BiTachometer className="menu-icon"></BiTachometer>
        <span>Dashboard</span>
      </StyledLink>
      <StyledLink exact to={RouteConfig.today.path}>
        <BiCheckDouble className="menu-icon"></BiCheckDouble>
        <span>Today</span>
      </StyledLink>
      <StyledLink to={RouteConfig.scorecard.path}>
        <BiChart className="menu-icon"></BiChart>
        <span>Scorecard</span>
      </StyledLink>
      <StyledLink to={RouteConfig.habits.path}>
        <BiRecycle className="menu-icon"></BiRecycle>
        <span>Habits</span>
      </StyledLink>
      <StyledLink to={RouteConfig.settings.path}>
        <BiCog className="menu-icon"></BiCog>
        <span>Settings</span>
      </StyledLink>
    </StyledMenu>
  );
}

export default Menu;
