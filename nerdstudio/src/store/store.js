// store.js
import { configureStore } from '@reduxjs/toolkit';
import tokenSlice from '@/features/tokenSlice';

export const store = configureStore({
  reducer: {
    token: tokenSlice,
  },
});