import React from "react";
import styled from "styled-components";
import { useHabitHistory } from "context/HabitHistoryContext";
import Container from "modules/common/Container";
import ScorecardMonth from "./components/ScorecardMonth";

const StyledScorecard = styled(Container)`
  width: 100%;

  h2 {
    margin-top: 0;
    color: ${(props) => props.theme.color.secondary};
  }
`;

const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 2rem;

  @media screen and (max-width: 480px) {
    grid-gap: 1rem;
  }
`;

const Scorecard: React.FC = () => {
  const habitHistory = useHabitHistory();

  const scorecards = habitHistory.data.months.map((m) => {
    return (
      <ScorecardMonth
        key={m.name}
        month={m}
        habits={habitHistory.data.habits}
      />
    );
  });

  return (
    <StyledScorecard>
      <h2>{habitHistory.data.year}</h2>
      <ContainerGrid>{scorecards}</ContainerGrid>
    </StyledScorecard>
  );
};

export default Scorecard;
