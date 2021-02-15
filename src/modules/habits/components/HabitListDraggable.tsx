import { RootState } from "app/rootReducer";
import {
  DragDropContext,
  Droppable,
  DroppableProvided,
  DropResult,
} from "lib/DragNDrop";
import { BiError, BiPlus } from "lib/Icons";
import { Alert, AlertProps } from "modules/common/Alert";
import Button from "modules/common/Button";
import Input from "modules/common/Input";
import InputCombo from "modules/common/InputCombo";
import {
  addHabit,
  fetchHabits,
  reorderHabits,
} from "modules/habits/Habits.slice";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Habit } from "types";
import DraggableItem from "./DraggableItem/DraggableItem";

const StyledHabitListDraggable = styled.div``;

const HabitList = styled.div`
  background-color: ${(props) => props.theme.color.backgroundAlt};
  padding: 0.5rem;
  border-radius: ${(props) => props.theme.borderRadii[4]};
`;

const AlertContainer = styled.div`
  margin-top: 1rem;
`;

const HabitListDraggable: React.FC = () => {
  const dispatch = useDispatch();
  const { allHabits } = useSelector((state: RootState) => state.habits);
  const [alert, setAlert] = useState<AlertProps | undefined>(undefined);
  const [addHabitInput, setAddHabitInput] = useState<string>("");

  useEffect(() => {
    dispatch(fetchHabits());
  }, [dispatch]);

  const handleAddHabit = () => {
    if (!addHabitInput) {
      return;
    }

    const exists = allHabits.find(
      (habit) => habit.label.toLowerCase() === addHabitInput.toLowerCase()
    );

    if (exists) {
      setAlert({
        type: "error",
        Icon: BiError,
        title: "Duplicate habit found",
        message: "Only one habit of the same type can be added.",
      });
      return;
    }

    if (allHabits.length > 4) {
      setAlert({
        type: "error",
        Icon: BiError,
        title: "You can't have more than five habits...",
        message:
          "Research suggests you are more likely to achieve attainable goals. If you want to add another habit, delete one first.",
      });
      return;
    }

    setAlert(undefined);
    dispatch(addHabit({ name: addHabitInput }));
  };

  const handleAddHabitInput = (e: ChangeEvent<HTMLInputElement>) => {
    setAddHabitInput(e.target.value);
  };

  const handleAddHabitKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddHabit();
    }
  };

  const onDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const h: Habit = allHabits[source.index];

    dispatch(
      reorderHabits({
        source: source.index,
        destination: destination.index,
        habit: h,
      })
    );
  };

  return (
    <StyledHabitListDraggable>
      <InputCombo style={{ marginBottom: "0.5rem" }} size="lg">
        <Input
          onKeyUp={handleAddHabitKeyUp}
          onInput={handleAddHabitInput}
          value={addHabitInput}
          placeholder="Add Habit"
        />
        <Button buttonType="primary" onClick={handleAddHabit}>
          <BiPlus size="1.75rem" />
        </Button>
      </InputCombo>

      {alert && (
        <AlertContainer>
          <Alert
            type={alert.type}
            Icon={alert.Icon}
            message={alert.message}
            title={alert.title}
          />
        </AlertContainer>
      )}

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="habit-list-droppable">
          {(provided: DroppableProvided) => (
            <HabitList ref={provided.innerRef} {...provided.droppableProps}>
              <div>
                {allHabits.map((habit, index) => {
                  return (
                    <DraggableItem habit={habit} index={index} key={habit.id} />
                  );
                })}
              </div>
              {provided.placeholder}
            </HabitList>
          )}
        </Droppable>
      </DragDropContext>
    </StyledHabitListDraggable>
  );
};

export default HabitListDraggable;
