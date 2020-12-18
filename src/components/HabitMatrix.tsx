import React from "react";
import styled from "styled-components";

const StyledHabitMatrix = styled.div`
  margin: 1rem;
  margin-top: 0;
  margin-left: 0;
  background: #efefef;
  border-radius: 4px;
  flex: 1;
`;

function HabitMatrix(): JSX.Element {
  return <StyledHabitMatrix></StyledHabitMatrix>;
}

export default HabitMatrix;
