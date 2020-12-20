import React from "react";
import Habit from "../types/habit";
import mockData from "../data/mockHabits";

type RequestStatus = "idle" | "fetching" | "success" | "failed";
type RequestError = {
  error: string;
  message: string;
};

type HabitContextProps = {
  data: Habit[] | [];
  updateHabit: (habit: Habit) => void;
  message: string;
  status: RequestStatus;
  error: RequestError | undefined;
};

const messages = [
  "A single step is all it takes.",
  "One more and you're on a roll.",
  "Let's finish this thing off!",
  "Well done! Tomorrow is a new day.",
];

export const HabitProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = React.useState<Habit[]>(mockData);
  const [error] = React.useState<RequestError | undefined>(undefined);
  const [status] = React.useState<RequestStatus>("success");
  const [message, setMessage] = React.useState<string>(messages[0]);

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

    const doneCount = updatedHabits.filter((h) => h.done).length;
    setData(updatedHabits);
    setMessage(messages[doneCount]);
  };

  return (
    <HabitContext.Provider
      value={{ data, updateHabit, message, status, error }}
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

const HabitContext: React.Context<
  HabitContextProps | undefined
> = React.createContext<HabitContextProps | undefined>(undefined);

HabitContext.displayName = "HabitContext";

export default HabitContext;
