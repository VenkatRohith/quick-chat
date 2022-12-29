import React, { useState } from "react";
import Switch from "../../components/switch/Switch";
import "./AccountInfo.scss";

function AccountInfo({ handleHideAccountInfo, showSettingsModal }) {
  const [checked, setChecked] = useState(true);
  return (
    <div className="accountInfo__container">
      <button className="iconWrapper backTo" onClick={handleHideAccountInfo}>
        <i className="bi bi-arrow-left"></i>
      </button>
      <button className="iconWrapper profilePic">
        <i className="bi bi-person-circle"></i>
      </button>
      <div className="accountName">
        <h2>Bill Bradford</h2>
        <button className="iconWrapper settings" onClick={showSettingsModal}>
          <i className="bi bi-gear"></i>
        </button>
      </div>
      <p className="role">Lead UX/UI Designer</p>
      <div className="switchWrapper">
        <Switch
          name="status"
          handleToggleChange={({ target }) => setChecked(target.checked)}
          checked={checked}
        />
        <label className="statusLabel">{checked ? "Active" : "Inactive"}</label>
      </div>
    </div>
  );
}

export default AccountInfo;
