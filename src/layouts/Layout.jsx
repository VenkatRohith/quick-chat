import React, { useState } from "react";
import Modal from "../components/modal/Modal";
import AccountInfo from "../features/account-info/AccountInfo";
import ConversationMessages from "../features/conversation-messages/ConversationMessages";
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
          <Modal show={showSettings} onClose={() => setShowSettings(false)}>
            Modal Content
          </Modal>
        </>
      ) : (
        <>
          <Header handleShowAccountInfo={() => setShowAccountInfo(true)} />
          <div className="layout__body">
            {/* <Conversations /> */}
            <ConversationMessages />
          </div>
        </>
      )}
    </div>
  );
}

export default Layout;
