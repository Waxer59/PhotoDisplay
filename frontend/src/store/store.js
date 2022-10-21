import { configureStore } from '@reduxjs/toolkit';
import { photosSlice } from './photos/photosSlice';
import { uiSlice } from './ui/uiSlice';

export const store = configureStore({
  reducer: {
    photos: photosSlice.reducer,
    ui: uiSlice.reducer
  }
});
