import React from "react";
import { BiLike } from "react-icons/bi";
import styled, { ThemeContext } from "styled-components";
import { useHabits } from "../context/HabitContext";
import Habit from "../types/habit";
import { percentageColor } from "../utils/css.utils";

const StyledHabitList = styled.div`
  margin: 1.5rem 0;
  width: 100%;
  max-width: 400px;
`;

const StyledHabitListRow = styled.div<{ done: boolean }>`
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
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
  margin-left: 1rem;
  font-weight: bold;
  color: ${(props) =>
    props.done
      ? percentageColor(props.theme.color.background, -30)
      : props.theme.color.bodyText};
`;

const StyledHabitStatus = styled.div`
  line-height: 0;
  margin-right: 1rem;
`;

const HabitStatus: React.FC<{ done: boolean }> = ({
  done,
}: {
  done: boolean;
}) => {
  const theme = React.useContext(ThemeContext);
  const color = done
    ? theme.color.success
    : percentageColor(theme.color.background, -30);

  return (
    <StyledHabitStatus>
      <BiLike size="1.75rem" color={color} />
    </StyledHabitStatus>
  );
};

const HabitListRow: React.FC<{ habit: Habit }> = ({
  habit,
}: {
  habit: Habit;
}) => {
  const { updateHabit } = useHabits();
  return (
    <StyledHabitListRow done={habit.done} onClick={() => updateHabit(habit)}>
      <HabitLabel done={habit.done}>{habit.label}</HabitLabel>
      <HabitStatus done={habit.done} />
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
