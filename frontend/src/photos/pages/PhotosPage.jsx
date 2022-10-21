import { Navbar } from '../../ui/Navbar/Navbar';
import { PhotoModal } from '../components/PhotoModal/PhotoModal';
import { PhotosList } from '../components/PhotosList/PhotosList';

export const PhotosPage = () => {
  return (
    <>
      <Navbar />
      <PhotosList />
      <PhotoModal />
    </>
  );
};
