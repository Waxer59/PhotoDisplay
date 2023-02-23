import { Routes, Route } from 'react-router-dom';
import { PhotosPage } from '../photos/pages/PhotosPage';

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<PhotosPage />} />
    </Routes>
  );
}
