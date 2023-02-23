import Modal from 'react-modal';
import './PhotoModal.css';

const customStyles = {
  content: {
    position: 'absolute',
    left: 0,
    right: 0,
    margin: '0 auto'
  }
};

Modal.setAppElement('#root');

export function PhotoModal({ children, isOpen, onRequestClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      className="modal"
      overlayClassName="modal-back"
      closeTimeoutMS={200}>
      {children}
    </Modal>
  );
}
