import HistoryTableHeaderRow from "modules/dashboard/components/HistoryTable/HabitHistoryHeaderRow";
import HistoryTableRow from "modules/dashboard/components/HistoryTable/HistoryTableRow";
import React from "react";
import styled from "styled-components";
import { HistoryTableProps } from "types/habit-history";

const Table = styled.table`
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  width: 100%;
  border: none;
  border-collapse: collapse;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.color.text};
`;

export const TR = styled.tr``;
const THEAD = styled.thead``;
const TBODY = styled.tbody`
  ${TR} {
    &:nth-child(odd) {
      background-color: ${({ theme }) => theme.color.tableBackground};
    }
  }
`;

const HistoryTable = ({ data }: HistoryTableProps) => {
  return (
    <Table>
      <THEAD>
        <HistoryTableHeaderRow events={data.events} />
      </THEAD>
      <TBODY>
        {data.habits.map((habit) => (
          <HistoryTableRow events={data.events} habit={habit} key={habit} />
        ))}
      </TBODY>
    </Table>
  );
};

export default HistoryTable;
