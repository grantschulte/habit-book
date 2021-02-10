import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CalendarDatum } from "modules/common/Calendar";
import Heading from "modules/common/Heading";
import { Col } from "modules/common/Grid";
import FullWidthRow from "modules/common/FullWidthRow";
import Calendar from "./components/Calendar";
import Page from "modules/common/Page";
import mockCalendarData from "data/calendar.json";

const CalendarContainer = styled.div`
  height: 240px;

  @media screen and (max-width: 768px) {
    height: 800px;
  }
`;

const DashboardPage: React.FC = () => {
  const data: CalendarDatum[] = mockCalendarData;
  const calendars = [{ from: "01/01/2021", to: "12/31/2021", data }];
  let [direction, setDirection] = useState<"horizontal" | "vertical">(
    "horizontal"
  );

  // update calendar direction on media query

  useEffect(() => {
    const mqstring = "(max-width: 768px)";
    const mql = window.matchMedia(mqstring);

    if (mql.matches) {
      setDirection("vertical");
    }

    function onMediaQueryChange(this: MediaQueryList, ev: MediaQueryListEvent) {
      const dir = ev.matches ? "vertical" : "horizontal";
      setDirection(dir);
    }

    mql.addEventListener("change", onMediaQueryChange);
  }, [setDirection]);

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
                  direction={direction}
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
