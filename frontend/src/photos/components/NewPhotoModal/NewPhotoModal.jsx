import Modal from 'react-modal';
import { useForm } from '../../../hooks/useForm';
import { usePhotoStore } from '../../../hooks/usePhotoStore';
import { useUiStore } from '../../../hooks/useUiStore';
import { Toast } from '../../helpers/swal';
import { PhotoModal } from '../../layouts/Modal/PhotoModal';
import './NewPhotoModal.css';

const initialState = {
  label: '',
  photoUrl: ''
};

Modal.setAppElement('#root');

export const NewPhotoModal = () => {
  const { onInputChange, label, photoUrl, onResetForm } = useForm(initialState);
  const { addNewPhoto, isUploading } = usePhotoStore();

  const { isNewPhotoModalOpen, closeNewPhotoModal } = useUiStore();

  const onSubmit = (e) => {
    e.preventDefault();
    if (label.length < 3 || photoUrl.length < 3) {
      Toast.fire({
        toast: true,
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill all the fields!'
      });
      return;
    }
    const newPhoto = {
      id: Date.now(),
      label,
      url: photoUrl,
      date: new Date().getTime()
    };
    addNewPhoto(newPhoto);
    closeNewPhotoModal();
    onResetForm();
    Toast.fire({
      toast: true,
      icon: 'success',
      title: 'Success!',
      text: 'Your photo has been added.'
    });
  };

  const onHandlePhotoUrlChange = (e) => {
    onInputChange(e);
  };

  const onHandleLabelChange = (e) => {
    onInputChange(e);
  };

  const onHandleCancelClick = () => {
    closeNewPhotoModal();
    onResetForm();
  };

  return (
    <PhotoModal
      isOpen={isNewPhotoModalOpen}
      onRequestClose={closeNewPhotoModal}>
      <form className="photo-modal-form" onSubmit={onSubmit}>
        <h2 className="photo-modal-title">Add a new Photo</h2>

        <div className="label-input-container">
          <label htmlFor="label" className="input-label">
            Label
          </label>
          <input
            type="text"
            placeholder="Label"
            name="label"
            className="text-input"
            onChange={onHandleLabelChange}
          />
        </div>

        <div className="photoUrl-input-container">
          <label htmlFor="label" className="input-label">
            Photo URL
          </label>
          <input
            type="text"
            placeholder="https://photoUrl.com"
            name="photoUrl"
            className="text-input"
            onChange={onHandlePhotoUrlChange}
          />
        </div>

        <div className="btns-inputs">
          <button
            className="btn-cancel"
            onClick={onHandleCancelClick}
            type="button">
            Cancel
          </button>
          <button className="btn-submit" type="submit" disabled={isUploading}>
            Submit
          </button>
        </div>
      </form>
    </PhotoModal>
  );
};
