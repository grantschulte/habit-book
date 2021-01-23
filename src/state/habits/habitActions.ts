import Habit from "../../types/habit";

export const MARK_DONE = "MARK_HABIT_DONE";
export const TOGGLE = "TOGGLE_HABIT";
export const EDIT = "EDIT_HABIT";
export const DELETE = "DELETE_HABIT";
export const REORDER = "REORDER_HABITS";
export const ADD = "ADD_HABIT";

export type ToggleHabit = {
  type: typeof TOGGLE;
  habit: Habit;
};

export type EditHabit = {
  type: typeof EDIT;
  label: string;
  id: string;
};

export type DeleteHabit = {
  type: typeof DELETE;
  habit: Habit;
};

export type ReorderHabits = {
  type: typeof REORDER;
  payload: {
    source: number;
    destination: number;
    habit: Habit;
  };
};

export type AddHabit = {
  type: typeof ADD;
  label: string;
};

export type HabitActions =
  | ToggleHabit
  | EditHabit
  | DeleteHabit
  | ReorderHabits
  | AddHabit;

export const toggleHabit = (habit: Habit): ToggleHabit => {
  return {
    type: TOGGLE,
    habit,
  };
};

export const editHabit = (label: string, id: string): EditHabit => {
  return {
    type: EDIT,
    label,
    id,
  };
};

export const deleteHabit = (habit: Habit): DeleteHabit => {
  return {
    type: DELETE,
    habit,
  };
};

export const reorderHabits = (payload: {
  source: number;
  destination: number;
  habit: Habit;
}): ReorderHabits => {
  return {
    type: REORDER,
    payload,
  };
};

export const addHabit = (label: string): AddHabit => {
  return {
    type: ADD,
    label,
  };
};
