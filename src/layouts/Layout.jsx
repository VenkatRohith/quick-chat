import React, { useState } from "react";
import AccountInfo from "../features/account-info/AccountInfo";
//import ConversationMessages from "../features/conversation-messages/ConversationMessages";
import Conversations from "../features/conversations/Conversations";
import UserSettings from "../features/user-settings/UserSettings";
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
