import { LOCAL_STORAGE_SORT_ORDER_KEY } from "config/constants";
import { DraggableLocation } from "lib/DragNDrop";
import { Habit, HabitOrder } from "types";
import ls from "utils/local-storage";

const useOrder = () => {
  const setOrder = (
    destination: DraggableLocation | undefined,
    source: DraggableLocation,
    habits: Habit[]
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

    // const h: Habit = allHabits[source.index];
    // dispatch(reorderHabits(h, source.index, destination.index));

    const habit: Habit = habits[source.index];
    const orderArray = [...habits];
    orderArray.splice(source.index, 1);
    orderArray.splice(destination.index, 0, habit);

    let orderObject: HabitOrder = {};
    orderArray.forEach((h, i) => {
      orderObject[h.id] = i;
    });

    let newSortOrder = JSON.stringify(orderObject);
    ls().setItem(LOCAL_STORAGE_SORT_ORDER_KEY, newSortOrder);
  };

  return { setOrder };
};

export default useOrder;
