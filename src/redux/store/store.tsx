import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice/counterSlice';

const store = configureStore({
  reducer: {
    theme: counterReducer,
  },
});

export default store;
