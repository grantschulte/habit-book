import routes from "config/routes";
import Button from "modules/common/Button";
import React from "react";
import { BiPlus } from "react-icons/bi";
import styled, { useTheme } from "styled-components";

const EmptyStateContainer = styled.div`
  padding: 1rem;
  background-color: ${(props) => props.theme.color.backgroundAlt};
  border-radius: ${(props) => props.theme.borderRadii[4]};
`;

const TodayEmptyState = () => {
  const theme = useTheme();
  return (
    <EmptyStateContainer>
      <div style={{ marginBottom: theme.spacing[4] }}>
        You don't have any habits for today. Add some habits and mark them done
        each day.
      </div>
      <Button size="md" as="a" href={routes.habits.path}>
        <BiPlus style={{ marginRight: theme.spacing[2] }} size="1.25rem" />
        Add Habits
      </Button>
    </EmptyStateContainer>
  );
};

export default TodayEmptyState;
