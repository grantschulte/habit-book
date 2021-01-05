import React from "react";
import styled from "styled-components";
import { percentageColor } from "../utils/css.utils";
import { useHabitHistory } from "../context/HabitHistoryContext";
import Container from "./Container";
import HabitStatus from "./HabitStatus";

const StyledHistoryPage = styled(Container)`
  width: 100%;
`;

const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
`;

const HeadingRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.color.bodyText};

  .monthHeading {
    margin-right: auto;
  }
`;

const HistoryGrid = styled.div<{ habitCols: number }>`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: ${(props) =>
    `1fr repeat(${props.habitCols || 3}, 1fr)`};
`;

const HistorySection = styled.div`
  background-color: ${(props) =>
    percentageColor(props.theme.color.background, -7)};
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
`;

const HabitColHeading = styled.div`
  font-size: 0.75rem;
  transform: rotate(-45deg);
  margin: 2rem 0 3.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
`;

const HabitDoneCol = styled.div`
  text-align: center;
`;

const DateCol = styled.div`
  /* font-weight: bold */
`;

const HistoryPage: React.FC = () => {
  const habitHistory = useHabitHistory();

  const months = habitHistory.data.months.map((m) => {
    const days = m.days.map((d) => {
      const habits = d.habits.map((h) => {
        return (
          <HabitDoneCol>
            <HabitStatus done={h.done} size="1rem" />
          </HabitDoneCol>
        );
      });

      return (
        <>
          <DateCol>{d.date}</DateCol>
          {habits}
        </>
      );
    });

    return (
      <HistorySection>
        <HeadingRow>
          <h3 className="monthHeading">{m.name}</h3>
          <span>{m.score.percentage}</span>
        </HeadingRow>
        <HistoryGrid habitCols={3}>
          <div></div>
          <HabitColHeading>Pushups</HabitColHeading>
          <HabitColHeading>Meditation</HabitColHeading>
          <HabitColHeading>Cooking</HabitColHeading>
        </HistoryGrid>
        <HistoryGrid habitCols={3}>{days}</HistoryGrid>
      </HistorySection>
    );
  });

  return (
    <StyledHistoryPage>
      <h2>{habitHistory.data.year}</h2>
      <ContainerGrid>{months}</ContainerGrid>
    </StyledHistoryPage>
  );
};

export default HistoryPage;
