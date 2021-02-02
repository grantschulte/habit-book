import React from "react";
import Heading from "modules/common/Heading";
import { Col } from "modules/common/Grid";
import FullWidthRow from "modules/common/Layout/FullWidthRow";
import Page from "modules/common/Page";
import HabitListDraggable from "./components/HabitListDraggable";

const Habits: React.FC = () => {
  return (
    <Page center>
      <FullWidthRow center="xs">
        <Col xs sm={12} md={6}>
          <Heading as="h1">Habits</Heading>
          <HabitListDraggable />
        </Col>
      </FullWidthRow>
    </Page>
  );
};

export default Habits;
