import { IoIosSearch } from 'react-icons/io';
import { useUiStore } from '../../hooks/useUiStore';
import './Navbar.css';

export const Navbar = () => {
  const { openPhotoModal } = useUiStore();

  const handleAddPhotoClick = () => {
    console.log('handleAddPhotoClick');
    openPhotoModal();
  };

  return (
    <nav className="navbar">
      <div className="logo-search">
        <span className="logo">
          Photo<strong>Display</strong>
        </span>

        <div className="search-icon">
          <IoIosSearch style={{ opacity: 0.5 }} size="18px" />
          <input type="text" className="search" placeholder="Search by label" />
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
