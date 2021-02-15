import HabitItem from "modules/common/HabitItem/HabitItem";
import { HabitLabel } from "modules/common/HabitItem/HabitLabel";
import { toggleHabitDone } from "modules/habits/Habits.slice";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Habit } from "types";
import DoneIcon from "./DoneIcon";

interface TodayHabitListProps {
  habits: Habit[];
}

const Container = styled.div``;

const TodayHabitList: React.FC<TodayHabitListProps> = ({ habits }) => {
  const dispatch = useDispatch();

  return (
    <Container>
      {habits.map((h) => {
        return (
          <HabitItem
            done={h.done}
            label={h.label}
            key={h.id.toString()}
            onClick={() => {
              dispatch(toggleHabitDone({ id: h.id }));
            }}
          >
            <HabitLabel $isDone={h.done}>{h.label}</HabitLabel>
            <DoneIcon $isDone={h.done} size="1.5rem" />
          </HabitItem>
        );
      })}
    </Container>
  );
};

export default TodayHabitList;
