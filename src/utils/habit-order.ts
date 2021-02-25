import { LOCAL_STORAGE_SORT_ORDER_KEY } from "config/constants";
import { DraggableLocation } from "react-beautiful-dnd";
import { Habit, HabitEvent, HabitOrder } from "types";
import ls from "./local-storage";

type OrderHabitsFn = (items: Habit[]) => Habit[];

export const orderHabits: OrderHabitsFn = (habits) => {
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

type OrderHabitEventsFn = (habitEvents: HabitEvent[]) => HabitEvent[];

export const orderHabitEvents: OrderHabitEventsFn = (habitEvents) => {
  const orderString = ls().getItem(LOCAL_STORAGE_SORT_ORDER_KEY);
  const sortOrder = orderString ? JSON.parse(orderString) : {};
  return habitEvents.sort(
    (a, b) => sortOrder[a.habit.id] - sortOrder[b.habit.id]
  );
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
