import { initInlineEditState } from "../../context/HabitContext";
import {
  InlineEditActions,
  INLINE_EDIT_RESET,
  INLINE_EDIT_SHOW,
  INLINE_EDIT_UPDATE_INPUT,
} from "./inlineEditActions";

export type InlineEditState = {
  showEditInput: string;
  editInputValue: string;
};

const inlineEditReducer = (
  state: InlineEditState,
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
      return Object.assign({}, initInlineEditState);
    default:
      throw Error("Action not found in inlineEditReducer");
  }
};

export default inlineEditReducer;
