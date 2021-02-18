import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "modules/settings/ThemeSelector/ThemeSelector.slice";
import habitsReducer from "modules/habits/Habits.slice";
import addHabitFormReducer from "modules/habits/components/AddHabitForm.slice";
import todayReducer from "modules/today/Today.slice";
import appReducer from "./App.slice";

const rootReducer = combineReducers({
  app: appReducer,
  habits: habitsReducer,
  themes: themeReducer,
  today: todayReducer,
  addHabit: addHabitFormReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
