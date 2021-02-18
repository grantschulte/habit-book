import React from "react";
import styled from "styled-components";
import { TR } from "modules/dashboard/components/HistoryTable/HistoryTable";
import { HistoryDay } from "../HistoryTable/HistoryTable";

const StyledTH = styled.th`
  padding: 0.5rem 0.25rem;
  text-align: center;
`;
const TH = ({
  day,
  children,
}: {
  day?: HistoryDay;
  children?: React.ReactNode;
}) => <StyledTH>{day ? day.name.slice(0, 1) : children}</StyledTH>;

const HistoryTableHeaderRow = ({ events }: { events: HistoryDay[] }) => (
  <TR>
    <TH></TH>
    {events.map((day) => (
      <TH day={day} key={day.id} />
    ))}
  </TR>
);

export default HistoryTableHeaderRow;
