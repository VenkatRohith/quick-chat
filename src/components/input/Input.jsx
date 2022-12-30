import React from "react";
import "./Input.scss";

function Input({
  name,
  placeholder,
  onChange,
  className = "",
  value = "",
  handleIconClick,
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
      />
      <button
        className="iconWrapper inputWrapper__emojiIcon"
        onClick={handleIconClick}
      >
        <i className="bi bi-emoji-smile"></i>
      </button>
    </div>
  );
}

export default Input;
