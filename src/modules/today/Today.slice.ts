import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getHabitEvents, updateHabitEvent } from "api";
import { setAppError } from "app/App.slice";
import { AppThunk } from "app/store";
import {
  LOCAL_STORAGE_SORT_ORDER_KEY,
  REQUEST_DATE_FORMAT,
} from "config/constants";
import dayjs from "dayjs";
import {
  HabitEvent,
  HabitOrder,
  ResponsePayload,
  RequestState,
  ResponseErrorState,
} from "types";
import ls from "utils/local-storage";

type TodayState = {
  allHabitEvents: HabitEvent[];
  habitEventsById: Record<string, HabitEvent>;
} & RequestState;

let initialState = {
  allHabitEvents: [],
  habitEventsById: {},
  status: "idle",
} as TodayState;

const fetchFailure = (
  state: TodayState,
  action: PayloadAction<ResponseErrorState>
) => {
  state.status = "failed";
  state.error = action.payload.error;
};

const todaySlice = createSlice({
  name: "today",
  initialState,
  reducers: {
    getHabitEventsStart: (state: TodayState) => {
      state.status = "fetching";
    },
    getHabitEventsSuccess: (
      state,
      action: PayloadAction<ResponsePayload<HabitEvent[]>>
    ) => {
      const { data } = action.payload;
      state.status = "success";
      state.allHabitEvents = data;
      data.forEach((h) => {
        state.habitEventsById[h.id] = h;
      });
    },
    getHabitEventsFailure: fetchFailure,
    setOrder: (state, action: PayloadAction<{ order: HabitOrder }>) => {
      const { order } = action.payload;
      state.allHabitEvents.sort(
        (a, b) => order[a.habit.id] - order[b.habit.id]
      );
    },
    toggleHabitEventFailure: fetchFailure,
    toggleHabitEventSuccess: (
      state,
      action: PayloadAction<ResponsePayload<HabitEvent>>
    ) => {
      const { data } = action.payload;
      state.status = "success";
      const he = state.allHabitEvents.find((he) => he.id === data.id);
      if (he) {
        he.done = data.done;
      }
      state.habitEventsById[data.id].done = data.done;
    },
  },
});

export const {
  getHabitEventsStart,
  getHabitEventsSuccess,
  getHabitEventsFailure,
  setOrder,
  toggleHabitEventFailure,
  toggleHabitEventSuccess,
} = todaySlice.actions;
export default todaySlice.reducer;

export const initOrder = (): AppThunk => {
  return (dispatch, getState) => {
    let { allHabits } = getState().habits;
    let sortOrderString = ls().getItem(LOCAL_STORAGE_SORT_ORDER_KEY);
    let o: HabitOrder = {};

    if (!sortOrderString) {
      allHabits.forEach((h, i) => {
        o[h.id] = i;
      });
    }

    let sortOrder: HabitOrder = sortOrderString
      ? JSON.parse(sortOrderString)
      : o;
    dispatch(setOrder({ order: sortOrder }));
  };
};

export const fetchHabitEvents = (token: string): AppThunk => {
  return async (dispatch) => {
    dispatch(getHabitEventsStart());
    const date = dayjs().format(REQUEST_DATE_FORMAT);
    let habitEvents;

    try {
      habitEvents = await getHabitEvents({ date }, token);
    } catch (error) {
      dispatch(setAppError({ error: error.message }));
      return;
    }

    dispatch(getHabitEventsSuccess({ data: habitEvents }));
    dispatch(initOrder());
  };
};

export const fetchToggleHabitEvent = (id: string, token: string): AppThunk => {
  return async (dispatch) => {
    let habitEvent;

    try {
      habitEvent = await updateHabitEvent({ id }, token);
    } catch (error) {
      dispatch(setAppError({ error: error.message }));
      return;
    }

    dispatch(toggleHabitEventSuccess({ data: habitEvent }));
  };
};
