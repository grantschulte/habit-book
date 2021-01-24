export const INLINE_EDIT_SHOW = "INLINE_EDIT_SHOW";
export const INLINE_EDIT_UPDATE_INPUT = "INLINE_EDIT_UPDATE_INPUT";
export const INLINE_EDIT_RESET = "INLINE_EDIT_RESET";

export type InlineEditShow = {
  type: typeof INLINE_EDIT_SHOW;
  id: string;
};

export type InlineEditUpdateInput = {
  type: typeof INLINE_EDIT_UPDATE_INPUT;
  value: string;
};

export type InlineEditReset = {
  type: typeof INLINE_EDIT_RESET;
};

export type InlineEditActions =
  | InlineEditShow
  | InlineEditUpdateInput
  | InlineEditReset;

export const inlineEditShow = (id: string): InlineEditShow => {
  return {
    type: INLINE_EDIT_SHOW,
    id,
  };
};

export const inlineEditUpdateInput = (value: string): InlineEditUpdateInput => {
  return {
    type: INLINE_EDIT_UPDATE_INPUT,
    value,
  };
};

export const inlineEditReset = (): InlineEditReset => {
  return {
    type: INLINE_EDIT_RESET,
  };
};
