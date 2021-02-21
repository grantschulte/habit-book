import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addHabit, getHabits, updateHabit } from "api";
import { setAppError } from "app/App.slice";
import { AppThunk } from "app/store";
import {
  LOCAL_STORAGE_SORT_ORDER_KEY,
  REQUEST_DATE_FORMAT,
} from "config/constants";
import dayjs from "modules/common/Date";
import {
  setOrder as setHabitEventsOrder,
  setStale,
} from "modules/today/Today.slice";
import {
  Habit,
  HabitOrder,
  RequestState,
  RequestStatus,
  ResponseErrorState,
  ResponsePayload,
} from "types";
import ls from "utils/local-storage";

type HabitsState = {
  habitsById: Record<string, Habit>;
  allHabits: Habit[];
  order: HabitOrder;
  stale: boolean;
} & RequestState;

const initialState = {
  habitsById: {},
  allHabits: [],
  status: "idle",
  error: null,
  order: {},
  stale: false,
} as HabitsState;

const fetchFailure = (
  state: HabitsState,
  action: PayloadAction<ResponseErrorState>
) => {
  state.status = RequestStatus.Failed;
  state.error = action.payload.error;
};

const fetchStart = (state: HabitsState) => {
  state.status = RequestStatus.Fetching;
};

const habits = createSlice({
  name: "habits",
  initialState,
  reducers: {
    addHabitFailure: fetchFailure,
    addHabitStart: fetchStart,
    addHabitSuccess: (state, action: PayloadAction<ResponsePayload<Habit>>) => {
      const { data } = action.payload;
      state.status = RequestStatus.Success;
      state.allHabits.push(data);
      state.habitsById[data.id] = data;
    },
    editHabitFailure: fetchFailure,
    editHabitStart: fetchStart,
    editHabitSuccess: (
      state,
      action: PayloadAction<ResponsePayload<Habit>>
    ) => {
      const { data } = action.payload;
      state.status = RequestStatus.Success;

      const index = state.allHabits.findIndex((h) => h.id === data.id);

      if (index === -1) {
        return;
      }

      if (!data.active) {
        state.allHabits.splice(index, 1);
        delete state.habitsById[data.id];
        return;
      }

      state.allHabits[index].name = data.name;
      state.habitsById[data.id].name = data.name;
    },
    getHabitsStart: fetchStart,
    getHabitsSuccess: (
      state,
      action: PayloadAction<ResponsePayload<Habit[]>>
    ) => {
      const { data } = action.payload;
      state.status = RequestStatus.Success;
      state.allHabits = data;
      data.forEach((h) => {
        state.habitsById[h.id] = h;
      });
    },
    getHabitsFailure: fetchFailure,
    setOrder: (state, action: PayloadAction<{ order: HabitOrder }>) => {
      const { order } = action.payload;
      state.allHabits.sort((a, b) => order[a.id] - order[b.id]);
    },
    setStale: (state, action: PayloadAction<{ stale: boolean }>) => {
      state.stale = action.payload.stale;
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
    let o: HabitOrder = {};
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
    let o: HabitOrder = {};

    if (!sortOrderString) {
      habits.forEach((h, i) => {
        o[h.id] = i;
      });
    }

    let sortOrder: HabitOrder = sortOrderString
      ? JSON.parse(sortOrderString)
      : o;
    dispatch(setOrder({ order: sortOrder }));
    dispatch(setHabitEventsOrder({ order: sortOrder }));
  };
};

export const fetchHabits = (token: string): AppThunk => {
  return async (dispatch) => {
    dispatch(getHabitsStart());
    let habits;

    try {
      habits = await getHabits(token);
    } catch (error) {
      dispatch(setAppError({ error: error.message }));
      return;
    }

    dispatch(getHabitsSuccess({ data: habits }));
    dispatch(initOrder(habits));
  };
};

export const fetchAddHabit = (name: string, token: string): AppThunk => {
  return async (dispatch) => {
    dispatch(addHabitStart());
    const date = dayjs().format(REQUEST_DATE_FORMAT);
    let habit;

    try {
      habit = await addHabit(
        {
          date,
          name,
        },
        token
      );
    } catch (error) {
      dispatch(setAppError({ error: error.message }));
      return;
    }

    dispatch(addHabitSuccess({ data: habit }));
    dispatch(setStale({ stale: true }));
  };
};

export interface FetchEditHabitParams {
  name?: string;
  active?: boolean;
}

export const fetchEditHabit = (
  id: string,
  params: FetchEditHabitParams,
  token: string
): AppThunk => {
  return async (dispatch, getState) => {
    const date = dayjs().format(REQUEST_DATE_FORMAT);
    let habit;

    try {
      habit = await updateHabit(
        {
          date,
          ...params,
        },
        id,
        token
      );
    } catch (error) {
      dispatch(setAppError({ error: error.message }));
      return;
    }

    dispatch(editHabitSuccess({ data: habit }));
    dispatch(setStale({ stale: true }));
  };
};
