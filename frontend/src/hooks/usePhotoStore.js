import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import imagesApi from '../api/imagesApi';
import { getImageById } from '../photos/helpers/getImageById';
import {
  onAddNewPhoto,
  onDeletePhoto,
  onLoadingPhotos,
  onSetActivePhoto,
  onSetIsLoading
} from '../store/photos/photosSlice';

export const usePhotoStore = () => {
  const { isUploading, photos, activePhoto, isLoading } = useSelector(
    (state) => state.photos
  );
  const dispatch = useDispatch();

  const startAddNewPhoto = async (photo) => {
    try {
      const { data } = await imagesApi.post('/images', photo);
      dispatch(onAddNewPhoto(data));
    } catch (error) {
      console.log(error);
      Swal.fire(
        'Error when saving',
        error?.response?.data?.msg ?? 'An error has occurred',
        'error'
      );
    }
  };

  const setActivePhoto = (id) => {
    const photo = getImageById(photos, id);
    dispatch(onSetActivePhoto(photo));
  };

  const startDeletetingPhoto = async () => {
    try {
      const { id } = activePhoto;
      await imagesApi.delete(`/images/${id}`);
      dispatch(onDeletePhoto());
    } catch (error) {
      console.log(error);
      Swal.fire(
        'Error when deleting',
        error?.response?.data?.msg ?? 'An error has occurred',
        'error'
      );
    }
  };

  const startLoadingPhotos = async () => {
    try {
      dispatch(onSetIsLoading());
      const { data } = await imagesApi.get('/images');
      dispatch(onLoadingPhotos(data.images));
    } catch (error) {
      console.log(error);
      Swal.fire(
        'Error when loading',
        error?.response?.data?.msg ?? 'An error has occurred',
        'error'
      );
    }
  };

  return {
    //* Variables
    isUploading,
    photos,
    activePhoto,
    isLoading,

    //* Functions
    startAddNewPhoto,
    setActivePhoto,
    startDeletetingPhoto,
    startLoadingPhotos
  };
};
