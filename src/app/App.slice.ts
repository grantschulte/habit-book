import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import makeAppError from "utils/errors";

interface AppState {
  token: string | null;
  error: {
    type: string | null;
    message: string | null;
  };
}

const initialState = {
  token: null,
  error: {
    type: null,
    message: null,
  },
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
  },
});

export const { setUserToken, setAppError, resetAppError } = appSlice.actions;
export default appSlice.reducer;
