import React from "react";
import { useDate } from "../../context/DateContext";
import styled from "styled-components";
import DateDisplay from "./DateDisplay";
import HabitList from "./HabitList";
import Container from "../Layout/Container";
import { useHabits } from "../../context/HabitContext";

const StyledTodayView = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  width: 100%;
  height: 100%;
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
