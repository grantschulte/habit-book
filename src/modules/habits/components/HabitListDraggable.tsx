import React, { ChangeEvent, KeyboardEvent, useReducer, useState } from "react";
import styled from "styled-components";
import Habit from "types/habit";
import { percentageColor } from "utils/css.utils";
import { IconType } from "modules/common/Icons";
import {
  DragDropContext,
  Droppable,
  DroppableProvided,
  DropResult,
} from "modules/common/DragNDrop";
import { BiError, BiPlusCircle } from "modules/common/Icons";
import { Alert, AlertType } from "modules/common/Alert";
import DraggableItem from "./DraggableItem/DraggableItem";
import AddHabitButton from "./AddHabitButton";
import AddHabitInput from "./AddHabitInput";
import { habitsReducer, initHabitsState } from "state/habits/habitReducer";
import { addHabit, reorderHabits } from "state/habits/habitActions";

const StyledHabitListDraggable = styled.div`
  width: 100%;
  max-width: 500px;
`;

const HabitList = styled.div`
  background-color: ${(props) =>
    percentageColor(props.theme.color.background, -10)};
  padding: 0.75rem;
  border-radius: ${(props) => props.theme.borderRadii[4]};
`;

const AlertContainer = styled.div`
  margin-top: 0.5rem;
`;

type AlertProps = {
  type: AlertType;
  Icon: IconType;
  title: string;
  message: string;
};

const HabitListDraggable: React.FC = () => {
  const [state, dispatch] = useReducer(habitsReducer, initHabitsState);
  const [alert, setAlert] = useState<AlertProps | undefined>(undefined);
  const [addHabitInput, setAddHabitInput] = useState<string>("");
  const [addHabitInputVisible, setAddHabitInputVisibility] = useState<boolean>(
    false
  );

  const handleAddHabitButtonClick = () => {
    setAddHabitInputVisibility(true);
  };

  const handleAddHabitEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (!addHabitInput) {
        return;
      }

      const exists = state.habits.find(
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

      if (state.habits.length > 4) {
        setAlert({
          type: "error",
          Icon: BiError,
          title: "You can't have more than five habits...",
          message:
            "Research suggests that you are more likely to achieve goals that are attainable. If you want to add another habit, delete another one first. Don't worry, we'll still have your habit history.",
        });
        return;
      }

      setAlert(undefined);
      dispatch(addHabit(addHabitInput));
    }
  };

  const handleAddHabitInput = (e: ChangeEvent<HTMLInputElement>) => {
    setAddHabitInput(e.target.value);
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

    const h: Habit = state.habits[source.index];
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
      <AddHabitButton onClick={handleAddHabitButtonClick}>
        <BiPlusCircle size="1.75rem" />
        <span>Add Habit</span>
      </AddHabitButton>

      {addHabitInputVisible && (
        <AddHabitInput
          onKeyUp={handleAddHabitEnter}
          onInput={handleAddHabitInput}
          value={addHabitInput}
        />
      )}

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
                {state.habits.map((habit, index) => {
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
