import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(NavLink)<{ active?: boolean }>`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.color.text};
  text-decoration: none;
  padding: 0.5rem 0;
  font-weight: bold;

  .menu-icon {
    margin-right: 0.5rem;
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

export default StyledLink;
