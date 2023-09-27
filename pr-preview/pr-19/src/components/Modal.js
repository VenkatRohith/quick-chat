import PropTypes from "prop-types";
import React from "react";
import reactDom from "react-dom";
import "./Modal.scss";

function Modal({
  isOpen,
  children,
  onClose,
  isCentered = false,
  isScrollable = false,
  maxWidth = "auto",
  title = "",
}) {
  let modalClassName = "modal",
    modalContentClassName = "modal__content";
  if (isCentered) modalClassName += " centered";
  if (isScrollable) modalContentClassName += " scrollable";
  const header = (
    <div className="content__header">
      <h2 className="header__title">{title}</h2>
      <button
        className="iconWrapper header__icon"
        onClick={onClose}
        title="Close"
      >
        <i className="bi bi-x-circle"></i>
      </button>
    </div>
  );
  if (!isOpen) return null;
  return reactDom.createPortal(
    <div className="overlay">
      <div className={modalClassName} style={{ maxWidth }}>
        <div className={modalContentClassName}>
          {header}
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}

Modal.propTypes = {
  isCentered: PropTypes.bool,
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  maxWidth: PropTypes.string,
  onClose: PropTypes.func,
  isScrollable: PropTypes.bool,
  title: PropTypes.string,
};

export default Modal;
