import { useUiStore } from '../../../hooks/useUiStore';
import { PhotoModal } from '../../layouts/Modal/PhotoModal';
import './DeletePhotoModal.css';

export const DeletePhotoModal = () => {
  const { isDeletePhotoModalOpen, closeDeletePhotoModal } = useUiStore();

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onHandleCancelClick = () => {
    closeDeletePhotoModal();
  };

  return (
    <PhotoModal
      isOpen={isDeletePhotoModalOpen}
      onRequestClose={closeDeletePhotoModal}>
      <form className="photo-modal-form" onSubmit={onSubmit}>
        <h2 className="photo-modal-title">Are you sure?</h2>

        <div className="password-input-container">
          <label htmlFor="password" className="input-label">
            password
          </label>
          <input
            type="password"
            placeholder="********"
            name="password"
            className="text-input"
          />
        </div>

        <div className="btns-inputs">
          <button
            className="btn-cancel"
            type="button"
            onClick={onHandleCancelClick}>
            Cancel
          </button>
          <button className="btn-delete-photo">Delete</button>
        </div>
      </form>
    </PhotoModal>
  );
};
