// Request

export type RequestStatus = "idle" | "fetching" | "success" | "failed";

export type RequestError = {
  error: string;
  message: string;
};

// Habit

export type Habit = {
  id: string;
  label: string;
  done: boolean;
  order?: number;
};

// Habit History

export type HabitHistoryScore = {
  fraction: string;
  percentage: string;
};

export type HabitHistoryDay = {
  date: string;
  habits: Habit[];
};

export type HabitHistoryWeek = {
  weekNumber: number;
  days: HabitHistoryDay[];
  score: HabitHistoryScore;
};

export type HabitHistoryMonth = {
  name: string;
  days: HabitHistoryDay[];
  score: HabitHistoryScore;
};

export type HabitHistory = {
  year: number;
  habits: Habit[];
  months: HabitHistoryMonth[];
  score: HabitHistoryScore;
};

export type Score = {
  completedPoints: number;
  possiblePointsInWeek: number;
};
