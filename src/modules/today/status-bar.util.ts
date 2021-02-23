import { HabitEvent } from "types";

const getStatusBarWidth = (habitEvents: HabitEvent[] | undefined) => {
  if (!habitEvents) return "0%";

  const doneCount = habitEvents.reduce((a, b) => {
    return b.done ? a + 1 : a;
  }, 0);
  const activeEventsCount = habitEvents.filter((he) => he.habit.active);
  const percentageDone = Math.ceil(
    (doneCount / activeEventsCount.length) * 100
  );
  return `${percentageDone}%`;
};

export default getStatusBarWidth;
