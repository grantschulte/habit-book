import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "app/store";
import { DEFAULT_THEME, LOCAL_STORAGE_THEME } from "config/constants";
import localStorage from "utils/local-storage";

export interface ThemeName {
  currentTheme: string;
}

export type ThemeSelectorState = ThemeName;

let initialState = {
  currentTheme: DEFAULT_THEME,
} as ThemeSelectorState;

const themeSlice = createSlice({
  name: "themes",
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<ThemeName>) {
      state.currentTheme = action.payload.currentTheme;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;

export const getThemeFromStorage = (): AppThunk => {
  return (dispatch) => {
    const { getItem } = localStorage();
    const theme = getItem(LOCAL_STORAGE_THEME) || DEFAULT_THEME;
    dispatch(setTheme({ currentTheme: theme }));
  };
};

export const setThemeInStorage = (theme: string): AppThunk => {
  return (dispatch) => {
    const { setItem } = localStorage();
    setItem(LOCAL_STORAGE_THEME, theme);
    dispatch(setTheme({ currentTheme: theme }));
  };
};
