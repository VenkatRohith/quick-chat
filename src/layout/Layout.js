import React, { useState } from "react";
import { useSelector } from "react-redux";
import AccountInfo from "../features/AccountInfo";
import Conversations from "../features/Conversations";
import UserSettings from "../features/UserSettings";
import { selectAccountInfo } from "../store/accountInfo/accountInfoSlice";
import "./Layout.scss";

function Layout() {
  const [showAccountInfo, setShowAccountInfo] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const { activeStatus: _, ...userDetails } = useSelector(selectAccountInfo);
  return (
    <div className="layout">
      {showAccountInfo ? (
        <>
          <AccountInfo
            handleHideAccountInfo={() => setShowAccountInfo(false)}
            showSettingsModal={() => setShowSettings(true)}
          />
          <UserSettings
            showSettings={showSettings}
            handleCloseSettings={() => setShowSettings(false)}
            userValues={userDetails}
          />
        </>
      ) : (
        <>
          <div className="layout__body">
            <Conversations
              handleShowAccountInfo={() => setShowAccountInfo(true)}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Layout;
