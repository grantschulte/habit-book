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
import { BiCheck, BiEdit, BiPlusCircle } from "react-icons/bi";
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

const EditInput = styled(Input)`
  margin-right: auto;
`;

const SaveEditIcon = styled(BiCheck)`
  margin-right: 0.5rem;
  color: ${(props) => props.theme.color.green[500]};
`;

const HabitList: React.FC<HabitListProps> = ({
  children,
  innerRef,
}: HabitListProps) => {
  return <StyledHabitList ref={innerRef}>{children}</StyledHabitList>;
};

const HabitListDraggable: React.FC = () => {
  const {
    habitsState,
    addHabit,
    reorderHabits,
    dispatchHabit,
    dispatchInlineEdit,
    inlineEditState,
    inlineEditShow,
    inlineEditUpdateInput,
    inlineEditReset,
  } = useHabits();
  const [habitInput, updateHabitInput] = useState<string>("");
  const [addHabitInputVisible, showAddHabitInputVisible] = useState<boolean>(
    false
  );

  const handleAddHabitButtonClick = () => {
    showAddHabitInputVisible(true);
  };

  const handleAddHabitEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      dispatchHabit(addHabit(habitInput));
    }
  };

  const handleAddHabitInput = (e: ChangeEvent<HTMLInputElement>) => {
    updateHabitInput(e.target.value);
  };

  const handleSaveEditHabit = (id: string) => {
    dispatchHabit(editHabit(inlineEditState.editInputValue, id));
    dispatchInlineEdit(inlineEditReset());
  };

  const handleEditToggle = (id: string, label: string) => {
    let showId = inlineEditState.showEditInput === id ? "" : id;
    dispatchInlineEdit(inlineEditUpdateInput(label));
    dispatchInlineEdit(inlineEditShow(showId));
  };

  const handleEditHabitInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatchInlineEdit(inlineEditUpdateInput(e.target.value));
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

    const h: Habit = habitsState.habits[source.index];
    dispatchHabit(
      reorderHabits({
        source: source.index,
        destination: destination.index,
        habit: h,
      })
    );
  };

  const itemInlineEdit = (habit: Habit) => (
    <>
      <EditInput
        value={inlineEditState.editInputValue}
        onChange={handleEditHabitInput}
      />
      <SaveEditIcon size="2rem" onClick={() => handleSaveEditHabit(habit.id)} />
    </>
  );

  const itemMenu = (habit: Habit) => (
    <div>
      <BiEdit
        size="1.5rem"
        onClick={() => handleEditToggle(habit.id, habit.label)}
      />
    </div>
  );

  const itemLabel = (habit: Habit) => (
    <>
      <DraggableIcon size="1.5rem" />
      <HabitLabel>{habit.label}</HabitLabel>
    </>
  );

  const draggableItems = (
    <div>
      {habitsState.habits.map((habit, index) => {
        return (
          <Draggable draggableId={habit.id} index={index} key={habit.label}>
            {(provided: DraggableProvided) => (
              <HabitListDraggableHabitItem
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                innerRef={provided.innerRef}
                label={habit.label}
                Icon={DraggableIcon}
              >
                {inlineEditState.showEditInput === habit.id
                  ? itemInlineEdit(habit)
                  : itemLabel(habit)}
                {itemMenu(habit)}
              </HabitListDraggableHabitItem>
            )}
          </Draggable>
        );
      })}
    </div>
  );

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
              {draggableItems}
              {provided.placeholder}
            </HabitList>
          )}
        </Droppable>
      </DragDropContext>
    </StyledHabitListDraggable>
  );
};

export default HabitListDraggable;
