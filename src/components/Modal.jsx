import "./Modal.css";

const Modal = ({ children, onClose }) => {
  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <button className="modalClose" onClick={onClose}>✕</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
