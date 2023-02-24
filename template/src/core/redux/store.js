import { configureStore } from '@reduxjs/toolkit';
import { themeSlice, userSlice } from './slice';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    theme: themeSlice.reducer,
  },
});

export default store;