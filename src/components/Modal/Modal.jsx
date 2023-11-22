import css from './Modal.module.css';

const Modal = ({ imageUrl, closeModal }) => {
  return (
    <div className={css.Overlay} onClick={closeModal}>
      <div className={css.Modal}>
        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
};

export default Modal;
