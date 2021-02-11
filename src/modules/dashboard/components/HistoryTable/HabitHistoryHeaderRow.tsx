import React from "react";
import styled from "styled-components";
import { TR } from "modules/dashboard/components/HistoryTable/HistoryTable";
import { HistoryDay } from "types/habit-history";

const StyledTH = styled.th`
  padding: 0.5rem;
  text-align: center;
  font-size: 0.875rem;
`;
const TH = ({
  day,
  children,
}: {
  day?: HistoryDay;
  children?: React.ReactNode;
}) => <StyledTH>{day ? day.name : children}</StyledTH>;

const HistoryTableHeaderRow = ({ events }: { events: HistoryDay[] }) => (
  <TR>
    <TH></TH>
    {events.map((day) => (
      <TH day={day} key={day.date} />
    ))}
  </TR>
);

export default HistoryTableHeaderRow;
