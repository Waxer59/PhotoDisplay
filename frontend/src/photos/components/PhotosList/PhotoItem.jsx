import PropTypes from 'prop-types';

export const PhotoItem = ({ url, label }) => {
  return (
    <li>
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
