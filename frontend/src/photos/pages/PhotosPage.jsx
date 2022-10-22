import { Navbar } from '../../ui/Navbar/Navbar';
import { DeletePhotoModal } from '../components/DeletePhotoModal/DeletePhotoModal';
import { NewPhotoModal } from '../components/NewPhotoModal/NewPhotoModal';
import { PhotosList } from '../components/PhotosList/PhotosList';

export const PhotosPage = () => {
  return (
    <>
      <Navbar />
      <PhotosList />
      <NewPhotoModal />
      <DeletePhotoModal />
    </>
  );
};
