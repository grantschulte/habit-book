import HabitItem from "modules/common/HabitItem/HabitItem";
import React from "react";
import { HabitEvent } from "types";

interface TodayHabitListProps {
  habitEvents: HabitEvent[];
}

const TodayHabitList: React.FC<TodayHabitListProps> = ({ habitEvents }) => {
  return (
    <div>
      {habitEvents.map((he) => (
        <HabitItem habitEvent={he} key={he.id} />
      ))}
    </div>
  );
};

export default TodayHabitList;
