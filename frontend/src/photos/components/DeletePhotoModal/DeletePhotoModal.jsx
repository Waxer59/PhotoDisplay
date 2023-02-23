import { useForm } from '../../../hooks/useForm';
import { usePhotoStore } from '../../../hooks/usePhotoStore';
import { useUiStore } from '../../../hooks/useUiStore';
import { PhotoModal } from '../../layouts/Modal/PhotoModal';
import { Toast } from '../../helpers/swal';
import './DeletePhotoModal.css';

const initialState = {
  password: ''
};

export function DeletePhotoModal() {
  const { isDeletePhotoModalOpen, closeDeletePhotoModal } = useUiStore();
  const { password, onInputChange, onResetForm } = useForm(initialState);
  const { activePhoto, startDeletetingPhoto } = usePhotoStore();

  const passwordPlaceholder = () =>
    activePhoto?.label
      .split('')
      .map(() => '*')
      .join('');

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
    startDeletetingPhoto();
    onResetForm();
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
}
