import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "app/store";
import { LOCAL_STORAGE_SORT_ORDER_KEY } from "config/constants";
import dayjs from "dayjs";
import ls from "hooks/useLocalStorage";
import { HabitEvent, RequestStatus } from "types";

interface TodayState {
  allHabitEvents: HabitEvent[];
  habitEventsById: Record<string, HabitEvent>;
  status: RequestStatus;
  error: Error | string | null;
}

let initialState = {
  allHabitEvents: [],
  habitEventsById: {},
  status: "idle",
  error: null,
} as TodayState;

const todaySlice = createSlice({
  name: "today",
  initialState,
  reducers: {
    getHabitEventsStart: (state: TodayState) => {
      state.status = "fetching";
    },
    getHabitEventsSuccess: (
      state,
      action: PayloadAction<{ habitEvents: HabitEvent[] }>
    ) => {
      const { habitEvents } = action.payload;
      state.status = "success";
      state.allHabitEvents = habitEvents;
      habitEvents.forEach((h) => {
        state.habitEventsById[h.id] = h;
      });
    },
    getHabitEventsFailure: (
      state: TodayState,
      action: PayloadAction<{ error: string }>
    ) => {
      state.status = "failed";
      state.error = action.payload.error;
    },
    setOrder: (
      state,
      action: PayloadAction<{ order: { [prop: string]: number } }>
    ) => {
      const { order } = action.payload;
      state.allHabitEvents.sort(
        (a, b) => order[a.habit.id] - order[b.habit.id]
      );
    },
    toggleHabitEventSuccess: (
      state,
      action: PayloadAction<{ habitEvent: HabitEvent }>
    ) => {
      const { habitEvent } = action.payload;
      const he = state.allHabitEvents.find((he) => he.id === habitEvent.id);
      if (he) {
        he.done = habitEvent.done;
      }
      state.habitEventsById[habitEvent.id].done = habitEvent.done;
    },
  },
});

export const {
  getHabitEventsStart,
  getHabitEventsSuccess,
  getHabitEventsFailure,
  setOrder,
  toggleHabitEventSuccess,
} = todaySlice.actions;
export default todaySlice.reducer;

export const initOrder = (): AppThunk => {
  return (dispatch, getState) => {
    let { allHabits } = getState().habits;
    let sortOrderString = ls().getItem(LOCAL_STORAGE_SORT_ORDER_KEY);
    let o: { [prop: string]: number } = {};

    if (!sortOrderString) {
      allHabits.forEach((h, i) => {
        o[h.id] = i;
      });
    }

    let sortOrder: { [prop: string]: number } = sortOrderString
      ? JSON.parse(sortOrderString)
      : o;
    dispatch(setOrder({ order: sortOrder }));
  };
};

export const fetchHabitEvents = (): AppThunk => {
  return async (dispatch, getState) => {
    const { token } = getState().app;
    dispatch(getHabitEventsStart());

    const date = dayjs().format("YYYY-MM-DD");

    let habitEvents;

    try {
      const res = await fetch(
        `http://localhost:8080/api/v1/habit-events?date=${date}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      habitEvents = await res.json();

      if (habitEvents.error) {
        dispatch(getHabitEventsFailure({ error: "error" }));
        return;
      }
    } catch (error) {
      dispatch(getHabitEventsFailure(error.toString()));
      return;
    }

    dispatch(getHabitEventsSuccess({ habitEvents }));
    dispatch(initOrder());
  };
};

export const fetchToggleHabitEvent = (id: string): AppThunk => {
  return async (dispatch, getState) => {
    const { token } = getState().app;

    let habitEvent;

    try {
      const res = await fetch(
        `http://localhost:8080/api/v1/habit-events/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      habitEvent = await res.json();
    } catch (error) {
      console.log(error);
      return;
    }

    dispatch(toggleHabitEventSuccess({ habitEvent }));
  };
};
