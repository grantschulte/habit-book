import { LOCAL_STORAGE_SORT_ORDER_KEY } from "config/constants";
import { DraggableLocation } from "react-beautiful-dnd";
import { Habit, HabitOrder } from "types";
import ls from "./local-storage";

export const orderHabits = (habits: Habit[]) => {
  const orderString = ls().getItem(LOCAL_STORAGE_SORT_ORDER_KEY);

  let orderObject: HabitOrder = {};

  if (!orderString) {
    habits.forEach((h, i) => {
      orderObject[h.id] = i;
    });
  }

  const sortOrder = orderString ? JSON.parse(orderString) : orderObject;

  return habits.sort((a, b) => sortOrder[a.id] - sortOrder[b.id]);
};

export const setOrder = (
  destination: DraggableLocation | undefined,
  source: DraggableLocation,
  habits: Habit[] | undefined
) => {
  if (!destination || !habits?.length) {
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
