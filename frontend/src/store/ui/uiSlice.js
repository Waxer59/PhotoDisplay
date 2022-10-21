import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isPhotoModalOpen: false
  },
  reducers: {
    onOpenPhotoModal: (state) => {
      state.isPhotoModalOpen = true;
    },
    onClosePhotoModal: (state) => {
      state.isPhotoModalOpen = false;
    }
  }
});

export const { onOpenPhotoModal, onClosePhotoModal } = uiSlice.actions;
