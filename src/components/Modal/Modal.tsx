import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';

import { ModalOverlay } from '../ModalOverlay/ModalOverlay';

import styles from './styles/styles.module.css';

export type TModalProps = {
  onClose: () => void;
  children: ReactElement;
  name?: string;
};

const modalRootElement = document.getElementById('modal-overlay') as HTMLElement;

function Modal({ onClose, children, name }: TModalProps) {
  React.useEffect(() => {
    function closeByEscape(evt: KeyboardEvent) {
      if (evt.key === 'Escape') {
        onClose();
      }
    }
    document.addEventListener('keydown', closeByEscape);
    return () => {
      document.removeEventListener('keydown', closeByEscape);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <>
      <div className={styles.modal}>
        <div className={styles.modalHeaderWrapper}>
          <h2 className={styles.modalHeader}>{name}</h2>
          <button className={styles.modalButton} onClick={onClose}>
            X
          </button>
        </div>
        {children}
      </div>
      <ModalOverlay onClose={onClose} />
    </>,
    modalRootElement,
  );
}
export default Modal;
