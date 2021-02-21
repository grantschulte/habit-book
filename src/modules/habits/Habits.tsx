import React from "react";
import Heading from "modules/common/Heading";
import { Col, Row } from "lib/Grid";
import Page from "modules/common/Page";
import HabitListDraggable from "./components/HabitListDraggable";
import AddHabitForm from "modules/habits/components/AddHabitForm";

const Habits: React.FC = () => {
  return (
    <Page>
      <Row>
        <Col xs sm={12} md={8} lg={6}>
          <Heading as="h1" styleAs="h2">
            Habits
          </Heading>
          <AddHabitForm />
          <HabitListDraggable />
        </Col>
      </Row>
    </Page>
  );
};

export default Habits;
