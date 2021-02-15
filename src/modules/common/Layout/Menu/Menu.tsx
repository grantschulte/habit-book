import RouteConfig from "config/routes";
import { BiCheckDouble, BiCog, BiEdit, BiTachometer } from "lib/Icons";
import React from "react";
import styled from "styled-components";
import MenuLink from "./MenuLink";

const StyledMenu = styled.div`
  display: grid;
  grid-row-gap: 1rem;
  grid-auto-rows: 1.25rem;
  grid-column: 1 / 2;
  grid-row: 2 / 5;
  padding: clamp(1.5rem, 5vw, 2rem) clamp(1rem, 5vw, 1.5rem);
  font-size: 1rem;
  color: ${(props) => props.theme.color.text};

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-columns: 1fr;
    grid-auto-rows: auto;
    grid-row-gap: auto;
    grid-column: 1 / 3;
    grid-row: 4 / 5;
    padding: 0;
    border-top: 1px solid ${(props) => props.theme.color.backgroundAlt};
  }
`;

function Menu() {
  return (
    <StyledMenu>
      <MenuLink exact to={RouteConfig.dashboard.path} icon={BiTachometer}>
        Dashboard
      </MenuLink>
      <MenuLink to={RouteConfig.today.path} icon={BiCheckDouble}>
        Today
      </MenuLink>
      <MenuLink to={RouteConfig.habits.path} icon={BiEdit}>
        Habits
      </MenuLink>
      <MenuLink to={RouteConfig.settings.path} icon={BiCog}>
        Account
      </MenuLink>
    </StyledMenu>
  );
}

export default Menu;
