import { Grid } from "modules/common/Layout/LayoutUser";
import Skeleton from "modules/common/Skeleton";
import React from "react";
import styled, { useTheme } from "styled-components";

const LogoSkeleton = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / 3;
  padding: clamp(1rem, 5vw, 1.5rem);
`;

const MainSkeleton = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 4;
  padding: clamp(1rem, 5vw, 1.5rem);

  @media screen and (max-width: 768px) {
    grid-column: 1 / 3;
    grid-row: 2 / 4;
  }
`;
const MenuSkeleton = styled.div`
  display: grid;
  grid-row-gap: 1rem;
  grid-auto-rows: 1.25rem;
  grid-column: 1 / 2;
  grid-row: 2 / 5;
  padding: clamp(1rem, 5vw, 1.5rem);

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-columns: 1fr;
    grid-auto-rows: auto;
    grid-row-gap: auto;
    grid-column-gap: 1rem;
    grid-column: 1 / 3;
    grid-row: 4 / 5;
    border-top: 1px solid ${(props) => props.theme.color.backgroundAlt};
  }
`;

const LayoutUserSkeleton = () => {
  const theme = useTheme();

  return (
    <Grid>
      <LogoSkeleton>
        <Skeleton size="md" />
      </LogoSkeleton>
      <MenuSkeleton>
        <Skeleton size="sm" />
        <Skeleton size="sm" />
        <Skeleton size="sm" />
        <Skeleton size="sm" />
      </MenuSkeleton>
      <MainSkeleton>
        <Skeleton size="xl" style={{ marginBottom: theme.spacing[2] }} />
        <Skeleton size="lg" style={{ marginBottom: theme.spacing[2] }} />
        <Skeleton size="lg" style={{ marginBottom: theme.spacing[2] }} />
        <Skeleton size="lg" style={{ marginBottom: theme.spacing[2] }} />
        <Skeleton size="lg" style={{ marginBottom: theme.spacing[2] }} />
      </MainSkeleton>
    </Grid>
  );
};

export default LayoutUserSkeleton;
