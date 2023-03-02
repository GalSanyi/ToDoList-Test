import { configureStore } from '@reduxjs/toolkit';
import todoSlice from 'components/features/todo/todoSlice';
export const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
});
