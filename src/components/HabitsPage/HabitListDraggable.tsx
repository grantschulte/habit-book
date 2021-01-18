import React, { ChangeEvent, KeyboardEvent, useState } from "react";
// import { DragDropContext } from "react-beautiful-dnd";
import HabitItem from "../HabitItem";
import { mockHabits } from "../../data/mockHabits";
import { BiPlusCircle } from "react-icons/bi";
import Habit from "../../types/habit";
import AddHabitButton from "./AddHabitButton";
import AddHabitInput from "./AddHabitInput";
import styled from "styled-components";

const StyledHabitListDraggable = styled.div`
  max-width: 400px;
`;

const HabitListDraggable: React.FC = () => {
  const [addHabitInputVisible, showAddHabitInputVisible] = useState<boolean>(
    false
  );
  const [habits, updateHabits] = useState<Habit[]>(mockHabits);
  const [habitInput, updateHabitInput] = useState<string>("");
  const handleAddHabitButtonClick = () => {
    showAddHabitInputVisible(true);
  };

  const handleAddHabitEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      let updatedHabits: Habit[] = [
        ...habits,
        {
          id: "4",
          label: habitInput,
          done: false,
          order: 4,
        },
      ];
      updateHabits(updatedHabits);
      updateHabitInput("");
    }
  };

  const handleAddHabitInput = (e: ChangeEvent<HTMLInputElement>) => {
    updateHabitInput(e.target.value);
  };

  return (
    <StyledHabitListDraggable>
      <AddHabitButton onClick={handleAddHabitButtonClick}>
        <BiPlusCircle size="1.75rem" />
        <span>Add Habit</span>
      </AddHabitButton>

      {addHabitInputVisible && (
        <AddHabitInput
          onKeyUp={handleAddHabitEnter}
          onInput={handleAddHabitInput}
          value={habitInput}
        />
      )}

      {habits.map((habit) => {
        return <HabitItem habit={habit} key={habit.label} />;
      })}
    </StyledHabitListDraggable>
  );
};

export default HabitListDraggable;
