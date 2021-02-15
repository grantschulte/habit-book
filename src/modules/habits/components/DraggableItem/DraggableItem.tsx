import React, { ChangeEvent, KeyboardEvent, useReducer } from "react";
import styled from "styled-components";
import { Habit } from "types";
import { Draggable, DraggableProvided } from "lib/DragNDrop";
import { BiCheck, BiEdit, BiTrash } from "lib/Icons";
import Input from "modules/common/Input";
import HabitItem from "modules/common/HabitItem/HabitItem";
import { HabitLabel } from "modules/common/HabitItem/HabitLabel";
import DraggableIcon from "../DraggableIcon";
import draggableItemsReducer, {
  initDraggableItemState,
} from "./DraggableItem.reducer";
import {
  inlineEditShow,
  inlineEditUpdateInput,
  inlineEditReset,
} from "./DraggableItem.actions";
import { useDispatch } from "react-redux";
import { deleteHabit, editHabit } from "modules/habits/Habits.slice";

const HabitItemDraggable = styled(HabitItem).attrs({
  $isDone: false,
})`
  background-color: ${(props) => props.theme.color.background};
  margin-bottom: 0.5rem;
`;

const EditInput = styled(Input)`
  margin-right: 0.75rem;
  border: 0;
  background-color: ${({ theme }) => theme.color.backgroundAlt};
`;

const SaveEditIcon = styled(BiCheck)`
  color: ${({ theme }) => theme.color.primary};
`;

const ItemMenuIcon = styled.span`
  margin-left: 0.75rem;
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
  const dispatch = useDispatch();
  const [state, dispatchInlineEdit] = useReducer(
    draggableItemsReducer,
    initDraggableItemState
  );

  const handleSaveEditHabit = () => {
    dispatch(editHabit({ id: habit.id, name: state.editInputValue }));
    dispatchInlineEdit(inlineEditReset());
  };

  const handleEditToggle = () => {
    let showId = state.showEditInput === habit.id ? "" : habit.id;
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
    dispatch(deleteHabit({ id: habit.id }));
  };

  return (
    <Draggable draggableId={habit.id} index={index} key={habit.id}>
      {(provided: DraggableProvided) => (
        <HabitItemDraggable
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          innerRef={provided.innerRef}
          label={habit.label}
        >
          {state.showEditInput === habit.id ? (
            <>
              <EditInput
                value={state.editInputValue}
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
