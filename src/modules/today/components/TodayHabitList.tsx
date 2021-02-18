import HabitItem from "modules/common/HabitItem/HabitItem";
import { HabitLabel } from "modules/common/HabitItem/HabitLabel";
import { fetchToggleHabitEvent } from "../Today.slice";
import React from "react";
import { useDispatch } from "react-redux";
import { HabitEvent } from "types";
import DoneIcon from "./DoneIcon";

interface TodayHabitListProps {
  habits: HabitEvent[];
}

const TodayHabitList: React.FC<TodayHabitListProps> = ({ habits }) => {
  const dispatch = useDispatch();

  return (
    <div>
      {habits.map((h) => {
        return h.habit.active ? (
          <HabitItem
            done={h.done}
            key={h.id.toString()}
            onClick={() => {
              dispatch(fetchToggleHabitEvent(h.id));
            }}
          >
            <HabitLabel $isDone={h.done}>{h.habit.name}</HabitLabel>
            <DoneIcon $isDone={h.done} size="1.5rem" />
          </HabitItem>
        ) : null;
      })}
    </div>
  );
};

export default TodayHabitList;
