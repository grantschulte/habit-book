import React from "react";
import styled from "styled-components";
import { percentageColor } from "../../utils/css.utils";
import DayRow from "./DayRow";
import Habit from "../../types/habit";
import { HabitHistoryMonth } from "../../types/habit-score";

const ScorecardTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.color.bodyText};

  .monthHeading {
    margin-right: auto;
  }
`;

const ScorecardGrid = styled.div<{ habitCols: number }>`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: ${(props) =>
    `1fr repeat(${props.habitCols || 3}, minmax(60px, 100px))`};
`;

const StyledScorecardMonth = styled.div`
  border: 2px solid
    ${(props) => percentageColor(props.theme.color.background, -10)};
  padding: 0.5rem 1.5rem 1.5rem;
  border-radius: 0.5rem;
`;

const HabitColHeading = styled.div`
  margin: 2rem 0 3rem;

  span {
    display: block;
    text-align: center;
    font-size: 0.6rem;
    transform: rotate(-45deg);
    text-transform: uppercase;
    letter-spacing: 4px;
    font-weight: bold;
  }
`;

const ScorecardMonth: React.FC<{
  month: HabitHistoryMonth;
  habits: Habit[];
}> = ({ month, habits }: { month: HabitHistoryMonth; habits: Habit[] }) => {
  const columnHeadings = habits.map((h) => {
    return (
      <HabitColHeading key={h.id}>
        <span>{h.label}</span>
      </HabitColHeading>
    );
  });

  const days = month.days.map((d) => {
    return <DayRow day={d} key={d.date.toString()} />;
  });

  return (
    <StyledScorecardMonth>
      <ScorecardTop>
        <h3 className="monthHeading">{month.name}</h3>
        <span>{month.score.percentage}</span>
      </ScorecardTop>
      <ScorecardGrid habitCols={3}>
        <div>&nbsp;</div>
        {columnHeadings}
        {days}
      </ScorecardGrid>
    </StyledScorecardMonth>
  );
};

export default ScorecardMonth;
