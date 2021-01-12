import React from "react";
import styled from "styled-components";
import { useHabitHistory } from "../../context/HabitHistoryContext";
import Container from "../Layout/Container";
import ScorecardMonth from "./ScorecardMonth";

const StyledScorecardPage = styled(Container)`
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

const ScorecardPage: React.FC = () => {
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
    <StyledScorecardPage>
      <h2>{habitHistory.data.year}</h2>
      <ContainerGrid>{scorecards}</ContainerGrid>
    </StyledScorecardPage>
  );
};

export default ScorecardPage;
