import useHabitEventUpdate from "hooks/useEditHabitEvent";
import { HabitLabel } from "modules/common/HabitItem/HabitLabel";
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
  transition: border-color 200ms ease, color 200ms ease;

  &:last-child {
    margin-bottom: 0;
  }
`;

const HabitItem: React.FC<HabitItemProps> = ({
  habitEvent,
}: HabitItemProps) => {
  const { mutate, isLoading } = useHabitEventUpdate();

  const toggleHabitEvent = () => {
    mutate(habitEvent.id);
  };

  return (
    <HabitItemContainer onClick={toggleHabitEvent} done={habitEvent.done}>
      <HabitItemInner>
        <HabitLabel $isDone={habitEvent.done}>
          {habitEvent.habit.name}
        </HabitLabel>
        {isLoading ? (
          <LoadingIcon size="1.25rem" />
        ) : (
          <DoneIcon $isDone={habitEvent.done} size="1.5rem" />
        )}
      </HabitItemInner>
    </HabitItemContainer>
  );
};

export default HabitItem;
