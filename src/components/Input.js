import PropTypes from "prop-types";
import React from "react";
import { SCRIPT_INJECTION_REGEX } from "../utils/constants";
import "./Input.scss";

function Input({
  name,
  placeholder,
  onChange,
  onKeyUp,
  className = "",
  value = "",
  handleIconClick,
  hasEmoji = false,
  hasError = false,
}) {
  let inputClassName = "inputWrapper";
  if (hasError) inputClassName += " inputWrapper__hasError";
  if (className) inputClassName += ` ${className}`;

  const handleChange = ({ target }) => {
    let value = target?.value;
    if (value?.length > 0) value = value.replace(SCRIPT_INJECTION_REGEX, "");
    onChange?.({ target: { ...target, value } });
  };

  return (
    <div className={inputClassName}>
      <input
        type="text"
        className="input"
        aria-label={name}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        autoComplete="off"
        spellCheck="false"
      />
      {hasEmoji ? (
        <button
          className="iconWrapper inputWrapper__emojiIcon"
          onClick={handleIconClick}
          title="Emojis"
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
  onKeyUp: PropTypes.func,
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleIconClick: PropTypes.func,
  hasEmoji: PropTypes.bool,
};

export default Input;
