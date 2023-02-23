import { createSlice } from '@reduxjs/toolkit';

export const photosSlice = createSlice({
  name: 'photos',
  initialState: {
    isLoading: false,
    photos: [],
    activePhoto: null
  },
  reducers: {
    onAddNewPhoto: (state, { payload }) => {
      state.isLoading = true;
      state.photos.push(payload);
      state.isLoading = false;
    },
    onSetActivePhoto: (state, { payload }) => {
      state.activePhoto = payload;
    },
    onDeletePhoto: (state) => {
      const newPhotos = state.photos.filter(
        (photo) => photo.id !== state.activePhoto.id
      );
      state.photos = newPhotos;
      state.activePhoto = null;
    },
    onLoadingPhotos: (state, { payload = [] }) => {
      state.isLoading = true;
      payload.forEach((photo) => {
        const exists = state.photos.some((dbPhoto) => dbPhoto.id === photo.id);
        if (!exists) {
          state.photos.push(photo);
        }
      });
      state.isLoading = false;
    },
    onSetIsLoading: (state) => {
      state.isLoading = true;
    }
  }
});

export const {
  onAddNewPhoto,
  onSetActivePhoto,
  onDeletePhoto,
  onLoadingPhotos,
  onSetIsLoading
} = photosSlice.actions;
