import { Habit, Score } from "types";

export const mockHabits: Habit[] = [
  {
    id: "1",
    label: "Workout",
    order: 2,
    done: false,
  },
  {
    id: "2",
    label: "Meditate",
    order: 1,
    done: false,
  },
  {
    id: "3",
    label: "Read",
    order: 3,
    done: false,
  },
];

export const mockScore: Score = {
  completedPoints: 12,
  possiblePointsInWeek: 21,
};
