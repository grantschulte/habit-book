import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  token: string | null;
}

const initialState = {
  token: null,
} as AppState;

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setUserToken(state, action: PayloadAction<{ token: string }>) {
      state.token = action.payload.token;
    },
  },
});

export const { setUserToken } = appSlice.actions;
export default appSlice.reducer;
