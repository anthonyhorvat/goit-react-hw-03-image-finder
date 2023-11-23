import React, { Component } from 'react';
import css from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = event => {
    const { closeModal } = this.props;
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  handleOverlayClick = event => {
    const { closeModal } = this.props;
    if (event.target === event.currentTarget) {
      closeModal(); 
    }
  };

  render() {
    const { imageUrl } = this.props;

    return (
      <div className={css.Overlay} onClick={this.handleOverlayClick}>
        <div className={css.Modal}>
          <img src={imageUrl} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
