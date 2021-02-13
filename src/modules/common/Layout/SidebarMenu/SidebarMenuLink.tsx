import React from "react";
import styled from "styled-components";
import { IconType } from "modules/common/Icons";
import { NavLink } from "Router";
import { percentageColor } from "utils/css.utils";

const MenuIcon = styled.span<{ size?: string }>`
  color: inherit;
  font-size: ${(props) => props.size ?? "1rem"};
  margin-right: 0.5rem;
`;

const StyledMenuLink = styled(NavLink)<{ active?: boolean }>`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.color.text};
  text-decoration: none;
  padding: 0.5rem 0;

  &:hover {
    color: ${(props) => percentageColor(props.theme.color.text, 70)};
  }

  &.active {
    color: ${(props) => props.theme.color.primary};
    text-decoration: none;
  }

  &:first-child {
    padding-top: 0;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    font-size: 0.75rem;
    flex-grow: 1;
    flex-basis: 0;

    ${MenuIcon} {
      width: 2rem;
      height: 2rem;
      margin-right: 0;
      margin-bottom: 0.25rem;
    }
  }
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
