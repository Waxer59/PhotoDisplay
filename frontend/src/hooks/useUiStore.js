import { useDispatch, useSelector } from 'react-redux';
import {
  onCloseDeletePhotoModal,
  onCloseNewPhotoModal,
  onOpenDeletePhotoModal,
  onOpenNewPhotoModal,
  onSearchPhoto
} from '../store/ui/uiSlice';

export const useUiStore = () => {
  const dispatch = useDispatch();

  const { isNewPhotoModalOpen, isDeletePhotoModalOpen, searchingPhotoQuery } =
    useSelector((state) => state.ui);

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

  const searchPhoto = (query) => {
    dispatch(onSearchPhoto(query));
  };

  return {
    //* Variables
    isNewPhotoModalOpen,
    isDeletePhotoModalOpen,
    searchingPhotoQuery,

    //* Functions
    openNewPhotoModal,
    closeNewPhotoModal,
    openDeletePhotoModal,
    closeDeletePhotoModal,
    searchPhoto
  };
};
