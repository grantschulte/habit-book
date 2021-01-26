import Habit from "../../types/habit";
import { Score } from "../../types/habit-score";
import { RequestError, RequestStatus } from "../../types/types";
import {
  ADD,
  DELETE,
  DeleteHabit,
  EDIT,
  EditHabit,
  HabitActions,
  REORDER,
  TOGGLE,
  ToggleHabit,
} from "./habitActions";

export type HabitsState = {
  habits: Habit[];
  status: RequestStatus;
  error: RequestError | undefined;
  score?: Score;
};

const reduceToggleHabits = (state: HabitsState, action: ToggleHabit) => {
  let habits: Habit[] = state.habits.map((h: Habit) => {
    if (h.id === action.habit.id) {
      return {
        ...h,
        done: !action.habit.done,
      };
    } else {
      return h;
    }
  });

  return Object.assign({}, state, {
    habits,
  });
};

const reduceEditHabits = (state: HabitsState, action: EditHabit) => {
  let habits: Habit[] = state.habits.map((h: Habit) => {
    if (h.id === action.id) {
      return {
        ...h,
        label: action.label,
      };
    } else {
      return h;
    }
  });

  return Object.assign({}, state, {
    habits,
  });
};

const reduceDeleteHabit = (state: HabitsState, action: DeleteHabit) => {
  let habits: Habit[] = state.habits.filter((habit) => habit.id !== action.id);

  return Object.assign({}, state, {
    habits,
  });
};

export const habitsReducer = (state: HabitsState, action: HabitActions) => {
  switch (action.type) {
    case TOGGLE:
      return reduceToggleHabits(state, action);

    case ADD:
      const habits = [
        ...state.habits,
        {
          id: (Math.random() * 100).toString(),
          label: action.label,
          done: false,
        },
      ];

      return Object.assign({}, state, {
        habits,
      });

    case EDIT:
      return reduceEditHabits(state, action);

    case DELETE:
      return reduceDeleteHabit(state, action);

    case REORDER:
      const newHabits = [...state.habits];
      const newHabit = Object.assign({}, action.payload.habit);
      newHabits.splice(action.payload.source, 1);
      newHabits.splice(action.payload.destination, 0, newHabit);

      return Object.assign({}, state, {
        habits: newHabits,
      });
    default:
      throw new Error(`Action not found in reducer.`);
  }
};
