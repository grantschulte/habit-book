import React from "react";
import { useDate } from "../context/DateContext";
import styled from "styled-components";
import DateDisplay from "./DateDisplay";
import HabitList from "./HabitList";
import { Container } from "./Container";
import { useHabits } from "../context/HabitContext";

const StyledTodayView = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const TodayView: React.FC = () => {
  const date = useDate();
  const habits = useHabits();

  return (
    <StyledTodayView>
      <DateDisplay date={date}></DateDisplay>
      <HabitList habits={habits.data}></HabitList>
    </StyledTodayView>
  );
};

export default TodayView;
