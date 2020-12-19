import React from "react";
import { useDate } from "../context/date-context";
import styled from "styled-components";

const StyledTodayView = styled.div``;

const DateComponent = styled.div``;

const StyledHabitList = styled.div``;

const TodayView: React.FC = () => {
  const date = useDate();
  return <StyledTodayView></StyledTodayView>;
};

export default TodayView;
