import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Switch from "../components/Switch";
import {
  selectAccountInfo,
  setActiveStatus,
} from "../store/accountInfo/accountInfoSlice";
import "./AccountInfo.scss";

function AccountInfo({ handleHideAccountInfo, showSettingsModal }) {
  const dispatch = useDispatch();
  const {
    name = "",
    activeStatus = false,
    role = "",
  } = useSelector(selectAccountInfo);

  const handleActiveStatus = (status) => {
    dispatch(setActiveStatus(status));
  };

  return (
    <div className="accountInfo__container">
      <button
        className="iconWrapper backTo"
        onClick={handleHideAccountInfo}
        title="Back To"
      >
        <i className="bi bi-arrow-left"></i>
      </button>
      <button className="iconWrapper profilePic">
        <i className="bi bi-person-circle"></i>
      </button>
      <div className="accountName">
        <h2>{name}</h2>
        <button
          className="iconWrapper settings"
          onClick={showSettingsModal}
          title="Settings"
        >
          <i className="bi bi-gear" tabIndex="-1"></i>
        </button>
      </div>
      <p className="role">{role}</p>
      <div className="switchWrapper">
        <Switch
          name="status"
          handleToggleChange={({ target }) =>
            handleActiveStatus(target.checked)
          }
          checked={activeStatus}
          label={activeStatus ? "Active" : "Inactive"}
        />
        <label
          className="statusLabel"
          onClick={() => handleActiveStatus(!activeStatus)}
          onKeyUp={({ key }) =>
            key === "Enter" && handleActiveStatus(!activeStatus)
          }
          tabIndex={0}
        >
          {activeStatus ? "Active" : "Inactive"}
        </label>
      </div>
    </div>
  );
}

export default AccountInfo;
