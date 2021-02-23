import useHabitEventUpdate from "hooks/useEditHabitEvent";
import HabitItem from "modules/common/HabitItem/HabitItem";
import { HabitLabel } from "modules/common/HabitItem/HabitLabel";
import React from "react";
import { HabitEvent } from "types";
import DoneIcon from "./DoneIcon";

interface TodayHabitListProps {
  habits: HabitEvent[];
}

const TodayHabitList: React.FC<TodayHabitListProps> = ({ habits }) => {
  const { mutate } = useHabitEventUpdate();
  const toggleHabitEvent = (id: string) => {
    mutate(id);
  };

  return (
    <div>
      {habits.map((h) => (
        <HabitItem
          done={h.done}
          key={h.id.toString()}
          onClick={() => {
            toggleHabitEvent(h.id);
          }}
        >
          <HabitLabel $isDone={h.done}>{h.habit.name}</HabitLabel>
          <DoneIcon $isDone={h.done} size="1.5rem" />
        </HabitItem>
      ))}
    </div>
  );
};

export default TodayHabitList;
