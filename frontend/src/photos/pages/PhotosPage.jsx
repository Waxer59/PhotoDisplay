import queryString from 'query-string';
import { Navbar } from '../../ui/Navbar/Navbar';
import { DeletePhotoModal } from '../components/DeletePhotoModal/DeletePhotoModal';
import { NewPhotoModal } from '../components/NewPhotoModal/NewPhotoModal';
import { PhotosList } from '../components/PhotosList/PhotosList';
import { HashLoader } from 'react-spinners';
import { usePhotoStore } from '../../hooks/usePhotoStore';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

const initialState = {
  searchInputValue: ''
};

export const PhotosPage = () => {
  const { isLoading, startLoadingPhotos } = usePhotoStore();
  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const { searchInputValue, onInputChange, onValueChange } =
    useForm(initialState);

  useEffect(() => {
    startLoadingPhotos();
    onValueChange('searchInputValue', q);
  }, []);

  useEffect(() => {
    if (searchInputValue) {
      navigate(`?q=${searchInputValue}`);
    } else {
      navigate('');
    }
  }, [searchInputValue]);

  return (
    <>
      <Navbar>
        <input
          type="text"
          className="search"
          name="searchInputValue"
          placeholder="Search by label"
          onChange={onInputChange}
          value={searchInputValue}
        />
      </Navbar>
      {isLoading ? (
        <HashLoader color="#ccc" style={{ margin: '0 auto' }} />
      ) : (
        <PhotosList query={searchInputValue} />
      )}
      <NewPhotoModal />
      <DeletePhotoModal />
    </>
  );
};
