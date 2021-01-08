import React from "react";
import styled from "styled-components";
import { percentageColor } from "../utils/css.utils";
import { useHabitHistory } from "../context/HabitHistoryContext";
import Container from "./Container";
import HabitStatus from "./HabitStatus";

const StyledHistoryPage = styled(Container)`
  width: 100%;

  h2 {
    margin-top: 0;
  }
`;

const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;

  @media screen and (max-width: 480px) {
    grid-gap: 1rem;
  }
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

const HabitDoneCol = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DateCol = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const HistoryPage: React.FC = () => {
  const habitHistory = useHabitHistory();

  const habitHeadings = habitHistory.data.habits.map((h) => {
    return (
      <HabitColHeading>
        <span>{h.label}</span>
      </HabitColHeading>
    );
  });

  const months = habitHistory.data.months.map((m) => {
    const days = m.days.map((d) => {
      const habits = d.habits.map((h) => {
        return (
          <HabitDoneCol>
            <HabitStatus done={h.done} size="1.5rem" />
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
          {habitHeadings}
          {days}
        </HistoryGrid>
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
