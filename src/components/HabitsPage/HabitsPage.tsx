import React from "react";
import Container from "../Layout/Container";
import Heading from "../Typography/Heading";
import HabitListDraggable from "./HabitListDraggable";

const HabitsPage: React.FC = () => {
  return (
    <Container>
      <Heading as="h2">Habits</Heading>
      <HabitListDraggable />
    </Container>
  );
};

export default HabitsPage;
