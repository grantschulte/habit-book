import React from "react";
import styled from "styled-components";
import { useHabits } from "../context/HabitContext";
import Habit from "../types/habit";
import { percentageColor } from "../utils/css.utils";
import HabitStatus from "./HabitStatus";

const StyledHabitList = styled.div`
  margin: 1.5rem 0;
  width: 100%;
  max-width: 400px;
`;

const StyledHabitListRow = styled.div<{ done: boolean }>`
  display: flex;
  width: 100%;
  height: 50px;
  margin-bottom: 0.5rem;
  background-color: ${(props) =>
    percentageColor(props.theme.color.background, -7)};
  border-radius: 2px;
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
  font-weight: bold;
  color: ${(props) =>
    props.done
      ? percentageColor(props.theme.color.background, -30)
      : props.theme.color.bodyText};
`;

const ListContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 1rem;
`;

const HabitListRow: React.FC<{ habit: Habit }> = ({
  habit,
}: {
  habit: Habit;
}) => {
  const { updateHabit } = useHabits();
  return (
    <StyledHabitListRow done={habit.done} onClick={() => updateHabit(habit)}>
      <ListContainer>
        <HabitLabel done={habit.done}>{habit.label}</HabitLabel>
        <HabitStatus done={habit.done} />
      </ListContainer>
    </StyledHabitListRow>
  );
};

type SortHabitFn = (a: Habit, b: Habit) => number;

const sortHabitsByDoneState: SortHabitFn = (a: Habit, b: Habit) => {
  if (a.done) {
    return 0;
  } else {
    return -1;
  }
};

const HabitList: React.FC<{
  habits: Habit[];
}> = ({ habits }: { habits: Habit[] }) => {
  const sorted = habits.sort(sortHabitsByDoneState);
  return (
    <StyledHabitList>
      {sorted.map((h) => {
        return <HabitListRow habit={h} key={h.id.toString()}></HabitListRow>;
      })}
    </StyledHabitList>
  );
};

export default HabitList;
