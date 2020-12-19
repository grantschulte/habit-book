import React from "react";
import { useDate } from "../context/date-context";
import styled from "styled-components";
import DateDisplay from "./DateDisplay";

const StyledTodayView = styled.div``;

const TodayView: React.FC = () => {
  const date = useDate();
  return (
    <StyledTodayView>
      <DateDisplay date={date}></DateDisplay>
    </StyledTodayView>
  );
};

export default TodayView;
