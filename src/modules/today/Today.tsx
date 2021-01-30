import React from "react";
import styled from "styled-components";
import { useDate } from "context/DateContext";
import Container from "modules/common/Container";
import DateDisplay from "./components/DateDisplay";
import TodayHabitList from "./components/TodayHabitList";

const StyledToday = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  width: 100%;
  height: 100%;
`;

const Today: React.FC = () => {
  const date = useDate();
  return (
    <StyledToday>
      <DateDisplay date={date}></DateDisplay>
      <TodayHabitList />
    </StyledToday>
  );
};

export default Today;
