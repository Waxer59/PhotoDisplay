import PropTypes from 'prop-types';
import { useUiStore } from '../../../hooks/useUiStore';
import './PhotoItem.css';

export const PhotoItem = ({ url, label }) => {
  const { openDeletePhotoModal } = useUiStore();
  const onHandleDeleteClick = () => {
    openDeletePhotoModal();
  };

  return (
    <li className="photo">
      <button className="btn-delete" onClick={onHandleDeleteClick}>
        Delete
      </button>
      <span className="label">{label}</span>
      <img src={url} alt={label} />
    </li>
  );
};

PhotoItem.propTypes = {
  img: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

PhotoItem.defaultProps = {
  img: '',
  label: ''
};
