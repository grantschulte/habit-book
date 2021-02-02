import React from "react";
import styled from "styled-components";
import { CalendarDatum } from "modules/common/Calendar";
import Heading from "modules/common/Heading";
import { Col } from "modules/common/Grid";
import FullWidthRow from "modules/common/Layout/FullWidthRow";
import Calendar from "./components/Calendar";
import Page from "modules/common/Page";

const CalendarContainer = styled.div`
  height: 240px;
`;

const DashboardPage: React.FC = () => {
  const data: CalendarDatum[] = [
    { day: "2021-01-16", value: 5 },
    { day: "2020-01-17", value: 2 },
  ];
  const calendars = [{ from: "01/01/2021", to: "12/31/2021", data }];

  return (
    <Page center>
      <FullWidthRow center="xs">
        <Col xs>
          <Heading as="h1">Dashboard</Heading>
          <CalendarContainer>
            {calendars.map((cal) => {
              return (
                <Calendar
                  key={cal.from}
                  data={cal.data}
                  to={cal.to}
                  from={cal.from}
                />
              );
            })}
          </CalendarContainer>
        </Col>
      </FullWidthRow>
    </Page>
  );
};

export default DashboardPage;
