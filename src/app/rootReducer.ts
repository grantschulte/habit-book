import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "modules/settings/ThemeSelector/ThemeSelector.slice";

const rootReducer = combineReducers({
  themes: themeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
