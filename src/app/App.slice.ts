import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HabitOrder } from "types";
import makeAppError from "utils/errors";

interface AppState {
  token: string | null;
  error: {
    type: string | null;
    message: string | null;
  };
  order: HabitOrder;
}

const initialState = {
  token: null,
  error: {
    type: null,
    message: null,
  },
  order: {},
} as AppState;

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setUserToken(state, action: PayloadAction<{ token: string }>) {
      state.token = action.payload.token;
    },
    setAppError(state, action: PayloadAction<{ error: string }>) {
      state.error = makeAppError(action.payload.error);
    },
    resetAppError(state) {
      state.error = initialState.error;
    },
    setHabitOrder(state, action: PayloadAction<{ order: HabitOrder }>) {
      state.order = action.payload.order;
    },
  },
});

export const {
  setUserToken,
  setAppError,
  resetAppError,
  setHabitOrder,
} = appSlice.actions;
export default appSlice.reducer;
