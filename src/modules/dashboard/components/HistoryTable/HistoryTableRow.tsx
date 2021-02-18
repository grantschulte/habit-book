import React from "react";
import styled from "styled-components";
import { TR } from "modules/dashboard/components/HistoryTable/HistoryTable";
import DoneIcon from "modules/today/components/DoneIcon";
import { HistoryDay } from "../HistoryTable/HistoryTable";

const TD = styled.td`
  padding: 0.5rem 0.25rem;
  text-align: center;
  width: calc(100% / 9);

  &:first-child {
    text-align: left;
    padding-left: 0.5rem;
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
        return <TD key={`${habit}-${ev.id}`}>-</TD>;
      }

      return (
        <TD key={h.id}>
          <DoneIcon $isDone={h.done} size="1rem" />
        </TD>
      );
    })}
  </TR>
);

export default HistoryTableRow;
