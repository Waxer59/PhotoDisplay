import { useDispatch, useSelector } from 'react-redux';
import {
  onCloseDeletePhotoModal,
  onCloseNewPhotoModal,
  onOpenDeletePhotoModal,
  onOpenNewPhotoModal
} from '../store/ui/uiSlice';

export const useUiStore = () => {
  const dispatch = useDispatch();

  const { isNewPhotoModalOpen, isDeletePhotoModalOpen } = useSelector(
    (state) => state.ui
  );

  const openNewPhotoModal = () => {
    dispatch(onOpenNewPhotoModal());
  };

  const closeNewPhotoModal = () => {
    dispatch(onCloseNewPhotoModal());
  };

  const openDeletePhotoModal = () => {
    dispatch(onOpenDeletePhotoModal());
  };

  const closeDeletePhotoModal = () => {
    dispatch(onCloseDeletePhotoModal());
  };

  return {
    //* Variables
    isNewPhotoModalOpen,
    isDeletePhotoModalOpen,

    //* Functions
    openNewPhotoModal,
    closeNewPhotoModal,
    openDeletePhotoModal,
    closeDeletePhotoModal
  };
};
