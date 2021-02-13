import HistoryTableHeaderRow from "modules/dashboard/components/HistoryTable/HabitHistoryHeaderRow";
import HistoryTableRow from "modules/dashboard/components/HistoryTable/HistoryTableRow";
import React from "react";
import styled from "styled-components";
import { HistoryTableProps } from "types/habit-history";

const Container = styled.div`
  overflow-x: scroll;
  background-color: ${({ theme }) => theme.color.backgroundAlt};
  padding: 0.5rem;
  border-radius: ${(props) => props.theme.borderRadii[4]};
`;

const Table = styled.table`
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
