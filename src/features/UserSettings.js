import { useState } from "react";
import Input from "../components/Input";
import Modal from "../components/Modal";
import "./UserSettings.scss";

function UserSettings({
  showSettings,
  handleCloseSettings,
  userValues = { name: "Bill Bradford", role: "Lead UX/UI Designer" },
}) {
  const [name, setName] = useState(userValues.name || "");
  const [role, setRole] = useState(userValues.role || "");
  return (
    <Modal show={showSettings} onClose={handleCloseSettings} centered>
      <div className="settingsContainer">
        <div className="settingsContainer__nameWrapper">
          <label htmlFor="name">Name</label>
          <Input
            name="name"
            placeholder="Enter your name here"
            onChange={({ target }) => setName(target.value)}
            value={name || ""}
          />
        </div>
        <div className="settingsContainer__roleWrapper">
          <label htmlFor="role">Role</label>
          <Input
            name="role"
            placeholder="Enter your role here"
            onChange={({ target }) => setRole(target.value)}
            value={role || ""}
          />
        </div>
      </div>
    </Modal>
  );
}

export default UserSettings;
