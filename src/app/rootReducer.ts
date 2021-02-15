import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "modules/settings/ThemeSelector/ThemeSelector.slice";
import habitsReducer from "modules/habits/Habits.slice";

const rootReducer = combineReducers({
  habits: habitsReducer,
  themes: themeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
