import React from "react";
import styled from "styled-components";
import HistoryTableHeaderRow from "modules/dashboard/components/HistoryTable/HabitHistoryHeaderRow";
import HistoryTableRow from "modules/dashboard/components/HistoryTable/HistoryTableRow";

export interface HistoryDay {
  id: string;
  date: string;
  name: string;
  habits: HabitDayEvent[];
}

export interface HabitDayEvent {
  id: string;
  date: string;
  name: string;
  done: boolean;
}

export interface HabitHistoryTable {
  from: string;
  to: string;
  habits: Array<string>;
  events: HistoryDay[];
}

export interface HistoryTableProps {
  data: HabitHistoryTable;
}

const Container = styled.div`
  overflow-x: scroll;
  background-color: ${({ theme }) => theme.color.backgroundAlt};
  padding: 2px;
  border-color: ${(props) => props.theme.color.border};
`;

const Table = styled.table`
  width: 100%;
  border: none;
  border-collapse: collapse;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.color.text};
`;

export const TR = styled.tr``;
const THEAD = styled.thead``;
const TBODY = styled.tbody`
  ${TR} {
    &:nth-child(odd) {
      background-color: ${({ theme }) => theme.color.background};
    }
  }
`;

const HistoryTable = ({ data }: HistoryTableProps) => {
  return (
    <Container>
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
    </Container>
  );
};

export default HistoryTable;
