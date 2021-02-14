import React from "react";
import { Col, Row } from "lib/Grid";
import DateDisplay from "./components/DateDisplay";
import TodayHabitList from "./components/TodayHabitList";
import Page from "modules/common/Page";

const Today: React.FC = () => {
  return (
    <Page>
      <Row>
        <Col xs sm={12} md={8} lg={6}>
          <DateDisplay />
          <TodayHabitList />
        </Col>
      </Row>
    </Page>
  );
};

export default Today;
