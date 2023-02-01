import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './slice/rocketslice';

const store = configureStore({
  reducer: {
    rocket: rocketReducer,
  },
});

export default store;
