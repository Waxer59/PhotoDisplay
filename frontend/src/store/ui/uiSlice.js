import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isNewPhotoModalOpen: false,
    isDeletePhotoModalOpen: false
  },
  reducers: {
    onOpenNewPhotoModal: (state) => {
      state.isNewPhotoModalOpen = true;
    },
    onCloseNewPhotoModal: (state) => {
      state.isNewPhotoModalOpen = false;
    },
    onOpenDeletePhotoModal: (state) => {
      state.isDeletePhotoModalOpen = true;
    },
    onCloseDeletePhotoModal: (state) => {
      state.isDeletePhotoModalOpen = false;
    }
  }
});

export const {
  onOpenNewPhotoModal,
  onCloseNewPhotoModal,
  onCloseDeletePhotoModal,
  onOpenDeletePhotoModal
} = uiSlice.actions;
