import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../components/Input";
import Modal from "../components/Modal";
import { setAccountInfo } from "../store/accountInfo/accountInfoSlice";
import "./UserSettings.scss";

function UserSettings({ showSettings, handleCloseSettings, userValues }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  useEffect(() => {
    setName(userValues?.name);
    setRole(userValues?.role);
  }, [userValues?.name, userValues?.role]);

  const isButtonDisabled = !name?.trim() || !role?.trim();
  const buttonDisabledClass = isButtonDisabled ? "disabled" : "";

  const updateUserSettings = () => {
    dispatch(setAccountInfo({ name, role }));
    setName("");
    setRole("");
    handleCloseSettings();
  };

  return (
    <Modal isOpen={showSettings} onClose={handleCloseSettings} isCentered>
      <div className="settingsContainer">
        <div className="settingsContainer__nameWrapper">
          <label htmlFor="name">Name</label>
          <Input
            name="name"
            placeholder="Enter your name here"
            onChange={({ target }) => setName(target.value)}
            value={name}
            hasError={!name?.trim()}
          />
        </div>
        <div className="settingsContainer__roleWrapper">
          <label htmlFor="role">Role</label>
          <Input
            name="role"
            placeholder="Enter your role here"
            onChange={({ target }) => setRole(target.value)}
            value={role}
            hasError={!role?.trim()}
          />
        </div>
        <button
          className={`btn primary ${buttonDisabledClass}`}
          disabled={isButtonDisabled}
          onClick={updateUserSettings}
          title="Update"
        >
          Update
        </button>
      </div>
    </Modal>
  );
}

export default UserSettings;
