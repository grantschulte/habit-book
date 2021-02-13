import React from "react";
import styled from "styled-components";
import RouteConfig from "config/routes";
import {
  BiCheckDouble,
  BiRecycle,
  BiCog,
  BiTachometer,
} from "modules/common/Icons";
import MenuLink from "./SidebarMenuLink";

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1 / 2;
  grid-row: 2 / 5;
  font-size: 1rem;
  color: ${(props) => props.theme.color.text};
  padding: 1.5rem;

  @media screen and (max-width: 768px) {
    padding: 1rem;
    grid-column: 1 / 3;
    grid-row: 4 / 5;
    flex-direction: row;
    padding: 0;
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
      <MenuLink to={RouteConfig.habits.path} icon={BiRecycle}>
        Habits
      </MenuLink>
      <MenuLink to={RouteConfig.settings.path} icon={BiCog}>
        Account
      </MenuLink>
    </StyledMenu>
  );
}

export default Menu;
