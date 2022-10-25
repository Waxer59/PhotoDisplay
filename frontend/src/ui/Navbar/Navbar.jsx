import { useEffect } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { useUiStore } from '../../hooks/useUiStore';
import './Navbar.css';

const initialState = {
  search: ''
};

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { openNewPhotoModal, searchPhoto } = useUiStore();

  const { q = '' } = queryString.parse(location.search);

  const { search, onInputChange, onValueChange } = useForm(initialState);

  const handleAddPhotoClick = () => {
    openNewPhotoModal();
  };

  useEffect(() => {
    onValueChange('search', q);
  }, []);

  useEffect(() => {
    searchPhoto(search);
    navigate(`?q=${search}`);
  }, [search]);

  return (
    <nav className="navbar">
      <div className="logo-search">
        <span className="logo">
          Photo<strong>Display</strong>
        </span>

        <div className="search-icon">
          <IoIosSearch style={{ opacity: 0.5 }} size="18px" />
          <input
            type="text"
            className="search"
            name="search"
            placeholder="Search by label"
            onChange={onInputChange}
            value={search}
          />
        </div>
      </div>

      <div className="add-new">
        <button className="add-photo" onClick={handleAddPhotoClick}>
          Add a photo
        </button>
      </div>
    </nav>
  );
};
