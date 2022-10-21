import Modal from 'react-modal';
import { useUiStore } from '../../../hooks/useUiStore';
import './PhotoModal.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root');

export const PhotoModal = () => {
  const { isPhotoModalOpen, closePhotoModal } = useUiStore();

  const onSubmit = (e) => {
    e.preventDefault();
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
          />
        </div>

        <div className="btns-inputs">
          <button className="btn-cancel" onClick={closePhotoModal}>
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
