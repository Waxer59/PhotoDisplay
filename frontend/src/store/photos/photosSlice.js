import { createSlice } from '@reduxjs/toolkit';

export const photosSlice = createSlice({
  name: 'photos',
  initialState: {
    isUplaoding: false,
    photos: [],
    activePhoto: null
  },
  reducers: {
    onAddNewPhoto: (state, { payload }) => {
      const newPhoto = {
        id: payload.id,
        url: payload.url,
        label: payload.label,
        date: payload.date
      };
      state.photos.push(newPhoto);
    },
    onUploadingPhoto: (state) => {
      state.isUplaoding = true;
    },
    onPhotoUploaded: (state) => {
      state.isUplaoding = false;
    },
    onSetActivePhoto: (state, { payload }) => {
      state.activePhoto = payload;
    }
  }
});

export const {
  onAddNewPhoto,
  onPhotoUploaded,
  onUploadingPhoto,
  onSetActivePhoto
} = photosSlice.actions;
