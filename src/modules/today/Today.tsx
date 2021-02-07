import React from "react";
import FullWidthRow from "modules/common/FullWidthRow";
import { Col } from "modules/common/Grid";
import DateDisplay from "./components/DateDisplay";
import TodayHabitList from "./components/TodayHabitList";
import Page from "modules/common/Page";

const Today: React.FC = () => {
  return (
    <Page center>
      <FullWidthRow center="xs">
        <Col xs sm={12} md={8} lg={6}>
          <DateDisplay />
          <TodayHabitList />
        </Col>
      </FullWidthRow>
    </Page>
  );
};

export default Today;
