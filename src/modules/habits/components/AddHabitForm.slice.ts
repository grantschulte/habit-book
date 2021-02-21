import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AlertProps } from "modules/common/Alert";

interface AddHabitFormState {
  input: string;
  message: AlertProps | null;
}

const initialState = {
  input: "",
  message: null,
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
      state.message = null;
    },
    setAlert(state, action: PayloadAction<AlertProps>) {
      const { type, title, message } = action.payload;
      state.message = {
        type,
        message,
        title,
      };
    },
  },
});

export const { updateInput, resetForm, setAlert } = addHabitForm.actions;
export default addHabitForm.reducer;
