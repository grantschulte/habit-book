import React from "react";
import styled from "styled-components";
import { useHabitHistory } from "context/HabitHistoryContext";
import ScorecardMonth from "./components/ScorecardMonth";
import Page from "modules/common/Page";

const ScorecardGrid = styled.div`
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
    <Page>
      <h2>{habitHistory.data.year}</h2>
      <ScorecardGrid>{scorecards}</ScorecardGrid>
    </Page>
  );
};

export default Scorecard;
