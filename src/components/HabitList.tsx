import React from "react";
import styled from "styled-components";
import Habit from "../types/habit";

const StyledHabitList = styled.div`
  margin: 1.5rem 0;
`;

const HabitList: React.FC<{ habits: Habit[] | [] }> = ({
  habits,
}: {
  habits: Habit[] | [];
}) => {
  return <StyledHabitList></StyledHabitList>;
};

export default HabitList;
