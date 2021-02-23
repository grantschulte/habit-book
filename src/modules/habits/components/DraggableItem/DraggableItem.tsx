import useEditHabit from "hooks/useEditHabit";
import {
  Draggable,
  DraggableProvided,
  DraggableProvidedDraggableProps,
  DraggableProvidedDragHandleProps,
} from "lib/DragNDrop";
import { BiCheck, BiEdit, BiTrash } from "lib/Icons";
import { HabitLabel } from "modules/common/HabitItem/HabitLabel";
import Input from "modules/common/Input";
import React, { ChangeEvent, KeyboardEvent, useReducer } from "react";
import styled from "styled-components";
import { Habit } from "types";
import DraggableIcon from "../DraggableIcon";
import {
  inlineEditReset,
  inlineEditShow,
  inlineEditUpdateInput,
} from "./DraggableItem.actions";
import draggableItemsReducer, {
  initDraggableItemState,
} from "./DraggableItem.reducer";

type HabitItemProps = {
  innerRef?: (element?: HTMLElement | null | undefined) => any;
  children: React.ReactNode;
} & Partial<DraggableProvidedDraggableProps> &
  Partial<DraggableProvidedDragHandleProps>;

const HabitItemDraggableInner = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 1rem;
`;

const HabitItemDraggableContainer = styled.div`
  display: flex;
  width: 100%;
  height: 64px;
  margin-bottom: 0.5rem;
  background-color: ${(props) => props.theme.color.background};
  color: ${(props) => props.theme.color.text};
  border: 2px solid;
  border-color: ${(props) => props.theme.color.border};
  transition: border-color 200ms ease, color 200ms ease;

  &:last-child {
    margin-bottom: 0;
  }
`;

const HabitItemDraggable: React.FC<HabitItemProps> = ({
  innerRef,
  children,
  ...props
}: HabitItemProps) => {
  return (
    <HabitItemDraggableContainer ref={innerRef} {...props}>
      <HabitItemDraggableInner>{children}</HabitItemDraggableInner>
    </HabitItemDraggableContainer>
  );
};

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
  const { mutate } = useEditHabit();
  const [state, dispatchInlineEdit] = useReducer(
    draggableItemsReducer,
    initDraggableItemState
  );

  const handleSaveEditHabit = () => {
    mutate({
      name: state.editInputValue,
      id: habit.id,
    });
    dispatchInlineEdit(inlineEditReset());
  };

  const handleEditToggle = () => {
    let showId = state.showEditInput === habit.id ? "" : habit.id;
    dispatchInlineEdit(inlineEditUpdateInput(habit.name));
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
    mutate({
      active: false,
      id: habit.id,
    });
  };

  return (
    <Draggable
      draggableId={habit.id.toString()}
      index={index}
      key={habit.id.toString()}
    >
      {(provided: DraggableProvided) => (
        <HabitItemDraggable
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          innerRef={provided.innerRef}
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
              <HabitLabel>{habit.name}</HabitLabel>
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
