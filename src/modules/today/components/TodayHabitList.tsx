import HabitItem from "modules/common/HabitItem/HabitItem";
import { HabitLabel } from "modules/common/HabitItem/HabitLabel";
import { fetchToggleHabitEvent } from "../Today.slice";
import React from "react";
import { useDispatch } from "react-redux";
import { HabitEvent } from "types";
import DoneIcon from "./DoneIcon";
import useToken from "hooks/useToken";

interface TodayHabitListProps {
  habits: HabitEvent[];
}

const TodayHabitList: React.FC<TodayHabitListProps> = ({ habits }) => {
  const dispatch = useDispatch();
  const { getToken } = useToken();

  const toggleHabitEvent = async (id: string) => {
    const token = await getToken();
    dispatch(fetchToggleHabitEvent(id, token));
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
