import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  email: '',
  name: '',
  avatar: '',
  role: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state = action.payload;
    },
    setDefaultUser: (state) => {
      state = initialState;
    },
  },
});

export const { setCurrentUser, setDefaultUser } = userSlice.actions;
