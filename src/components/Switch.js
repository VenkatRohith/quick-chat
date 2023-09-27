import PropTypes from "prop-types";
import React from "react";
import "./Switch.scss";

const Switch = ({ id = "", name = "", handleToggleChange, checked }) => {
  return (
    <label className="switch">
      <input
        type="checkbox"
        id={id ? id : Date.now()}
        name={name}
        aria-label={name}
        onChange={handleToggleChange}
        checked={checked}
        tabIndex="-1"
      />
      <span className="slider"></span>
    </label>
  );
};

Switch.propTypes = {
  checked: PropTypes.bool.isRequired,
  handleToggleChange: PropTypes.func,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
};

export default Switch;
