import React, { ChangeEvent, KeyboardEvent, useState } from "react";
// import { DragDropContext } from "react-beautiful-dnd";
import HabitItem from "../HabitItem";
import { mockHabits } from "../../data/mockHabits";
import { BiPlusCircle } from "react-icons/bi";
import styled from "styled-components";
import Input from "../Form/Input";
import Habit from "../../types/habit";

const AddHabitButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${(props) => props.theme.color.green["400"]};
  padding: 1rem;
  font-weight: bold;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  border-radius: ${(props) => props.theme.borderRadii[4]};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.color.green["300"]};
  }

  span {
    margin-left: 0.5rem;
  }
`;

const AddHabitInput = styled(Input).attrs({
  type: "text",
  placeholder: "Enter Habit",
})`
  width: 100%;
  max-width: 100%;
  height: 4rem;
  border-radius: ${(props) => props.theme.borderRadii[4]};
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  font-weight: bold;
  padding: 1rem;
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
    <div>
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
    </div>
  );
};

export default HabitListDraggable;
