import React from "react";
import styled from "styled-components";
import Heading from "modules/common/Heading";
import { Col, Row } from "modules/common/Grid";
import Calendar from "./components/Calendar";
import Page from "modules/common/Page";
import useMediaQuery from "hooks/useMediaQuery";
import useCalendar from "hooks/useCalendar";
import HistoryTable from "modules/dashboard/components/HistoryTable";
import useHabitHistory from "hooks/useHabitHistory";

const CalendarContainer = styled.div`
  height: 240px;

  @media screen and (max-width: 768px) {
    height: 800px;
  }
`;

const Section = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[8]};
`;

const DashboardPage: React.FC = () => {
  const mqlMatch = useMediaQuery("(max-width: 768px)");
  const { cal, data, direction } = useCalendar(mqlMatch);
  const habitHistory = useHabitHistory();

  return (
    <Page>
      <Row>
        <Col xs sm={12} md={10} lg={10}>
          <Section>
            <Heading as="h2">Report Card</Heading>
            <HistoryTable data={habitHistory} />
          </Section>

          <Section>
            <Heading as="h2">Frequency</Heading>
            <CalendarContainer>
              <Calendar
                key={cal.from}
                data={data}
                to={cal.to}
                from={cal.from}
                direction={direction}
              />
            </CalendarContainer>
          </Section>
        </Col>
      </Row>
    </Page>
  );
};

export default DashboardPage;
