import { PhotoItem } from './PhotoItem';
import { useSelector } from 'react-redux';
import './PhotosList.css';

export const PhotosList = () => {
  const { photos } = useSelector((state) => state.photos);

  return (
    <div className="photos-container">
      <ul className="photos">
        {photos.map((photo) => (
          <PhotoItem key={photo.id} {...photo} />
        ))}
      </ul>
    </div>
  );
};
