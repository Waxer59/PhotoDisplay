import { Navbar } from '../../ui/Navbar/Navbar';
import { NewPhotoModal } from '../components/PhotoModal/NewPhotoModal';
import { PhotosList } from '../components/PhotosList/PhotosList';

export const PhotosPage = () => {
  return (
    <>
      <Navbar />
      <PhotosList />
      <NewPhotoModal />
    </>
  );
};
