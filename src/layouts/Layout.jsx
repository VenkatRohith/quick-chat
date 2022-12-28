import React, { useState } from "react";
import AccountInfo from "../features/account-info/AccountInfo";
import Conversations from "../features/conversations/Conversations";
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
          <Conversations />
        )}
      </div>
    </div>
  );
}

export default Layout;
