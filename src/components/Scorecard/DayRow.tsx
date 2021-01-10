import React from "react";
import styled from "styled-components";
import HabitStatus from "../HabitStatus";
import { HabitHistoryDay } from "../../types/habit-score";

type DayRowProps = { day: HabitHistoryDay };

const DateCol = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const HabitDoneCol = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DayRow: React.FC<DayRowProps> = ({ day }: DayRowProps): JSX.Element => {
  return (
    <>
      <DateCol>{day.date}</DateCol>
      {day.habits.map((h) => {
        return (
          <HabitDoneCol key={h.id}>
            <HabitStatus done={h.done} size="1.5rem" />
          </HabitDoneCol>
        );
      })}
    </>
  );
};

export default DayRow;
