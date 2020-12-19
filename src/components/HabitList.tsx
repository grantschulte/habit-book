import React from "react";
import styled from "styled-components";
import Habit from "../types/habit";

const StyledHabitList = styled.div`
  margin: 1.5rem 0;
`;

const HabitList: React.FC<{
  habits: Habit[];
  updateHabit: (habit: Habit) => void;
}> = ({
  habits,
  updateHabit,
}: {
  habits: Habit[];
  updateHabit: (habit: Habit) => void;
}) => {
  return (
    <StyledHabitList>
      {habits.map((h) => {
        return <div>{h.label}</div>;
      })}
    </StyledHabitList>
  );
};

export default HabitList;
