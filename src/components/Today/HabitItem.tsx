import React from "react";
import styled from "styled-components";
import { useHabits } from "../../context/HabitContext";
import Habit from "../../types/habit";
import { percentageColor } from "../../utils/css.utils";
import HabitDoneStatus from "./HabitDoneStatus";

const HabitItemFlex = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 1.25rem;
`;

const StyledHabitItem = styled.div<{ done: boolean }>`
  display: flex;
  width: 100%;
  height: 64px;
  margin-bottom: 0.5rem;
  background-color: ${(props) =>
    percentageColor(props.theme.color.background, -7)};
  /* border: 3px solid ${(props) => props.theme.color.bodyText}; */
  border-radius: 10px;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background-color: ${(props) =>
      percentageColor(props.theme.color.background, -15)};
  }
`;

const HabitLabel = styled.div<{ done: boolean }>`
  margin-right: auto;
  font-size: clamp(1.25rem, 3vw, 1.25rem);
  font-weight: bold;
  color: ${(props) =>
    props.done
      ? percentageColor(props.theme.color.background, -30)
      : props.theme.color.bodyText};
`;

const HabitItem: React.FC<{ habit: Habit }> = ({ habit }: { habit: Habit }) => {
  const { updateHabit } = useHabits();
  return (
    <StyledHabitItem done={habit.done} onClick={() => updateHabit(habit)}>
      <HabitItemFlex>
        <HabitLabel done={habit.done}>{habit.label}</HabitLabel>
        <HabitDoneStatus done={habit.done} />
      </HabitItemFlex>
    </StyledHabitItem>
  );
};

export default HabitItem;
