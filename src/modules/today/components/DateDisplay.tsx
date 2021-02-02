import React from "react";
import { useDate } from "context/DateContext";
import Heading from "modules/common/Heading";

const DateDisplay: React.FC = () => {
  const { date } = useDate();
  return <Heading as="h1">{date.format("dddd, MMMM DD")}</Heading>;
};

export default DateDisplay;
