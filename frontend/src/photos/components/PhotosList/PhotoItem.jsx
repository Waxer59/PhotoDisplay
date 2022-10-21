import PropTypes from 'prop-types';

export const PhotoItem = ({ img, label }) => {
  return (
    <li>
      <img src={img} alt={label} />
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
