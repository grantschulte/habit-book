import {
  InlineEditActions,
  INLINE_EDIT_RESET,
  INLINE_EDIT_SHOW,
  INLINE_EDIT_UPDATE_INPUT,
} from "./DraggableItem.actions";

export type DraggableItemState = {
  showEditInput: string;
  editInputValue: string;
};

export const initDraggableItemState: DraggableItemState = {
  showEditInput: "",
  editInputValue: "",
};

const draggableItemsReducer = (
  state: DraggableItemState,
  action: InlineEditActions
) => {
  switch (action.type) {
    case INLINE_EDIT_SHOW:
      return Object.assign({}, state, {
        showEditInput: action.id,
      });
    case INLINE_EDIT_UPDATE_INPUT:
      return Object.assign({}, state, {
        editInputValue: action.value,
      });
    case INLINE_EDIT_RESET:
      return Object.assign({}, initDraggableItemState);
    default:
      throw Error("Action not found in draggableItemsReducer");
  }
};

export default draggableItemsReducer;
