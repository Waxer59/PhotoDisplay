import { useState } from 'react';
import { useSelector } from 'react-redux';
import { PhotoItem } from './PhotoItem';
import PropTypes from 'prop-types';
import './PhotosList.css';

export const PhotosList = ({ query }) => {
  // const [isPhotoFound, setIsPhotoFound] = useState(true);

  const { photos } = useSelector((state) => state.photos);
  return (
    <div className="photos-container">
      <ul className="photos" id="photos">
        {photos.map((photo) =>
          photo.label.includes(query) ? (
            <PhotoItem key={photo.id} {...photo} />
          ) : (
            <h2 key={photo.id}>Nothing</h2>
          )
        )}
      </ul>
    </div>
  );
};

PhotosList.propTypes = {
  query: PropTypes.string
};

PhotosList.defaultProps = {
  query: ''
};
