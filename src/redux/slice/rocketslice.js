import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

// Action
export const fetchRockets = createAsyncThunk('fetchRockets', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  return response.json();
});

const rocketSlice = createSlice({
  name: 'rocket',
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchRockets.pending, (state, action) => {
      state.isLoading = true;
      state.data = action.payload;
    });
    builder.addCase(fetchRockets.rejected, (state, action) => {
      state.isError = true;
      console.log('Error: ', action.payload);
    });
  },
});

export default rocketSlice.reducer;
