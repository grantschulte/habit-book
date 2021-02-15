import React from "react";
import styled from "styled-components";

import Logo from "modules/common/Logo";
import Menu from "./Menu/Menu";
import routes from "config/routes";

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(240px, 1fr) 8fr;
  grid-template-rows: 0.5fr 8fr 60px;
  height: 100vh;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  grid-column: 2 / 3;
  grid-row: 2 / 4;
  overflow-x: hidden;

  @media screen and (max-width: 768px) {
    grid-column: 1 / 3;
    grid-row: 2 / 4;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: clamp(1.5rem, 5vw, 2rem) clamp(1rem, 5vw, 1.5rem);
  grid-row: 1 / 2;
  grid-column: 1 / 3;
  color: ${(props) => props.theme.color.text};
  border-bottom: 1px solid ${(props) => props.theme.color.backgroundAlt};
`;

const LayoutUser = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Grid>
      <LogoContainer>
        <Logo to={routes.today.path}>HabitBook</Logo>
      </LogoContainer>
      <Menu />
      <Main>{children}</Main>
    </Grid>
  );
};

export default LayoutUser;
