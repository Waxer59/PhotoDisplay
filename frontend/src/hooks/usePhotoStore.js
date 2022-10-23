import { useDispatch, useSelector } from 'react-redux';
import { getImageById } from '../photos/helpers/getImageById';
import {
  onAddNewPhoto,
  onDeletePhoto,
  onLoadedPhotos,
  onLoadingPhotos,
  onSetActivePhoto
} from '../store/photos/photosSlice';

export const usePhotoStore = () => {
  const { isUploading, photos, activePhoto, isLoading } = useSelector(
    (state) => state.photos
  );
  const dispatch = useDispatch();

  const addNewPhoto = (photo) => {
    dispatch(onAddNewPhoto(photo));
  };

  const setActivePhoto = (event) => {
    const photo = getImageById(photos, event.target.name);
    dispatch(onSetActivePhoto(photo[0]));
  };

  const deletePhoto = () => {
    dispatch(onDeletePhoto());
  };

  const loadingPhotos = () => {
    dispatch(onLoadingPhotos());
  };

  const lodadedPhotos = () => {
    dispatch(onLoadedPhotos());
  };

  return {
    //* Variables
    isUploading,
    photos,
    activePhoto,
    isLoading,

    //* Functions
    addNewPhoto,
    setActivePhoto,
    deletePhoto,
    loadingPhotos,
    lodadedPhotos
  };
};
