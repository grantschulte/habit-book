import React from "react";
import { BiCheckCircle } from "react-icons/bi";
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

const HabitLabel = styled.div`
  margin-right: auto;
  margin-left: 1rem;
  font-weight: bold;

  &svg {
    stroke: ${(props) => props.theme.color.primary};
  }
`;

const StyledHabitStatus = styled.div`
  line-height: 0;
  margin-right: 1rem;
`;

const HabitStatus: React.FC<{ habit: Habit }> = ({
  habit,
}: {
  habit: Habit;
}) => {
  const theme = React.useContext(ThemeContext);
  const icon = habit.done ? (
    <BiCheckCircle size="1.75rem" color={theme.color.primary} />
  ) : (
    <BiCheckCircle
      size="1.75rem"
      color={percentageColor(theme.color.background, -30)}
    />
  );

  return <StyledHabitStatus>{icon}</StyledHabitStatus>;
};

const HabitListRow: React.FC<{ habit: Habit }> = ({
  habit,
}: {
  habit: Habit;
}) => {
  const { updateHabit } = useHabits();
  return (
    <StyledHabitListRow done={habit.done} onClick={() => updateHabit(habit)}>
      <HabitLabel>{habit.label}</HabitLabel>
      <HabitStatus habit={habit} />
    </StyledHabitListRow>
  );
};

const HabitList: React.FC<{
  habits: Habit[];
}> = ({ habits }: { habits: Habit[] }) => {
  return (
    <StyledHabitList>
      {habits.map((h) => {
        return <HabitListRow habit={h}></HabitListRow>;
      })}
    </StyledHabitList>
  );
};

export default HabitList;
