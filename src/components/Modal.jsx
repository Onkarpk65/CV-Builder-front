import { useEffect } from "react";

const Modal = ({
  modalId = "auth_modal",
  openAuthModal,
  setOpenAuthModal,
  children,
}) => {
  useEffect(() => {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    if (openAuthModal) {
      modal.showModal();
    } else {
      modal.close();
    }
  }, [openAuthModal]);

  return (
    <dialog id={modalId} className="modal">
      <div className="modal-box relative">
        {/* Close button */}
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={() => setOpenAuthModal(false)}
        >
          ✕
        </button>

        {children}
      </div>
    </dialog>
  );
};

export default Modal;
