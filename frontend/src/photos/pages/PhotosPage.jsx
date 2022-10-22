import { useUiStore } from '../../hooks/useUiStore';
import { Navbar } from '../../ui/Navbar/Navbar';
import { DeletePhotoModal } from '../components/DeletePhotoModal/DeletePhotoModal';
import { NewPhotoModal } from '../components/NewPhotoModal/NewPhotoModal';
import { PhotosList } from '../components/PhotosList/PhotosList';

export const PhotosPage = () => {
  const { searchingPhotoQuery } = useUiStore();
  return (
    <>
      <Navbar />
      <PhotosList query={searchingPhotoQuery} />
      <NewPhotoModal />
      <DeletePhotoModal />
    </>
  );
};
