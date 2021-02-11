import React from "react";
import styled from "styled-components";
import { TR } from "modules/dashboard/components/HistoryTable/HistoryTable";
import DoneIcon from "modules/today/components/DoneIcon";
import { HistoryDay } from "types/habit-history";

const TD = styled.td`
  padding: 0.5rem;
  text-align: center;
  width: calc(100% / 9);

  &:first-child {
    text-align: left;
  }
`;

const HistoryTableRow = ({
  events,
  habit,
}: {
  events: HistoryDay[];
  habit: string;
}) => (
  <TR>
    <TD>{habit}</TD>
    {events.map((ev) => {
      const h = ev.habits.find((h) => h.name === habit);

      if (!h) {
        return <TD>-</TD>;
      }

      return (
        <TD>
          <DoneIcon $isDone={h.done} size="1.25rem" />
        </TD>
      );
    })}
  </TR>
);

export default HistoryTableRow;
