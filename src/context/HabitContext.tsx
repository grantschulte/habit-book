import React from "react";
import Habit from "../types/habit";
import mockData from "../data/mockHabits";

type RequestStatus = "fetching" | "success" | "failed";
type RequestError = {
  error: string;
  message: string;
};

type HabitContextProps = {
  data: Habit[] | [];
  updateHabit: (habit: Habit) => void;
  status: RequestStatus;
  error: RequestError | null;
};

export const HabitProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = React.useState<Habit[]>(mockData);
  const [error] = React.useState(null);
  const [status] = React.useState<RequestStatus>("success");

  const updateHabit = (habit: Habit) => {
    let updatedHabits: Habit[] = data.map((h: Habit) => {
      if (h.id === habit.id) {
        return {
          ...habit,
          done: !habit.done,
        };
      } else {
        return h;
      }
    });

    setData(updatedHabits);
  };

  return (
    <HabitContext.Provider value={{ data, updateHabit, status, error }}>
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

const HabitContext: React.Context<
  HabitContextProps | undefined
> = React.createContext<HabitContextProps | undefined>(undefined);

HabitContext.displayName = "HabitContext";

export default HabitContext;
