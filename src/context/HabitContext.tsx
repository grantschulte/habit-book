import React, { useReducer } from "react";
import { HabitActions } from "../state/habits/habit.actions";
import {
  HabitsState,
  habitsReducer,
  initHabitsState,
} from "../state/habits/habit.reducer";

export type HabitContextProps = {
  state: HabitsState;
  dispatch: React.Dispatch<HabitActions>;
};

const HabitContext = React.createContext<HabitContextProps>({
  state: initHabitsState,
  dispatch: () => null,
});

export const HabitProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(habitsReducer, initHabitsState);

  return (
    <HabitContext.Provider
      value={{
        state,
        dispatch,
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

HabitContext.displayName = "HabitContext";

export default HabitContext;
