import React from "react";
import styled from "styled-components";
import { DateContextProps } from "../../context/DateContext";

type DateDisplayProps = {
  date: DateContextProps;
};

const StyledDateDisplay = styled.div`
  width: 100%;
`;

const StyledDate = styled.div`
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  font-weight: bold;
  color: ${(props) => props.theme.color.secondary};
  line-height: 1;
  text-align: left;
`;

const DateDisplay: React.FC<DateDisplayProps> = ({
  date,
}: DateDisplayProps) => {
  return (
    <StyledDateDisplay>
      <StyledDate>
        <span>{date.date.format("dddd")}, </span>
        <span>{date.date.format("MMMM DD")}</span>
      </StyledDate>
    </StyledDateDisplay>
  );
};

export default DateDisplay;
