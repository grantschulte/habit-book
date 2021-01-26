import React, { useReducer } from "react";
import Habit from "../types/habit";
import { mockHabits, mockScore } from "../data/mockHabits";
import { Score } from "../types/habit-score";
import {
  HabitActions,
  ToggleHabit,
  DeleteHabit,
  ReorderHabits,
  AddHabit,
  EditHabit,
  addHabit,
  deleteHabit,
  reorderHabits,
  toggleHabit,
  editHabit,
} from "../state/habits/habitActions";
import { HabitsState, habitsReducer } from "../state/habits/habitReducer";
import {
  InlineEditActions,
  InlineEditShow,
  InlineEditUpdateInput,
  inlineEditShow,
  inlineEditUpdateInput,
  InlineEditReset,
  inlineEditReset,
} from "../state/habits/inlineEditActions";
import inlineEditReducer, {
  InlineEditState,
} from "../state/habits/inlineEditReducer";

const initHabitsState: HabitsState = {
  habits: mockHabits,
  status: "success",
  error: undefined,
};

export const initInlineEditState: InlineEditState = {
  showEditInput: "",
  editInputValue: "",
};

export type HabitContextProps = {
  habitsState: HabitsState;
  dispatchHabit: React.Dispatch<HabitActions>;
  dispatchInlineEdit: React.Dispatch<InlineEditActions>;
  toggleHabit: (habit: Habit) => ToggleHabit;
  deleteHabit: (id: string) => DeleteHabit;
  reorderHabits: (payload: {
    source: number;
    destination: number;
    habit: Habit;
  }) => ReorderHabits;
  addHabit: (label: string) => AddHabit;
  editHabit: (label: string, id: string) => EditHabit;
  inlineEditState: InlineEditState;
  inlineEditShow: (id: string) => InlineEditShow;
  inlineEditUpdateInput: (value: string) => InlineEditUpdateInput;
  inlineEditReset: () => InlineEditReset;
  score: Score;
};

export const HabitProvider = ({ children }: { children: React.ReactNode }) => {
  const [habitsState, dispatchHabit] = useReducer(
    habitsReducer,
    initHabitsState
  );
  const [inlineEditState, dispatchInlineEdit] = useReducer(
    inlineEditReducer,
    initInlineEditState
  );

  return (
    <HabitContext.Provider
      value={{
        habitsState,
        dispatchHabit,
        dispatchInlineEdit,
        toggleHabit,
        deleteHabit,
        editHabit,
        addHabit,
        reorderHabits,
        inlineEditState,
        inlineEditShow,
        inlineEditUpdateInput,
        inlineEditReset,
        score: mockScore,
      }}
    >
      {children}
    </HabitContext.Provider>
  );
};

export const useHabits = () => {
  const context = React.useContext(HabitContext);
  if (context === undefined) {
    throw new Error("useHabit must be used within a HabitProvider");
  }
  return context;
};

const HabitContext = React.createContext<HabitContextProps | undefined>(
  undefined
);

HabitContext.displayName = "HabitContext";

export default HabitContext;
