import { createSlice } from '@reduxjs/toolkit';

export const photosSlice = createSlice({
  name: 'photos',
  initialState: {
    isUploading: false,
    isLoading: false,
    photos: [],
    activePhoto: null
  },
  reducers: {
    onAddNewPhoto: (state, { payload }) => {
      state.isUploading = true;
      const newPhoto = {
        id: payload.id,
        url: payload.url,
        label: payload.label,
        date: payload.date
      };
      state.photos.push(newPhoto);
      state.isUploading = false;
    },
    onSetActivePhoto: (state, { payload }) => {
      state.activePhoto = payload;
    },
    onDeletePhoto: (state) => {
      const newPhotos = state.photos.filter((photo) => {
        if (photo.id !== state.activePhoto.id) {
          return photo;
        }
      });
      state.photos = newPhotos;
      state.activePhoto = null;
    },
    onLoadingPhotos: (state) => {
      state.isLoading = true;
    },
    onLoadedPhotos: (state) => {
      state.isLoading = false;
    }
  }
});

export const {
  onAddNewPhoto,
  onSetActivePhoto,
  onDeletePhoto,
  onLoadedPhotos,
  onLoadingPhotos
} = photosSlice.actions;
