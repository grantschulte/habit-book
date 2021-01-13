import React from "react";
import { IconType } from "react-icons/lib";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { percentageColor } from "../../utils/css.utils";

const StyledMenuLink = styled(NavLink)<{ active?: boolean }>`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.color.text};
  text-decoration: none;
  padding: 0.5rem 0;
  font-weight: bold;

  &:hover {
    color: ${(props) => percentageColor(props.theme.color.text, 70)};
  }

  &.active {
    color: ${(props) => props.theme.color.primary};
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

const MenuIcon = styled.span<{ size?: string }>`
  color: inherit;
  font-size: ${(props) => props.size ?? "1rem"};
  margin-right: 0.5rem;
`;

type MenuLinkProps = {
  icon?: IconType;
  to: string;
  children?: React.ReactChild | React.ReactChild[];
  exact?: boolean;
};

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
