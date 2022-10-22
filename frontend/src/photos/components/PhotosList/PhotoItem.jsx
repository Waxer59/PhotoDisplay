import PropTypes from 'prop-types';
import { usePhotoStore } from '../../../hooks/usePhotoStore';
import { useUiStore } from '../../../hooks/useUiStore';
import './PhotoItem.css';

export const PhotoItem = ({ url, label, id }) => {
  const { openDeletePhotoModal } = useUiStore();
  const { setActivePhoto } = usePhotoStore();
  const onHandleDeleteClick = (e) => {
    openDeletePhotoModal();
    setActivePhoto(e);
  };

  return (
    <li className="photo">
      <button className="btn-delete" onClick={onHandleDeleteClick} name={id}>
        Delete
      </button>
      <span className="label">{label}</span>
      <img src={url} alt={label} />
    </li>
  );
};

PhotoItem.propTypes = {
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
  // id: PropTypes.string.isRequired
};

PhotoItem.defaultProps = {
  img: '',
  label: '',
  id: ''
};
