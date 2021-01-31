import React, { useReducer } from "react";
import Habit from "../types/habit";
import { mockScore } from "../data/mockHabits";
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
} from "../state/habits/habit.actions";
import {
  HabitsState,
  habitsReducer,
  initHabitsState,
} from "../state/habits/habit.reducer";

export type HabitContextProps = {
  habitsState: HabitsState;
  dispatchHabit: React.Dispatch<HabitActions>;
  toggleHabit: (habit: Habit) => ToggleHabit;
  deleteHabit: (id: string) => DeleteHabit;
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
  const [habitsState, dispatchHabit] = useReducer(
    habitsReducer,
    initHabitsState
  );

  return (
    <HabitContext.Provider
      value={{
        habitsState,
        dispatchHabit,
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
