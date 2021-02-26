import OverflowContainer from "modules/dashboard/components/ReportCardTable/OverflowContainer";
import TH from "modules/dashboard/components/ReportCardTable/TableHeading";
import TableRow from "modules/dashboard/components/ReportCardTable/TableRow";
import React from "react";
import styled from "styled-components";
import { Habit } from "types";

export interface StatsEvent {
  done: boolean;
  name: string;
}

export interface StatsDay {
  day: string;
  score: string;
  events: StatsEvent[];
}

interface ReportCardTableProps {
  stats: {
    days: StatsDay[];
    habits: Habit[];
  };
}

const TableContainer = styled.div`
  position: relative;
`;

const Table = styled.table<{ items: number }>`
  --cell-padding: 0.5rem;
  width: 100%;
  min-width: 480px;
  font-size: 0.75rem;
  text-align: center;
  table-layout: fixed;
  border-collapse: collapse;
  background-color: ${(props) => props.theme.color.backgroundAlt};
`;

const TableEmptyState = styled.p`
  margin: 0;
  margin-bottom: 1rem;
  line-height: 1.25;
  font-size: 0.875rem;
  color: ${(props) => props.theme.color.grey[800]};
  font-style: italic;
`;

const ReportCardTable: React.FC<ReportCardTableProps> = ({ stats }) => {
  const { days, habits } = stats;

  if (days.length === 0) {
    return (
      <TableEmptyState>
        Your 7-day habit history will show up here when you create and complete
        habits.
      </TableEmptyState>
    );
  }

  return (
    <TableContainer>
      <OverflowContainer>
        <Table items={habits.length}>
          <thead>
            <tr>
              <TH>&nbsp;</TH>
              {habits.map((h) => (
                <TH key={h.name}>{h.name}</TH>
              ))}
              <TH>Score</TH>
            </tr>
          </thead>
          <tbody>
            {days.map((d: StatsDay) => (
              <TableRow statsDay={d} habits={habits} key={d.day} />
            ))}
          </tbody>
        </Table>
      </OverflowContainer>
    </TableContainer>
  );
};

export default ReportCardTable;
