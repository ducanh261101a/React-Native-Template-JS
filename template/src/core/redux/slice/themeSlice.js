import { LIGHT_SCHEME } from '~shared/theme';
import { createSlice } from '@reduxjs/toolkit';

const initialState = LIGHT_SCHEME;

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      return action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
