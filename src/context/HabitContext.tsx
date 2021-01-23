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

const initHabitsState: HabitsState = {
  habits: mockHabits,
  status: "success",
  error: undefined,
};

export type HabitContextProps = {
  habitsState: HabitsState;
  dispatch: React.Dispatch<HabitActions>;
  toggleHabit: (habit: Habit) => ToggleHabit;
  deleteHabit: (habit: Habit) => DeleteHabit;
  reorderHabits: (payload: {
    source: number;
    destination: number;
    habit: Habit;
  }) => ReorderHabits;
  addHabit: (label: string) => AddHabit;
  editHabit: (label: string, id: string) => EditHabit;
  score: Score;
};

export const HabitProvider = ({ children }: { children: React.ReactNode }) => {
  const [habitsState, dispatch] = useReducer(habitsReducer, initHabitsState);

  return (
    <HabitContext.Provider
      value={{
        habitsState,
        dispatch,
        toggleHabit,
        deleteHabit,
        editHabit,
        addHabit,
        reorderHabits,
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
