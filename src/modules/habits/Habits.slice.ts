import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "app/store";
import { mockHabits } from "data/mockHabits";
import { Habit } from "types";

interface RequestState {
  isLoading: boolean;
  error?: string | null;
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
  isLoading: false,
  error: null,
} as HabitsState;

const habits = createSlice({
  name: "habits",
  initialState,
  reducers: {
    addHabit: (state, action: PayloadAction<{ name: string }>) => {
      const id = (Math.random() * 100).toString();
      const habit = {
        id,
        label: action.payload.name,
        done: false,
      };
      state.allHabits.push(habit);
      state.habitsById[id] = habit;
    },
    deleteHabit: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      state.allHabits = state.allHabits.filter((h) => h.id !== id);
      delete state.habitsById[id];
    },
    editHabit: (state, action: PayloadAction<{ id: string; name: string }>) => {
      const { name, id } = action.payload;
      let habit = state.allHabits.find((h) => h.id === id);
      if (habit) {
        habit.label = name;
      }
      state.habitsById[id].label = name;
    },
    getHabitsStart: (state) => {
      state.isLoading = true;
    },
    getHabitsSuccess: (state, action: PayloadAction<{ habits: Habit[] }>) => {
      const { habits } = action.payload;
      state.isLoading = false;
      state.allHabits = habits;
      habits.forEach((h) => {
        state.habitsById[h.id] = h;
      });
    },
    getHabitsFailure: (state, action: PayloadAction<{ error: string }>) => {
      state.isLoading = false;
      state.error = action.payload.error;
    },
    reorderHabits: (state, action: PayloadAction<ReorderPayload>) => {
      const { source, destination, habit } = action.payload;
      state.allHabits.splice(source, 1);
      state.allHabits.splice(destination, 0, habit);
    },
    toggleHabitDone: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      const habit = state.allHabits.find((h) => h.id === id);
      if (habit) {
        habit.done = !habit.done;
      }
      state.habitsById[id].done = !state.habitsById[id].done;
    },
  },
});

export const {
  addHabit,
  deleteHabit,
  editHabit,
  getHabitsStart,
  getHabitsSuccess,
  getHabitsFailure,
  reorderHabits,
  toggleHabitDone,
} = habits.actions;

export const fetchHabits = (): AppThunk => {
  return async (dispatch, getState) => {
    dispatch(getHabitsStart());
    const { allHabits } = getState().habits;

    let habits: Habit[] = allHabits.length > 0 ? allHabits : mockHabits;
    // try {
    //   const res = await fetch("http://localhost:3000/mockHabits.json");
    //   habits = await res.json();
    // } catch (error) {
    //   dispatch(getHabitsFailure(error.toString()));
    //   return;
    // }

    dispatch(getHabitsSuccess({ habits }));
  };
};

export default habits.reducer;
