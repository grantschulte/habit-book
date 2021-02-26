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
import { orderHabits, setOrder } from "utils/habit-order";
import DraggableItem from "./DraggableItem/DraggableItem";

const DraggableItemsContainer = styled.div`
  background-color: ${(props) => props.theme.color.backgroundAlt};
  padding: 0.5rem;
  border-radius: ${(props) => props.theme.borderRadii[4]};
`;

const renderItems = (habits: Habit[] | undefined) => {
  if (!habits) return null;
  const orderedHabits = orderHabits(habits);
  return orderedHabits.map((habit, index) => {
    return <DraggableItem habit={habit} index={index} key={habit.id} />;
  });
};

const HabitListDraggable: React.FC = () => {
  const { data, isLoading, isSuccess } = useHabits();

  const onDragEnd = useCallback(
    ({ destination, source }: DropResult) => {
      setOrder(destination, source, data);
    },
    [data]
  );

  if (isLoading) {
    return <HabitListDraggableSkeleton />;
  }

  if (isSuccess && data?.length === 0) {
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
              <div>{renderItems(data)}</div>
              {provided.placeholder}
            </DraggableItemsContainer>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default HabitListDraggable;
