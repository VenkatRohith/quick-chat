import PropTypes from "prop-types";
import React from "react";
import "./Input.scss";

function Input({
  name,
  placeholder,
  onChange,
  className = "",
  value = "",
  handleIconClick,
  hasEmoji = false,
}) {
  let inputClassName = "input";
  if (className) inputClassName += ` ${className}`;
  return (
    <div className="inputWrapper">
      <input
        type="text"
        className={inputClassName}
        aria-label={name}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        autoComplete="off"
        spellcheck="false"
      />
      {hasEmoji ? (
        <button
          className="iconWrapper inputWrapper__emojiIcon"
          onClick={handleIconClick}
        >
          <i className="bi bi-emoji-smile"></i>
        </button>
      ) : null}
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleIconClick: PropTypes.func,
  hasEmoji: PropTypes.bool,
};

export default Input;
