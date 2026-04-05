import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    value: []
  },
  reducers: {
    setMovies: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { setMovies } = movieSlice.actions;
export default movieSlice.reducer;