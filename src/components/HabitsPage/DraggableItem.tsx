import React, { ChangeEvent, KeyboardEvent } from "react";
import { Draggable, DraggableProvided } from "react-beautiful-dnd";
import { BiCheck, BiEdit, BiTrash } from "react-icons/bi";
import styled from "styled-components";
import { useHabits } from "../../context/HabitContext";
import { deleteHabit, editHabit } from "../../state/habits/habitActions";
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
  color: ${(props) => props.theme.color.green[500]};
`;

const ItemMenuIcon = styled.span`
  margin-left: 0.5rem;
  display: flex;
`;

const ItemMenu = styled.div`
  display: flex;
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

  const handleEditToggle = () => {
    let showId = inlineEditState.showEditInput === habit.id ? "" : habit.id;
    dispatchInlineEdit(inlineEditUpdateInput(habit.label));
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

  const handleDeleteItem = () => {
    dispatchHabit(deleteHabit(habit.id));
  };

  return (
    <Draggable draggableId={habit.id} index={index} key={habit.id}>
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
              <SaveEditIcon size="2.5rem" onClick={handleSaveEditHabit} />
            </>
          ) : (
            <>
              <DraggableIcon size="1.5rem" />
              <HabitLabel>{habit.label}</HabitLabel>
              <ItemMenu>
                <ItemMenuIcon>
                  <BiEdit size="1.5rem" onClick={handleEditToggle} />
                </ItemMenuIcon>
                <ItemMenuIcon>
                  <BiTrash size="1.5rem" onClick={handleDeleteItem} />
                </ItemMenuIcon>
              </ItemMenu>
            </>
          )}
        </HabitItemDraggable>
      )}
    </Draggable>
  );
};

export default DraggableItem;
