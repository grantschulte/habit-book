import React from "react";
import Habit from "../types/habit";
import { mockHabits, mockScore } from "../data/mockHabits";
import { Score } from "../types/habit-score";
import { RequestStatus, RequestError } from "../types/request";

type HabitContextProps = {
  data: Habit[] | [];
  score: Score;
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
  const [data, setData] = React.useState<Habit[]>(mockHabits);
  const [error] = React.useState<RequestError | undefined>(undefined);
  const [status] = React.useState<RequestStatus>("success");
  const [message, setMessage] = React.useState<string>(messages[0]);
  const [score, setScore] = React.useState<Score>(mockScore);

  const updateHabit = (habit: Habit) => {
    const doneCount = data.filter((h) => h.done).length;

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

    const updatedDoneCount = updatedHabits.filter((h) => h.done).length;
    setData(updatedHabits);
    setMessage(messages[updatedDoneCount]);
    updateScore(doneCount, updatedDoneCount);
  };

  const updateScore = (doneCount: number, updatedDoneCount: number) => {
    let completed =
      updatedDoneCount - doneCount > 0
        ? score.completedPoints + 1
        : score.completedPoints - 1;

    const newScore = {
      ...score,
      completedPoints: completed,
    };
    setScore(newScore);
  };

  return (
    <HabitContext.Provider
      value={{ data, updateHabit, message, status, error, score }}
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
