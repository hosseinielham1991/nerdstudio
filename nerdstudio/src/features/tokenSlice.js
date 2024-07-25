// features/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const tokenSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    setToken: (state,action) => {
      state.value = action.payload;
    }
  },
});

export const { setToken } = tokenSlice.actions;

export default tokenSlice.reducer;