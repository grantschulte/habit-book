import React from "react";
import styled from "styled-components";
import Habit from "../../types/habit";
import HabitItem from "./HabitItem";

const StyledHabitList = styled.div`
  margin: 1.5rem 0;
  width: 100%;
`;

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
        return <HabitItem habit={h} key={h.id.toString()}></HabitItem>;
      })}
    </StyledHabitList>
  );
};

export default HabitList;
