import { RootState } from "app/rootReducer";
import { DraggableLocation } from "lib/DragNDrop";
import { reorderHabits } from "modules/habits/Habits.slice";
import { useDispatch, useSelector } from "react-redux";
import { Habit } from "types";

const useDrag = () => {
  const dispatch = useDispatch();
  const { allHabits } = useSelector((state: RootState) => state.habits);

  const reorder = (
    destination: DraggableLocation | undefined,
    source: DraggableLocation
  ) => {
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const h: Habit = allHabits[source.index];
    dispatch(reorderHabits(h, source.index, destination.index));
  };

  return { reorder };
};

export default useDrag;
