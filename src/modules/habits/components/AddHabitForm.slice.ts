import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "app/store";
import { AlertProps, AlertType } from "modules/common/Alert";
import { fetchAddHabit } from "modules/habits/Habits.slice";

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

export const validateForm = (input: string): AppThunk => {
  return (dispatch, getState) => {
    const { allHabits } = getState().habits;

    const exists = allHabits.find(
      (habit) => habit.name.toLowerCase() === input.toLowerCase()
    );

    if (exists) {
      dispatch(
        setAlert({
          type: AlertType.Error,
          title: "Duplicate habit found",
          message: "Only one habit of the same type can be added.",
        })
      );
      return;
    }

    if (allHabits.length > 4) {
      dispatch(
        setAlert({
          type: AlertType.Error,
          title: "You can't have more than five habits...",
          message:
            "Research suggests you are more likely to achieve attainable goals. If you want to add another habit, delete one first.",
        })
      );
      return;
    }

    dispatch(fetchAddHabit(input));
    dispatch(resetForm());
  };
};

export const { updateInput, resetForm, setAlert } = addHabitForm.actions;
export default addHabitForm.reducer;
