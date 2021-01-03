import Habit from "./habit";

export type HabitHistoryScore = {
  fraction: string;
  percentage: string;
};

export type HabitHistoryDay = {
  date: string;
  habits: Habit[];
};

// export type HabitHistoryWeek = {
//   weekNumber: number;
//   days: HabitHistoryDay[];
//   score: HabitHistoryScore;
// };

export type HabitHistoryMonth = {
  month: string;
  days: HabitHistoryDay[];
  score: HabitHistoryScore;
};

export type HabitHistory = {
  year: number;
  months: HabitHistoryMonth[];
  score: HabitHistoryScore;
};
