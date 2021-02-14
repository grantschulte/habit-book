import React from "react";
import styled from "styled-components";
import { useHabits } from "context/HabitContext";

const StyledStatusBar = styled.div`
  position: relative;
  margin-bottom: 1rem;
  height: 12px;
  width: 100%;
  overflow: hidden;
  background-color: ${(props) => props.theme.color.backgroundAlt};
`;

const BarInner = styled.div<{ width: string }>`
  position: absolute;
  width: ${(props) => props.width || "0%"};
  top: 0;
  bottom: 0;
  left: 0;
  background-color: ${(props) => props.theme.color.success};
  transition: 200ms width ease-out;
`;

const StatusBar = () => {
  const { state } = useHabits();
  const doneCount = state.habits.reduce((a, b) => {
    return b.done ? a + 1 : a;
  }, 0);
  const percentageDone = Math.ceil((doneCount / state.habits.length) * 100);
  const percentageDoneString = `${percentageDone}%`;

  return (
    <StyledStatusBar>
      <BarInner width={percentageDoneString} />
    </StyledStatusBar>
  );
};

export default StatusBar;
