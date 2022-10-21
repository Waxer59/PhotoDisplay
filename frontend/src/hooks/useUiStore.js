import { useDispatch, useSelector } from 'react-redux';
import { onClosePhotoModal, onOpenPhotoModal } from '../store/ui/uiSlice';

export const useUiStore = () => {
  const dispatch = useDispatch();

  const { isPhotoModalOpen } = useSelector((state) => state.ui);

  const openPhotoModal = () => {
    dispatch(onOpenPhotoModal());
  };

  const closePhotoModal = () => {
    dispatch(onClosePhotoModal());
  };

  const togglePhotoModal = () => {
    return isPhotoModalOpen ? closePhotoModal() : openPhotoModal();
  };

  return {
    //* Variables
    isPhotoModalOpen,

    //* Functions
    openPhotoModal,
    closePhotoModal,
    togglePhotoModal
  };
};
