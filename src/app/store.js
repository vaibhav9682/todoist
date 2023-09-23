import { configureStore } from '@reduxjs/toolkit';
import habitSlice from '../features/habit/habitSlice';

export const store = configureStore({
  reducer: {
    habitSlice
  },
});
