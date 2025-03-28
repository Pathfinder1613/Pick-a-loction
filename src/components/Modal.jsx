import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

function Modal({ open, children }) {
  const dialog = useRef();

  useEffect(() => {
    if (dialog.current) {
      if (open) {
        dialog.current.showModal();
      } else {
        dialog.current.close();
      }
    }
  }, [open])

  const onClose = () => {
    dialog.current.close();
  }





  return createPortal(
    <dialog className="modal" onClose={onClose} ref={dialog}>
      {open ? children : null}
    </dialog>,
    document.getElementById('modal')
  );
}


export default Modal;
