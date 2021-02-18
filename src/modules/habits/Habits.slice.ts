import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "app/store";
import { REQUEST_DATE_FORMAT } from "config/constants";
import dayjs from "modules/common/Date";
import { Habit, HabitEvent, RequestStatus } from "types";

interface RequestState {
  status: RequestStatus;
  error: Error | string | null;
}

type HabitsState = {
  habitsById: Record<string, Habit>;
  allHabits: Habit[];
} & RequestState;

interface ReorderPayload {
  source: number;
  destination: number;
  habit: Habit;
}

const initialState = {
  habitsById: {},
  allHabits: [],
  status: "idle",
  error: null,
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
      state.allHabits.push(habit);
      state.habitsById[habit.id] = habit;
    },
    makeHabitInactiveFailure: fetchFailure,
    makeHabitInactiveStart: fetchStart,
    makeHabitInactiveSuccess: (
      state,
      action: PayloadAction<{ habit: Habit }>
    ) => {
      const { habit } = action.payload;
      const index = state.allHabits.findIndex((h) => h.id === habit.id);
      if (index !== -1) state.allHabits.splice(index, 1);
      delete state.habitsById[habit.id];
    },
    editHabitFailure: fetchFailure,
    editHabitStart: fetchStart,
    editHabitSuccess: (state, action: PayloadAction<{ habit: Habit }>) => {
      const { habit } = action.payload;
      let h = state.allHabits.find((h) => h.id === habit.id);
      if (h) {
        h.name = habit.name;
        state.habitsById[habit.id].name = habit.name;
      }
    },
    getHabitsStart: fetchStart,
    getHabitsSuccess: (state, action: PayloadAction<{ habits: Habit[] }>) => {
      const { habits } = action.payload;
      state.status = "success";
      state.allHabits = habits;
      habits.forEach((h) => {
        state.habitsById[h.id] = h;
      });
    },
    getHabitsFailure: fetchFailure,
    reorderHabits: (state, action: PayloadAction<ReorderPayload>) => {
      const { source, destination, habit } = action.payload;
      state.allHabits.splice(source, 1);
      state.allHabits.splice(destination, 0, habit);
    },
    updateHabit: (state, action: PayloadAction<{ habit: HabitEvent }>) => {
      state.allHabits.find((h) => h.id === action.payload.habit.id);
    },
  },
});

export const {
  addHabitFailure,
  addHabitStart,
  addHabitSuccess,
  makeHabitInactiveFailure,
  makeHabitInactiveStart,
  makeHabitInactiveSuccess,
  editHabitFailure,
  editHabitStart,
  editHabitSuccess,
  getHabitsStart,
  getHabitsSuccess,
  getHabitsFailure,
  reorderHabits,
  updateHabit,
} = habits.actions;

export default habits.reducer;

export const fetchHabits = (): AppThunk => {
  return async (dispatch, getState) => {
    const { token } = getState().app;
    dispatch(getHabitsStart());

    let habits;

    try {
      const res = await fetch("http://localhost:8080/api/v1/habits", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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
  };
};

export const fetchAddHabit = (name: string): AppThunk => {
  return async (dispatch, getState) => {
    const { token } = getState().app;
    dispatch(addHabitStart());

    let habit;

    const date = dayjs().format(REQUEST_DATE_FORMAT);

    try {
      const res = await fetch("http://localhost:8080/api/v1/habits", {
        method: "POST",
        body: JSON.stringify({
          date,
          name,
        }),
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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

export const fetchEditHabit = (id: string, name: string): AppThunk => {
  return async (dispatch, getState) => {
    const { token } = getState().app;

    let habit;

    try {
      const res = await fetch(`http://localhost:8080/api/v1/habits/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          name,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
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

export const fetchMakeHabitInactive = (id: string): AppThunk => {
  return async (dispatch, getState) => {
    const { token } = getState().app;

    let habit;

    try {
      const res = await fetch(`http://localhost:8080/api/v1/habits/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          active: false,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      habit = await res.json();

      if (!habit || habit.error) {
        dispatch(makeHabitInactiveFailure({ error: "error" }));
        return;
      }
    } catch (error) {
      console.log(error);
      return;
    }

    dispatch(makeHabitInactiveSuccess({ habit }));
  };
};
