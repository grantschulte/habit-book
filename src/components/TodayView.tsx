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

const Subheading = styled.p`
  width: 100%;
  max-width: 400px;
  text-align: center;
  font-style: italic;
  padding: 1rem 0;
  margin-bottom: 0;
`;

const TodayView: React.FC = () => {
  const date = useDate();
  const habits = useHabits();

  return (
    <StyledTodayView>
      <DateDisplay date={date}></DateDisplay>
      <Subheading>{habits.message}</Subheading>
      <HabitList habits={habits.data}></HabitList>
    </StyledTodayView>
  );
};

export default TodayView;
