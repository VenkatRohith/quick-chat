import React, { useState } from "react";
import AccountInfo from "../features/account-info/AccountInfo";
import Header from "./Header";
import "./Layout.scss";

function Layout() {
  const [showAccountInfo, setShowAccountInfo] = useState(false);
  return (
    <div className="layout">
      <Header handleShowAccountInfo={() => setShowAccountInfo(true)} />
      <div className="layout__body">
        {showAccountInfo ? (
          <AccountInfo
            handleHideAccountInfo={() => setShowAccountInfo(false)}
          />
        ) : (
          <p>Chats Placeholder</p>
        )}
      </div>
    </div>
  );
}

export default Layout;
