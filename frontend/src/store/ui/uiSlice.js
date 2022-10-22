import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isNewPhotoModalOpen: false,
    isDeletePhotoModalOpen: false,
    searchingPhotoQuery: ''
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
    },
    onSearchPhoto: (state, { payload }) => {
      state.searchingPhotoQuery = payload;
    }
  }
});

export const {
  onOpenNewPhotoModal,
  onCloseNewPhotoModal,
  onCloseDeletePhotoModal,
  onOpenDeletePhotoModal,
  onSearchPhoto
} = uiSlice.actions;
