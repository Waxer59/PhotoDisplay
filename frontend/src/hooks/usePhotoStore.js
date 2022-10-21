import { useDispatch, useSelector } from 'react-redux';
import {
  onAddNewPhoto,
  onPhotoUploaded,
  onSetActivePhoto,
  onUploadingPhoto
} from '../store/photos/photosSlice';

export const usePhotoStore = () => {
  const { isUploading, photos, activePhoto } = useSelector(
    (state) => state.photos
  );
  const dispatch = useDispatch();

  const addNewPhoto = (photo) => {
    dispatch(onAddNewPhoto(photo));
  };

  const uploadPhoto = () => {
    dispatch(onUploadingPhoto());
  };

  const photoUploaded = () => {
    dispatch(onPhotoUploaded());
  };

  const setActivePhoto = (photo) => {
    dispatch(onSetActivePhoto(photo));
  };

  return {
    //* Variables
    isUploading,
    photos,
    activePhoto,

    //* Functions
    addNewPhoto,
    uploadPhoto,
    photoUploaded,
    setActivePhoto
  };
};
