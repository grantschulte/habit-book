import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addHabit, getHabits, updateHabit } from "api";
import { AppThunk } from "app/store";
import {
  LOCAL_STORAGE_SORT_ORDER_KEY,
  REQUEST_DATE_FORMAT,
} from "config/constants";
import dayjs from "modules/common/Date";
import { setOrder as setHabitEventsOrder } from "modules/today/Today.slice";
import { Habit, RequestState } from "types";
import ls from "utils/local-storage";

type HabitsState = {
  habitsById: Record<string, Habit>;
  allHabits: Habit[];
  order: { [prop: string]: number };
} & RequestState;

const initialState = {
  habitsById: {},
  allHabits: [],
  status: "idle",
  error: null,
  order: {},
} as HabitsState;

const fetchFailure = (
  state: HabitsState,
  action: PayloadAction<{ error: string }>
) => {
  state.status = "failed";
  state.error = action.payload.error;
};

const fetchStart = (state: HabitsState) => {
  state.status = "fetching";
};

const habits = createSlice({
  name: "habits",
  initialState,
  reducers: {
    addHabitFailure: fetchFailure,
    addHabitStart: fetchStart,
    addHabitSuccess: (state, action: PayloadAction<{ habit: Habit }>) => {
      const { habit } = action.payload;
      state.status = "success";
      state.allHabits.push(habit);
      state.habitsById[habit.id] = habit;
    },
    editHabitFailure: fetchFailure,
    editHabitStart: fetchStart,
    editHabitSuccess: (state, action: PayloadAction<{ habit: Habit }>) => {
      const { habit } = action.payload;
      state.status = "success";

      const index = state.allHabits.findIndex((h) => h.id === habit.id);

      if (index === -1) {
        return;
      }

      if (!habit.active) {
        state.allHabits.splice(index, 1);
        delete state.habitsById[habit.id];
        return;
      }

      state.allHabits[index].name = habit.name;
      state.habitsById[habit.id].name = habit.name;
    },
    getHabitsStart: fetchStart,
    getHabitsSuccess: (state, action: PayloadAction<{ habits: Habit[] }>) => {
      const { habits } = action.payload;
      state.status = "success";
      state.allHabits = habits;
      habits.forEach((h, i) => {
        state.habitsById[h.id] = h;
      });
    },
    getHabitsFailure: fetchFailure,
    setOrder: (
      state,
      action: PayloadAction<{ order: { [prop: string]: number } }>
    ) => {
      const { order } = action.payload;
      state.allHabits.sort((a, b) => order[a.id] - order[b.id]);
    },
  },
});

export const {
  addHabitFailure,
  addHabitStart,
  addHabitSuccess,
  editHabitFailure,
  editHabitStart,
  editHabitSuccess,
  getHabitsStart,
  getHabitsSuccess,
  getHabitsFailure,
  setOrder,
} = habits.actions;

export default habits.reducer;

export const reorderHabits = (
  habit: Habit,
  source: number,
  destination: number
): AppThunk => {
  return (dispatch, getState) => {
    const { allHabits } = getState().habits;
    const orderArray = [...allHabits];
    orderArray.splice(source, 1);
    orderArray.splice(destination, 0, habit);
    let o: { [prop: string]: number } = {};
    orderArray.forEach((h, i) => {
      o[h.id] = i;
    });
    dispatch(setOrderInStorage(o));
  };
};

export const setOrderInStorage = (order: {
  [prop: string]: number;
}): AppThunk => {
  return (dispatch) => {
    let newSortOrder = JSON.stringify(order);
    ls().setItem(LOCAL_STORAGE_SORT_ORDER_KEY, newSortOrder);
    dispatch(setOrder({ order }));
    dispatch(setHabitEventsOrder({ order }));
  };
};

export const initOrder = (habits: Habit[]): AppThunk => {
  return (dispatch) => {
    let sortOrderString = ls().getItem(LOCAL_STORAGE_SORT_ORDER_KEY);
    let o: { [prop: string]: number } = {};

    if (!sortOrderString) {
      habits.forEach((h, i) => {
        o[h.id] = i;
      });
    }

    let sortOrder: { [prop: string]: number } = sortOrderString
      ? JSON.parse(sortOrderString)
      : o;
    dispatch(setOrder({ order: sortOrder }));
    dispatch(setHabitEventsOrder({ order: sortOrder }));
  };
};

export const fetchHabits = (): AppThunk => {
  return async (dispatch, getState) => {
    const { token } = getState().app;
    dispatch(getHabitsStart());

    let habits;

    try {
      const res = await getHabits(token);
      habits = await res.json();

      if (habits.error) {
        dispatch(getHabitsFailure({ error: "error" }));
        return;
      }
    } catch (error) {
      dispatch(getHabitsFailure(error.toString()));
      return;
    }

    dispatch(getHabitsSuccess({ habits }));
    dispatch(initOrder(habits));
  };
};

export const fetchAddHabit = (name: string): AppThunk => {
  return async (dispatch, getState) => {
    const { token } = getState().app;
    dispatch(addHabitStart());

    let habit;

    const date = dayjs().format(REQUEST_DATE_FORMAT);

    try {
      const res = await addHabit(
        {
          date,
          name,
        },
        token
      );
      habit = await res.json();

      if (!habit || habit.error) {
        dispatch(addHabitFailure({ error: "error" }));
        return;
      }
    } catch (error) {
      dispatch(addHabitFailure(error.toString()));
      return;
    }

    dispatch(addHabitSuccess({ habit }));
  };
};

export const fetchEditHabit = (
  id: string,
  params: {
    name?: string;
    active?: boolean;
  }
): AppThunk => {
  return async (dispatch, getState) => {
    const { token } = getState().app;

    let habit;

    const date = dayjs().format(REQUEST_DATE_FORMAT);

    try {
      const res = await updateHabit(
        {
          date,
          ...params,
        },
        id,
        token
      );
      habit = await res.json();

      if (!habit || habit.error) {
        dispatch(editHabitFailure({ error: "error" }));
        return;
      }
    } catch (error) {
      console.log(error);
      return;
    }

    dispatch(editHabitSuccess({ habit }));
  };
};
