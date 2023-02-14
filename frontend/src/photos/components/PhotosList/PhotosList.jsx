import { PhotoItem } from './PhotoItem';
import PropTypes from 'prop-types';
import './PhotosList.css';
import { usePhotoStore } from '../../../hooks/usePhotoStore';
import { getImagesByLabel } from '../../helpers/getImagesByLabel';

export const PhotosList = ({ query }) => {
  const { photos } = usePhotoStore();
  const filteredImages = getImagesByLabel(photos, query);
  const showImageNotFound =
  filteredImages.length === 0 && photos.length > 0 && query.length > 0;

  return (
    <div className="photos-container">
      {showImageNotFound ? (
        <h2 className="image-not-found">Upss... Image not found :(</h2>
      ) : (
        <ul className="photos" id="photos">
          {filteredImages.map((photo) => (
            <PhotoItem key={photo.id} {...photo} />
          ))}
        </ul>
      )}
    </div>
  );
};

PhotosList.propTypes = {
  query: PropTypes.string
};

PhotosList.defaultProps = {
  query: ''
};
