import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './slice/rocketslice';
import missionReducer from './missions/missions';

const store = configureStore({
  reducer: {
    rocket: rocketReducer,
    mission: missionReducer,
  },
});

export default store;
