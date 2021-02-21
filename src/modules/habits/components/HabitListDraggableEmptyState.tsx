import React from "react";
import styled from "styled-components";

const EmptyStateContainer = styled.div`
  background-color: ${(props) => props.theme.color.backgroundAlt};
  padding: 1.5rem;
  border-radius: ${(props) => props.theme.borderRadii[4]};
`;

const HabitListDraggableEmptyState = () => {
  return (
    <EmptyStateContainer>Add a habit, and get to work.</EmptyStateContainer>
  );
};

export default HabitListDraggableEmptyState;
