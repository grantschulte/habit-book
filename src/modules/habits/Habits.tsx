import React from "react";
import Container from "modules/common/Container";
import Heading from "modules/common/Heading";
import HabitListDraggable from "./components/HabitListDraggable";

const Habits: React.FC = () => {
  return (
    <Container>
      <Heading as="h2">Habits</Heading>
      <HabitListDraggable />
    </Container>
  );
};

export default Habits;
