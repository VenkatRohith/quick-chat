import React, { useState } from "react";
import AccountInfo from "../features/AccountInfo";
//import ConversationMessages from "../features/ConversationMessages";
import Conversations from "../features/Conversations";
import UserSettings from "../features/UserSettings";
import Header from "./Header";
import "./Layout.scss";

function Layout() {
  const [showAccountInfo, setShowAccountInfo] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
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
          />
        </>
      ) : (
        <>
          <Header handleShowAccountInfo={() => setShowAccountInfo(true)} />
          <div className="layout__body">
            <Conversations />
            {/* <ConversationMessages /> */}
          </div>
        </>
      )}
    </div>
  );
}

export default Layout;
