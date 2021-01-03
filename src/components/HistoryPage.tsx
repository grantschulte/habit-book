import React from "react";
import styled from "styled-components";
import { useHabitHistory } from "../context/HabitHistoryContext";
import Container from "./Container";

const StyledHistoryPage = styled(Container)``;

const HistoryPage: React.FC = () => {
  const habitHistory = useHabitHistory();
  console.log(habitHistory);
  return <StyledHistoryPage>History</StyledHistoryPage>;
};

export default HistoryPage;
