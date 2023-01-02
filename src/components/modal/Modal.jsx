import React from "react";
import "./Modal.scss";

function Modal({
  show,
  children,
  onClose,
  centered = false,
  scrollable = false,
  maxWidth = "auto",
  title = "",
}) {
  let modalClassName = "modal",
    modalContentClassName = "modal__content";
  if (centered) modalClassName += " centered";
  if (scrollable) modalContentClassName += " scrollable";
  const header = (
    <div className="content__header">
      <h2 className="header__title">{title}</h2>
      <button className="iconWrapper header__icon" onClick={onClose}>
        <i className="bi bi-x-circle"></i>
      </button>
    </div>
  );
  return show ? (
    <div className="overlay">
      <div className={modalClassName} style={{ maxWidth }}>
        <div className={modalContentClassName}>
          {header}
          {children}
        </div>
      </div>
    </div>
  ) : null;
}

export default Modal;
