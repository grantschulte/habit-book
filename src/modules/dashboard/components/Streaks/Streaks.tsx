import StreakItem from "modules/dashboard/components/Streaks/StreakItem";
import React from "react";

interface StreaksProps {}

const mockItems = [
  {
    level: 3,
    habit: "Meditation",
  },
  {
    level: 5,
    habit: "Pushups",
  },
  {
    level: 1,
    habit: "Cooking",
  },
];

const Streaks: React.FC<StreaksProps> = () => {
  const streakItems = mockItems.sort((a, b) => b.level - a.level);
  // let streakItems: IStreakItem[] = [];

  if (!streakItems.length) {
    return (
      <div>
        Streaks are consecutive days of completing a habit. Make a streak and
        watch yourself change.
      </div>
    );
  }

  return (
    <div>
      {streakItems.map((item) => (
        <StreakItem item={item} key={`${item.habit}-${item.level}`} />
      ))}
    </div>
  );
};

export default Streaks;
