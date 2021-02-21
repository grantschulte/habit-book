import useDrag from "hooks/useDrag";
import useHabits from "hooks/useHabits";
import {
  DragDropContext,
  Droppable,
  DroppableProvided,
  DropResult,
} from "lib/DragNDrop";
import HabitListDraggableEmptyState from "modules/habits/components/HabitListDraggableEmptyState";
import HabitListDraggableSkeleton from "modules/habits/HabitListDraggableSkeleton";
import React, { useCallback } from "react";
import styled from "styled-components";
import { Habit } from "types";
import DraggableItem from "./DraggableItem/DraggableItem";

const DraggableItemsContainer = styled.div`
  background-color: ${(props) => props.theme.color.backgroundAlt};
  padding: 0.5rem;
  border-radius: ${(props) => props.theme.borderRadii[4]};
`;

const renderItems = (habits: Habit[]) => {
  return habits.map((habit, index) => {
    return <DraggableItem habit={habit} index={index} key={habit.id} />;
  });
};

const HabitListDraggable: React.FC = () => {
  const { allHabits, status } = useHabits();
  const { reorder } = useDrag();

  const onDragEnd = useCallback(
    ({ destination, source }: DropResult) => {
      reorder(destination, source);
    },
    [reorder]
  );

  if (status === "fetching") {
    return <HabitListDraggableSkeleton />;
  }

  if (status === "success" && allHabits.length === 0) {
    return <HabitListDraggableEmptyState />;
  }

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="habit-list-droppable">
          {(provided: DroppableProvided) => (
            <DraggableItemsContainer
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <div>{renderItems(allHabits)}</div>
              {provided.placeholder}
            </DraggableItemsContainer>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default HabitListDraggable;
