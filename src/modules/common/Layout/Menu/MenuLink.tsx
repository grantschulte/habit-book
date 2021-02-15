import React from "react";
import styled from "styled-components";
import { IconType } from "lib/Icons";
import { NavLink } from "lib/Router";

const MenuIcon = styled.span`
  color: inherit;
  margin-right: 0.5rem;
`;

const StyledMenuLink = styled(NavLink)<{ active?: boolean }>`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.color.text};
  text-decoration: none;

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
    padding: 0.5rem 0;

    ${MenuIcon} {
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 0;
      margin-bottom: 0.25rem;
    }
  }
`;

interface MenuLinkProps {
  icon?: IconType;
  to: string;
  children?: React.ReactChild | React.ReactChild[];
  exact?: boolean;
}

const MenuLink: React.FC<MenuLinkProps> = ({
  icon,
  to,
  children,
  exact,
}: MenuLinkProps) => {
  return (
    <StyledMenuLink to={to} exact={exact}>
      {icon && <MenuIcon as={icon} />}
      <span>{children}</span>
    </StyledMenuLink>
  );
};

export default MenuLink;
