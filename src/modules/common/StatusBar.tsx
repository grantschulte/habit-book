import React, { useReducer } from "react";
import styled from "styled-components";
import { percentageColor } from "utils/css.utils";
import { habitsReducer, initHabitsState } from "state/habits/habit.reducer";

const StyledStatusBar = styled.div`
  position: relative;
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  background-color: ${(props) =>
    percentageColor(props.theme.color.background, -7)};
  overflow: hidden;
`;

const BarInner = styled.div<{ width: string }>`
  position: absolute;
  width: ${(props) => props.width || "0%"};
  top: 0;
  bottom: 0;
  left: 0;
  background-color: ${(props) => props.theme.color.success};
  transition: 200ms width ease-in-out;
`;

const StatusBar: React.FC<{ width?: string }> = ({
  width,
}: {
  width?: string;
}) => {
  const [habits] = useReducer(habitsReducer, initHabitsState);

  if (!habits.score) {
    return null;
  }

  const percentageDone = Math.ceil(
    (habits.score.completedPoints / habits.score.possiblePointsInWeek) * 100
  );

  const percentageDoneString = `${percentageDone}%`;

  return (
    <StyledStatusBar>
      <BarInner width={width || percentageDoneString} />
    </StyledStatusBar>
  );
};

export default StatusBar;
