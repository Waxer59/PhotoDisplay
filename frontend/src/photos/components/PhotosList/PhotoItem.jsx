import PropTypes from 'prop-types';
import { usePhotoStore } from '../../../hooks/usePhotoStore';
import { useUiStore } from '../../../hooks/useUiStore';
import './PhotoItem.css';

export function PhotoItem({ url, label, id }) {
  const { openDeletePhotoModal } = useUiStore();
  const { setActivePhoto } = usePhotoStore();
  const onHandleDeleteClick = (photoId) => {
    openDeletePhotoModal();
    setActivePhoto(photoId);
  };

  return (
    <li className="photo">
      <button className="btn-delete" onClick={() => onHandleDeleteClick(id)}>
        Delete
      </button>
      <span className="label">{label}</span>
      <img
        src={url}
        alt={label}
        loading="lazy"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = 'images/image-not-found.png';
        }}
      />
    </li>
  );
}

PhotoItem.propTypes = {
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};
