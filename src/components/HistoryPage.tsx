import React from "react";
import styled from "styled-components";
import { useHabitHistory } from "../context/HabitHistoryContext";
import Container from "./Container";

const StyledHistoryPage = styled(Container)`
  width: 100%;
`;

const HistoryGrid = styled.div<{ habitCols: number }>`
  display: grid;
  margin-bottom: 2rem;
  grid-gap: 1rem;
  grid-template-columns: ${(props) =>
    `3fr repeat(${props.habitCols || 3}, 1fr)`};
`;

const HistoryPage: React.FC = () => {
  const habitHistory = useHabitHistory();

  const months = habitHistory.data.months.map((m) => {
    const days = m.days.map((d) => {
      const habits = d.habits.map((h) => {
        return <div>{h.done.toString()}</div>;
      });

      return (
        <>
          <div>{d.date}</div>
          {habits}
        </>
      );
    });

    return (
      <HistoryGrid habitCols={3}>
        <div>
          {m.name} - {m.score.percentage}
        </div>
        <div>Habit A</div>
        <div>Habit B</div>
        <div>Habit C</div>
        {days}
      </HistoryGrid>
    );
  });

  return (
    <StyledHistoryPage>
      <div>
        <h3>{habitHistory.data.year}</h3>
        {months}
      </div>
    </StyledHistoryPage>
  );
};

export default HistoryPage;
