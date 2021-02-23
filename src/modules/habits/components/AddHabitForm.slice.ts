import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AlertProps } from "modules/common/Alert";

interface AddHabitFormState {
  input: string;
  alert: AlertProps | null;
}

const initialState = {
  input: "",
  alert: null,
} as AddHabitFormState;

const addHabitForm = createSlice({
  name: "addHabitForm",
  initialState,
  reducers: {
    updateInput(state, action: PayloadAction<{ name: string }>) {
      state.input = action.payload.name;
    },
    resetForm(state) {
      state.input = "";
      state.alert = null;
    },
    setAlert(state, action: PayloadAction<{ alert: AlertProps }>) {
      state.alert = action.payload.alert;
    },
  },
});

export const { updateInput, resetForm, setAlert } = addHabitForm.actions;
export default addHabitForm.reducer;
