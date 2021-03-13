import useHabitEventUpdate from "hooks/useEditHabitEvent";
import LoadingIcon from "modules/common/LoadingIcon";
import DoneIcon from "modules/today/components/DoneIcon";
import React from "react";
import styled from "styled-components";
import { HabitEvent } from "types";

type HabitItemProps = {
  habitEvent: HabitEvent;
};

const HabitItemInner = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 1rem;
`;

const HabitItemContainer = styled.div<{ done: boolean | undefined }>`
  display: flex;
  width: 100%;
  height: 64px;
  margin-bottom: 0.5rem;
  background-color: ${(props) => props.theme.color.background};
  color: ${(props) =>
    props.done ? props.theme.color.success : props.theme.color.text};
  border: 2px solid;
  border-color: ${(props) =>
    props.done ? props.theme.color.success : props.theme.color.border};
  border-radius: ${(props) => props.theme.borderRadii[4]};
  transition: border-color 200ms ease, color 200ms ease;

  &:last-child {
    margin-bottom: 0;
  }
`;

const HabitLabel = styled.div<{
  $isDone?: boolean;
  contentEditable?: boolean;
}>`
  flex-grow: 1;
  font-weight: bold;
  font-size: 1rem;
`;

const HabitItem: React.FC<HabitItemProps> = ({
  habitEvent,
}: HabitItemProps) => {
  const { mutate, isLoading } = useHabitEventUpdate();

  const toggleHabitEvent = () => {
    mutate(habitEvent.id);
  };

  return (
    <HabitItemContainer
      onClick={toggleHabitEvent}
      done={habitEvent.done}
      data-testid="habit-item-container"
    >
      <HabitItemInner>
        <HabitLabel $isDone={habitEvent.done}>
          {habitEvent.habit.name}
        </HabitLabel>
        {isLoading ? (
          <LoadingIcon size="1.25rem" data-testid="habit-item-loading-icon" />
        ) : (
          <DoneIcon
            $isDone={habitEvent.done}
            size="1.5rem"
            data-testid="habit-item-done-icon"
          />
        )}
      </HabitItemInner>
    </HabitItemContainer>
  );
};

export default HabitItem;
