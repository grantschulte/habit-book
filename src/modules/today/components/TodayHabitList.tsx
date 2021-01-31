import React, { useReducer } from "react";
import styled from "styled-components";
import HabitItem from "modules/common/HabitItem/HabitItem";
import { HabitLabel } from "modules/common/HabitItem/HabitLabel";
import { toggleHabit } from "state/habits/habit.actions";
import { habitsReducer, initHabitsState } from "state/habits/habit.reducer";
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

const HabitList: React.FC = () => {
  const [state, dispatch] = useReducer(habitsReducer, initHabitsState);
  // const sorted = habits.sort(sortHabitsByDoneState);

  return (
    <StyledHabitList>
      {state.habits.map((h) => {
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
