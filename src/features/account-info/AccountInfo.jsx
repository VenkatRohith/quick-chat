import React from "react";
import Switch from "../../components/switch/Switch";
import "./AccountInfo.scss";

function AccountInfo({ handleHideAccountInfo }) {
  return (
    <div className="accountInfo__container">
      <button className="iconWrapper backTo" onClick={handleHideAccountInfo}>
        <i class="bi bi-arrow-left"></i>
        Back to Chats
      </button>
      <button className="iconWrapper profilePic">
        <i class="bi bi-person-circle"></i>
      </button>
      <div className="accountName">
        <h2>Bill Bradford </h2>
        <button className="iconWrapper settings">
          <i class="bi bi-gear"></i>
        </button>
      </div>
      <p className="role">Lead UX/UI Designer</p>
      <Switch />
    </div>
  );
}

export default AccountInfo;
