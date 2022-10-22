import PropTypes from 'prop-types';
import './PhotoItem.css';

export const PhotoItem = ({ url, label }) => {
  return (
    <li className="photo">
      <button className="btn-delete">Delete</button>
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
