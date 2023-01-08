import React from "react";
import "./Switch.scss";

function Switch({ id = "", name = "", handleToggleChange, checked }) {
  const switch_id = id ? id : Date.now();
  return (
    <label className="switch">
      <input
        type="checkbox"
        id={switch_id}
        name={name}
        aria-label={name}
        onChange={handleToggleChange}
        checked={checked}
      />
      <span className="slider"></span>
    </label>
  );
}

export default Switch;
