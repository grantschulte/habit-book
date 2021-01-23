import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import styled from "styled-components";
import {
  DragDropContext,
  Draggable,
  DraggableProvided,
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot,
  DropResult,
} from "react-beautiful-dnd";
import HabitItem from "../Habit/HabitItem";
import { BiEdit, BiPlusCircle } from "react-icons/bi";
import AddHabitButton from "./AddHabitButton";
import AddHabitInput from "./AddHabitInput";
import DraggableIcon from "./DraggableIcon";
import { useHabits } from "../../context/HabitContext";
import Habit from "../../types/habit";
import { HabitListProps } from "../../types/types";
import { percentageColor } from "../../utils/css.utils";
import { HabitLabel } from "../Habit/HabitLabel";
import Input from "../Form/Input";
import { editHabit } from "../../state/habits/habitActions";

const StyledHabitListDraggable = styled.div`
  width: 100%;
  max-width: 500px;
`;

const StyledHabitList = styled.div`
  background-color: ${(props) =>
    percentageColor(props.theme.color.background, -10)};
  padding: 0.75rem;
  border-radius: ${(props) => props.theme.borderRadii[4]};
`;

const HabitListDraggableHabitItem = styled(HabitItem).attrs((props) => ({
  $isDone: false,
}))`
  background-color: ${(props) => props.theme.color.background};
  margin-bottom: 0.75rem;
`;

const HabitList: React.FC<HabitListProps> = ({
  children,
  innerRef,
}: HabitListProps) => {
  return <StyledHabitList ref={innerRef}>{children}</StyledHabitList>;
};

const handleHabitLabelInput = (event: React.FormEvent<HTMLDivElement>) => {
  console.log(event.target);
};

const EditInput = styled(Input)`
  margin-right: auto;
`;

const HabitListDraggable: React.FC = () => {
  const { habitsState, addHabit, reorderHabits, dispatch } = useHabits();
  const [habitInput, updateHabitInput] = useState<string>("");
  const [showInlineEdit, setShowInlineEdit] = useState<string>("");
  const [addHabitInputVisible, showAddHabitInputVisible] = useState<boolean>(
    false
  );

  const handleAddHabitButtonClick = () => {
    showAddHabitInputVisible(true);
  };

  const handleAddHabitEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      dispatch(addHabit(habitInput));
    }
  };

  const handleAddHabitInput = (e: ChangeEvent<HTMLInputElement>) => {
    updateHabitInput(e.target.value);
  };

  const handleEditHabit = (label: string, id: string) => {
    dispatch(editHabit(label, id));
  };

  const handleEditToggle = (id: string) => {
    let showId = showInlineEdit === id ? "" : id;
    setShowInlineEdit(showId);
  };

  const onDragEnd = ({ destination, source, draggableId }: DropResult) => {
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const h: Habit = habitsState.habits[source.index];
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
          value={habitInput}
        />
      )}

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="habit-list-droppable">
          {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
            <HabitList
              innerRef={provided.innerRef}
              {...provided.droppableProps}
            >
              <div>
                {habitsState.habits.map((habit, index) => {
                  return (
                    <Draggable
                      draggableId={habit.id}
                      index={index}
                      key={habit.label}
                    >
                      {(provided: DraggableProvided) => (
                        <HabitListDraggableHabitItem
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          innerRef={provided.innerRef}
                          label={habit.label}
                          Icon={DraggableIcon}
                        >
                          {showInlineEdit !== habit.id && (
                            <>
                              <DraggableIcon size="1.5rem" />
                              <HabitLabel onInput={handleHabitLabelInput}>
                                {habit.label}
                              </HabitLabel>
                            </>
                          )}
                          {showInlineEdit === habit.id && (
                            <EditInput
                              onChange={(e) =>
                                handleEditHabit(e.target.value, habit.id)
                              }
                            />
                          )}
                          <div>
                            <BiEdit
                              size="1.5rem"
                              onClick={() => handleEditToggle(habit.id)}
                            />
                          </div>
                        </HabitListDraggableHabitItem>
                      )}
                    </Draggable>
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
