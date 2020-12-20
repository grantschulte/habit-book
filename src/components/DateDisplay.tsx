import React from "react";
import styled from "styled-components";
import { DateContextProps } from "../context/DateContext";

type DateDisplayProps = {
  date: DateContextProps;
};

const StyledDateDisplay = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
`;

const StyledDate = styled.div`
  font-size: 4rem;
  font-weight: bold;
  color: ${(props) => props.theme.color.secondary};
  line-height: 1;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
    text-align: left;

    span {
      display: block;
    }
  }
`;

const DateDisplay: React.FC<DateDisplayProps> = ({
  date,
}: DateDisplayProps) => {
  return (
    <StyledDateDisplay>
      <StyledDate>
        <span>{date.date.format("ddd")}, </span>
        <span>{date.date.format("MMM D")}</span>
      </StyledDate>
    </StyledDateDisplay>
  );
};

export default DateDisplay;
