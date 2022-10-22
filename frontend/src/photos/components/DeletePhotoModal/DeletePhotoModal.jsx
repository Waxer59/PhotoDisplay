import Swal from 'sweetalert2';
import { useForm } from '../../../hooks/useForm';
import { usePhotoStore } from '../../../hooks/usePhotoStore';
import { useUiStore } from '../../../hooks/useUiStore';
import { PhotoModal } from '../../layouts/Modal/PhotoModal';
import './DeletePhotoModal.css';

const initialState = {
  password: ''
};

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true
});

export const DeletePhotoModal = () => {
  const { isDeletePhotoModalOpen, closeDeletePhotoModal } = useUiStore();
  const { password, onInputChange } = useForm(initialState);
  const { activePhoto, deletePhoto } = usePhotoStore();

  const passwordPlaceholder = () => {
    return activePhoto?.label
      .split('')
      .map((letter) => '*')
      .join('');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== activePhoto?.label) {
      Toast.fire({
        toast: true,
        icon: 'error',
        title: 'Oops...',
        text: 'Wrong password!'
      });
      return;
    }
    Toast.fire({
      toast: true,
      icon: 'success',
      title: 'Deleted!',
      text: 'Your photo has been deleted.'
    });
    deletePhoto();
    closeDeletePhotoModal();
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
            Type <strong>{activePhoto?.label}</strong> to confirm
          </label>
          <input
            type="password"
            placeholder={String(passwordPlaceholder())}
            name="password"
            className="text-input"
            onChange={onInputChange}
            value={password}
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
