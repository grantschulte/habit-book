import React from "react";
import styled from "styled-components";
import HabitMatrix from "./HabitMatrix";
import HabitWeekSidebar from "./HabitWeekSidebar";

const StyledHabitDashboard = styled.div`
  display: flex;
  width: 100%;
`;

function HabitDashboard(): JSX.Element {
  return (
    <StyledHabitDashboard>
      <HabitWeekSidebar></HabitWeekSidebar>
      <HabitMatrix></HabitMatrix>
    </StyledHabitDashboard>
  );
}

export default HabitDashboard;
