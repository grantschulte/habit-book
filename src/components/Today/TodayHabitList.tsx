import React from "react";
import styled from "styled-components";
import { useHabits } from "../../context/HabitContext";
import Habit from "../../types/habit";
import HabitItem from "../Habit/HabitItem";
import { HabitLabel } from "../Habit/HabitLabel";
import DoneIcon from "./DoneIcon";

const StyledHabitList = styled.div`
  margin: 1.5rem 0;
  width: 100%;
`;

// type SortHabitFn = (a: Habit, b: Habit) => number;

// const sortHabitsByDoneState: SortHabitFn = (a: Habit, b: Habit) => {
//   if (a.done) {
//     return 0;
//   } else {
//     return -1;
//   }
// };

const HabitList: React.FC<{
  habits: Habit[];
}> = ({ habits }: { habits: Habit[] }) => {
  const { dispatch, toggleHabit } = useHabits();
  // const sorted = habits.sort(sortHabitsByDoneState);

  return (
    <StyledHabitList>
      {habits.map((h) => {
        return (
          <HabitItem
            isDone={h.done}
            label={h.label}
            key={h.id.toString()}
            Icon={DoneIcon}
            onClick={() => {
              dispatch(toggleHabit(h));
            }}
          >
            <DoneIcon $isDone={h.done} size="1.75rem" />
            <HabitLabel $isDone={h.done}>{h.label}</HabitLabel>
          </HabitItem>
        );
      })}
    </StyledHabitList>
  );
};

export default HabitList;
