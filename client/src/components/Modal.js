import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const Modal = ({ children, open, classes = '' }) => {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;

    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);

  return createPortal(
    <Dialog ref={dialog} className={`${classes}`}>
      {children}
    </Dialog>,
    document.getElementById('modal')
  );
};

const Dialog = styled.dialog`
  background-color: #e4ddd4;
  border-radius: 6px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
  padding: 1rem;
  width: 80%;
  max-width: 40rem;
  animation: fade-slide-up 0.3s ease-out forwards;

  ::backdrop {
    background-color: rgba(0, 0, 0, 0.55);
  }
`;
export default Modal;
