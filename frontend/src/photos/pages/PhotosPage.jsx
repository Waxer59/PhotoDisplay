import { useUiStore } from '../../hooks/useUiStore';
import { Navbar } from '../../ui/Navbar/Navbar';
import { DeletePhotoModal } from '../components/DeletePhotoModal/DeletePhotoModal';
import { NewPhotoModal } from '../components/NewPhotoModal/NewPhotoModal';
import { PhotosList } from '../components/PhotosList/PhotosList';
import { HashLoader } from 'react-spinners';
import { usePhotoStore } from '../../hooks/usePhotoStore';
import { useEffect } from 'react';

export const PhotosPage = () => {
  const { searchingPhotoQuery } = useUiStore();
  const { isLoading, startLoadingPhotos } = usePhotoStore();

  useEffect(() => {
    startLoadingPhotos();
  }, []);

  return (
    <>
      <Navbar />
      {isLoading ? (
        <HashLoader color="#ccc" style={{ margin: '0 auto' }} />
      ) : (
        <PhotosList query={searchingPhotoQuery} />
      )}
      <NewPhotoModal />
      <DeletePhotoModal />
    </>
  );
};
