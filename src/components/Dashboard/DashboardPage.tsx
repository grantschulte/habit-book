import React from "react";
import styled from "styled-components";
import { CalendarDatum } from "@nivo/calendar";
import Container from "../Layout/Container";
import Calendar from "./Calendar";
import Heading from "../Typography/Heading";
import { FlexRow, FlexRowItem } from "../Layout/Flex";

const CalendarContainer = styled.div`
  height: 240px;
`;

const DashboardPage: React.FC = () => {
  const data: CalendarDatum[] = [
    { day: "2021-01-16", value: 5 },
    { day: "2020-01-17", value: 2 },
  ];
  const calendars = [{ from: "01/01/2021", to: "12/31/2021", data }];

  const renderCalendars = () => {
    return calendars.map((cal) => {
      return (
        <Calendar key={cal.to} data={cal.data} to={cal.to} from={cal.from} />
      );
    });
  };

  return (
    <Container>
      <Heading as="h2">Dashboard</Heading>
      <FlexRow>
        <FlexRowItem flexGrow={1} flexBasis={0}>
          <Heading as="h3">Calendar</Heading>
          <CalendarContainer>{renderCalendars()}</CalendarContainer>
        </FlexRowItem>
        <FlexRowItem flexGrow={1} flexBasis={0}>
          <Heading as="h3">Streaks</Heading>
          Something
        </FlexRowItem>
      </FlexRow>
    </Container>
  );
};

export default DashboardPage;
