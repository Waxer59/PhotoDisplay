import { IoIosAdd, IoIosSearch } from 'react-icons/io';
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-search">
        <span className="logo">
          Photo<strong>Display</strong>
        </span>

        <div className="search-icon">
          <IoIosSearch style={{ opacity: 0.5 }} />
          <input type="text" className="search" placeholder="Search by label" />
        </div>
      </div>

      <div className="add-new">
        <button className="add-photo">Add a photo</button>
      </div>
    </nav>
  );
};
