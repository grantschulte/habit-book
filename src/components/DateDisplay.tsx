import React from "react";
import styled from "styled-components";
import { DateContextProps } from "../context/DateContext";

type DateDisplayProps = {
  date: DateContextProps;
};

const StyledDateDisplay = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledDate = styled.div`
  font-size: 4rem;
  font-weight: bold;
  color: ${(props) => props.theme.color.secondary};
  line-height: 1;
`;

const DateDisplay: React.FC<DateDisplayProps> = ({
  date,
}: DateDisplayProps) => {
  return (
    <StyledDateDisplay>
      <StyledDate>{date.formatted.dayMonth}</StyledDate>
    </StyledDateDisplay>
  );
};

export default DateDisplay;
