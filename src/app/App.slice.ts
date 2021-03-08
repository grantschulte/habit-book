import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FontStack } from "modules/settings/FontSelector/FontSelector";
import { HabitOrder } from "types";

interface AppState {
  token: string | null;
  error: Error | null;
  order: HabitOrder;
  fontStack: FontStack;
}

const initialState = {
  token: null,
  error: null,
  order: {},
  fontStack: "mono",
} as AppState;

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setUserToken(state, action: PayloadAction<{ token: string }>) {
      state.token = action.payload.token;
    },
    setAppError(state, action: PayloadAction<{ error: Error | null }>) {
      state.error = action.payload.error;
    },
    resetAppError(state) {
      state.error = initialState.error;
    },
    setHabitOrder(state, action: PayloadAction<{ order: HabitOrder }>) {
      state.order = action.payload.order;
    },
    setFontStack(state, action: PayloadAction<{ fontStack: FontStack }>) {
      state.fontStack = action.payload.fontStack;
    },
  },
});

export const {
  setUserToken,
  setAppError,
  resetAppError,
  setHabitOrder,
  setFontStack,
} = appSlice.actions;
export default appSlice.reducer;
