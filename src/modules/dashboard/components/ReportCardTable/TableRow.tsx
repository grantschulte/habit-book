import dayjs from "dayjs";
import { StatsDay } from "modules/dashboard/components/ReportCardTable/ReportCardTable";
import DoneIcon from "modules/today/components/DoneIcon";
import React from "react";
import styled from "styled-components";
import { Habit } from "types";

const TR = styled.tr`
  &:nth-of-type(odd) td {
    background-color: ${(props) => props.theme.color.background};
  }
`;

const TD = styled.td`
  padding: var(--cell-padding);
  vertical-align: middle;
  border: 1px solid ${(props) => props.theme.color.background};
  text-overflow: ellipsis;
  overflow: hidden;

  &:first-child {
    text-align: left;
  }
`;

interface TableRowProps {
  statsDay: StatsDay;
  habits: Habit[];
}
const TableRow: React.FC<TableRowProps> = ({ statsDay, habits }) => {
  const date = dayjs(statsDay.day).format("ddd MM/D");

  return (
    <TR>
      <TD>{date}</TD>
      {habits.map((h, i) => {
        const e = statsDay.events.find((e) => e.name === h.name);
        return (
          <TD key={`${statsDay.day}-${i}-${h.name}`}>
            {e ? <DoneIcon $isDone={e.done} size="1rem" /> : "—"}
          </TD>
        );
      })}
      <TD>{statsDay.score}</TD>
    </TR>
  );
};

export default TableRow;
