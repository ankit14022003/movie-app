import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './slices/movieSlice';

const mystore = configureStore({
  reducer: {
    movie: movieReducer
  }
});

export default mystore;