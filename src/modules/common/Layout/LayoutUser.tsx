import routes from "config/routes";
import useToken from "hooks/useToken";
import { BiCheck } from "lib/Icons";
import { useLocation } from "lib/Router";
import Button from "modules/common/Button";
import { AppError } from "modules/common/Layout/AppError";
import LayoutUserSkeleton from "modules/common/Layout/LayoutUserSkeleton";
import Logo from "modules/common/Logo";
import React from "react";
import styled, { useTheme } from "styled-components";
import Menu from "./Menu/Menu";
import content from "config/content.json";

export const Grid = styled.div`
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

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 clamp(1rem, 5vw, 1.5rem);
  height: 64px;
  grid-row: 1 / 2;
  grid-column: 1 / 3;
  color: ${(props) => props.theme.color.text};
  border-bottom: 1px solid ${(props) => props.theme.color.backgroundAlt};
`;

const LayoutUser = ({ children }: { children?: React.ReactNode }) => {
  const token = useToken();
  const theme = useTheme();
  const location = useLocation();

  if (!token) {
    return <LayoutUserSkeleton />;
  }

  return (
    <Grid>
      <Header>
        <Logo to={routes.today.path}>{content.habitBook}</Logo>
        {location.pathname !== routes.today.path && (
          <Button secondary size="xs" href={routes.today.path} as="link">
            <BiCheck size="1.25rem" style={{ marginRight: theme.spacing[1] }} />
            {content.logHabit}
          </Button>
        )}
      </Header>
      <Menu />
      <Main>{children}</Main>
      <AppError />
    </Grid>
  );
};

export default LayoutUser;
