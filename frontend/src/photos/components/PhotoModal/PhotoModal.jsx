import Modal from 'react-modal';
import { useForm } from '../../../hooks/useForm';
import { usePhotoStore } from '../../../hooks/usePhotoStore';
import { useUiStore } from '../../../hooks/useUiStore';
import './PhotoModal.css';

const customStyles = {
  content: {
    position: 'absolute',
    left: 0,
    right: 0,
    margin: '0 auto'
  }
};

const initialState = {
  label: '',
  photoUrl: ''
};

Modal.setAppElement('#root');

export const PhotoModal = () => {
  const { onInputChange, label, photoUrl, onResetForm } = useForm(initialState);
  const { addNewPhoto } = usePhotoStore();

  const { isPhotoModalOpen, closePhotoModal } = useUiStore();

  const onSubmit = (e) => {
    console.log('onSubmit');
    e.preventDefault();
    const newPhoto = {
      id: Date.now(),
      label,
      url: photoUrl,
      date: new Date().getTime()
    };
    addNewPhoto(newPhoto);
    closePhotoModal();
    onResetForm();
  };

  const onHandlePhotoUrlChange = (e) => {
    onInputChange(e);
  };

  const onHandleLabelChange = (e) => {
    onInputChange(e);
  };

  return (
    <Modal
      isOpen={isPhotoModalOpen}
      onRequestClose={closePhotoModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}>
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
            onClick={closePhotoModal}
            type="button">
            Cancel
          </button>
          <button className="btn-submit" type="submit">
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};
