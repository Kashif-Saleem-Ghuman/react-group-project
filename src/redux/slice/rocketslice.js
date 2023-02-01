import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

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
    reserved: false,
  },
  reducers: {
    reservation(state, action) {
      return state.data.map((rocket) => {
        if (rocket.rocket_id !== action.payload) {
          return { ...rocket };
        }
        return { ...rocket, reserved: true };
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      state.isLoading = false;
      const rocketArr = action.payload.map((data) => ({
        rocket_id: data.rocket_id,
        rocket_name: data.rocket_name,
        rocket_description: data.description,
        flickr_images: data.flickr_images,
        reserved: false,
      }));
      state.data = rocketArr;
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

export const { reservation } = rocketSlice.actions;
export default rocketSlice.reducer;
