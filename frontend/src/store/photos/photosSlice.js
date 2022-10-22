import { createSlice } from '@reduxjs/toolkit';

export const photosSlice = createSlice({
  name: 'photos',
  initialState: {
    isUploading: false,
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
      state.isUploading = true;
    },
    onPhotoUploaded: (state) => {
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
    }
  }
});

export const {
  onAddNewPhoto,
  onPhotoUploaded,
  onUploadingPhoto,
  onSetActivePhoto,
  onDeletePhoto
} = photosSlice.actions;
