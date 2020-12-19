import React from "react";
import styled from "styled-components";
import { DateContextProps } from "../context/date-context";

type DateDisplayProps = {
  date: DateContextProps;
};

const StyledDateDisplay = styled.div``;

const DateDisplay: React.FC<DateDisplayProps> = ({
  date,
}: DateDisplayProps) => {
  return (
    <StyledDateDisplay>
      <div></div>
    </StyledDateDisplay>
  );
};

export default DateDisplay;
