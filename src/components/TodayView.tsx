import React from "react";
import { useDate } from "../context/date-context";
import styled from "styled-components";
import DateDisplay from "./DateDisplay";
import HabitList from "./HabitList";
import { Container } from "./Container";
import Habit from "../types/habit";

const StyledTodayView = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const TodayView: React.FC = () => {
  const date = useDate();
  const habits: Habit[] | [] = [];

  return (
    <StyledTodayView>
      <DateDisplay date={date}></DateDisplay>
      <HabitList habits={habits}></HabitList>
    </StyledTodayView>
  );
};

export default TodayView;
