import { IoIosSearch } from 'react-icons/io';
import { useUiStore } from '../../hooks/useUiStore';
import './Navbar.css';

export function Navbar({ children }) {
  const { openNewPhotoModal } = useUiStore();
  const handleAddPhotoClick = () => {
    openNewPhotoModal();
  };

  return (
    <nav className="navbar">
      <div className="logo-search">
        <span className="logo">
          Photo<strong>Display</strong>
        </span>

        <div className="search-icon">
          <IoIosSearch style={{ opacity: 0.5 }} size="18px" />
          {children}
        </div>
      </div>

      <div className="add-new">
        <button className="add-photo" onClick={handleAddPhotoClick}>
          Add a photo
        </button>
      </div>
    </nav>
  );
}
