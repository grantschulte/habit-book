import React from "react";
import Heading from "modules/common/Heading";
import { Col, Row } from "modules/common/Grid";
import Page from "modules/common/Page";
import HabitListDraggable from "./components/HabitListDraggable";

const Habits: React.FC = () => {
  return (
    <Page>
      <Row>
        <Col xs sm={12} md={8} lg={6}>
          <Heading as="h2">Habits</Heading>
          <HabitListDraggable />
        </Col>
      </Row>
    </Page>
  );
};

export default Habits;
