import { combineReducers } from "@reduxjs/toolkit";
import addHabitFormReducer from "modules/habits/components/AddHabitForm.slice";
import themeReducer from "modules/settings/ThemeSelector/ThemeSelector.slice";
import appReducer from "./App.slice";

const rootReducer = combineReducers({
  app: appReducer,
  themes: themeReducer,
  addHabitForm: addHabitFormReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
