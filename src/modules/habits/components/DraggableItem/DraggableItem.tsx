import React, { ChangeEvent, KeyboardEvent, useReducer } from "react";
import styled from "styled-components";
import { deleteHabit, editHabit } from "state/habits/habit.actions";
import Habit from "types/habit";
import { Draggable, DraggableProvided } from "modules/common/DragNDrop";
import { BiCheck, BiEdit, BiTrash } from "modules/common/Icons";
import Input from "modules/common/Form/Input";
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
import { habitsReducer, initHabitsState } from "state/habits/habit.reducer";

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
  const [, dispatchHabit] = useReducer(habitsReducer, initHabitsState);
  const [state, dispatch] = useReducer(
    draggableItemsReducer,
    initDraggableItemState
  );

  const handleSaveEditHabit = () => {
    dispatchHabit(editHabit(state.editInputValue, habit.id));
    dispatch(inlineEditReset());
  };

  const handleEditToggle = () => {
    let showId = state.showEditInput === habit.id ? "" : habit.id;
    dispatch(inlineEditUpdateInput(habit.label));
    dispatch(inlineEditShow(showId));
  };

  const handleEditHabitChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(inlineEditUpdateInput(e.target.value));
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
