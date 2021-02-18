import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "app/store";
import useLocalStorage from "hooks/useLocalStorage";

const DEFAULT_THEME = "light";
const LOCAL_STORAGE_THEME_KEY = "theme";

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
    const { getItem } = useLocalStorage();
    const theme = getItem(LOCAL_STORAGE_THEME_KEY) || DEFAULT_THEME;
    dispatch(setTheme({ currentTheme: theme }));
  };
};

export const setThemeInStorage = (theme: string): AppThunk => {
  return (dispatch) => {
    const { setItem } = useLocalStorage();
    setItem(LOCAL_STORAGE_THEME_KEY, theme);
    dispatch(setTheme({ currentTheme: theme }));
  };
};
