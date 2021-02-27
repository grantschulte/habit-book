import React from "react";
import styled from "styled-components";
import content from "config/content.json";

const EmptyStateContainer = styled.div`
  background-color: ${(props) => props.theme.color.backgroundAlt};
  padding: 1.5rem;
  border-radius: ${(props) => props.theme.borderRadii[4]};
`;

const HabitListDraggableEmptyState = () => {
  return <EmptyStateContainer>{content.habitListEmpty}</EmptyStateContainer>;
};

export default HabitListDraggableEmptyState;
