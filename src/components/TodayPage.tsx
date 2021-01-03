import React from "react";
import { useDate } from "../context/DateContext";
import styled from "styled-components";
import DateDisplay from "./DateDisplay";
import HabitList from "./HabitList";
import Container from "./Container";
import { useHabits } from "../context/HabitContext";
import StatusBar from "./StatusBar";

const StyledTodayView = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Subheading = styled.p`
  width: 100%;
  font-size: 1rem;
  max-width: 400px;
  text-align: center;
  margin-bottom: 0.5em;

  span {
    font-weight: bold;
  }
`;

const TodayView: React.FC = () => {
  const date = useDate();
  const habits = useHabits();
  const percentageDone = Math.ceil(
    (habits.score.completedPoints / habits.score.possiblePointsInWeek) * 100
  );
  const percentageDoneString = `${percentageDone}%`;
  return (
    <StyledTodayView>
      <DateDisplay date={date}></DateDisplay>
      <Subheading>
        You've completed <span>{percentageDoneString}</span> of your habits this
        week
      </Subheading>
      <StatusBar width={percentageDoneString}></StatusBar>
      <HabitList habits={habits.data}></HabitList>
    </StyledTodayView>
  );
};

export default TodayView;
