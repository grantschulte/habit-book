import React, { ChangeEvent, KeyboardEvent } from "react";
import { Draggable, DraggableProvided } from "react-beautiful-dnd";
import { BiCheck, BiEdit } from "react-icons/bi";
import styled from "styled-components";
import { useHabits } from "../../context/HabitContext";
import { editHabit } from "../../state/habits/habitActions";
import Habit from "../../types/habit";
import Input from "../Form/Input";
import HabitItem from "../Habit/HabitItem";
import { HabitLabel } from "../Habit/HabitLabel";
import DraggableIcon from "./DraggableIcon";

const HabitItemDraggable = styled(HabitItem).attrs((props) => ({
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

type DraggableItemProps = { habit: Habit; index: number };

const DraggableItem: React.FC<DraggableItemProps> = ({
  habit,
  index,
}: DraggableItemProps) => {
  const {
    dispatchHabit,
    dispatchInlineEdit,
    inlineEditState,
    inlineEditShow,
    inlineEditUpdateInput,
    inlineEditReset,
  } = useHabits();

  const handleSaveEditHabit = () => {
    dispatchHabit(editHabit(inlineEditState.editInputValue, habit.id));
    dispatchInlineEdit(inlineEditReset());
  };

  const handleEditToggle = (label: string) => {
    let showId = inlineEditState.showEditInput === habit.id ? "" : habit.id;
    dispatchInlineEdit(inlineEditUpdateInput(label));
    dispatchInlineEdit(inlineEditShow(showId));
  };

  const handleEditHabitChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatchInlineEdit(inlineEditUpdateInput(e.target.value));
  };

  const handleEditHabitKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSaveEditHabit();
    }
  };

  return (
    <Draggable draggableId={habit.id} index={index} key={habit.label}>
      {(provided: DraggableProvided) => (
        <HabitItemDraggable
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          innerRef={provided.innerRef}
          label={habit.label}
          Icon={DraggableIcon}
        >
          {inlineEditState.showEditInput === habit.id ? (
            <>
              <EditInput
                value={inlineEditState.editInputValue}
                onChange={handleEditHabitChange}
                onKeyUp={handleEditHabitKeyUp}
              />
              <SaveEditIcon size="2rem" onClick={handleSaveEditHabit} />
            </>
          ) : (
            <>
              <DraggableIcon size="1.5rem" />
              <HabitLabel>{habit.label}</HabitLabel>
            </>
          )}
          <div>
            <BiEdit
              size="1.5rem"
              onClick={() => handleEditToggle(habit.label)}
            />
          </div>
        </HabitItemDraggable>
      )}
    </Draggable>
  );
};

export default DraggableItem;
