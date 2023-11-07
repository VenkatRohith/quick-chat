import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Input from "../components/Input";
import { messages } from "../mockData";
import { selectAccountInfo } from "../store/accountInfo/accountInfoSlice";
import AccountInfo from "./AccountInfo";
import "./ConversationMessages.scss";
import UserSettings from "./UserSettings";

function Message({
  message,
  messageTime,
  isActive = true,
  isMessageFromSelf = true,
  handleShowUserDetails,
}) {
  return (
    // todo isMessageFromSelf logic -> it should be based on userName, if message from same userName, then selfMessage, else others
    <li className={`messageWrapper ${isMessageFromSelf ? "selfMessage" : ""}`}>
      <button
        className="iconWrapper profilePic"
        tabIndex="-1"
        onClick={() => isMessageFromSelf && handleShowUserDetails()}
      >
        <i
          className={`bi bi-person-circle profile ${
            isActive ? "profile-active" : "profile-inactive"
          }`}
        ></i>
      </button>
      <span className="messageWrapper__descriptionSection">
        <p className="description">{message}</p>
        <p className="messageTime">{messageTime}</p>
      </span>
    </li>
  );
}
function CurrentMessage() {
  const [message, setMessage] = useState("");
  const handleSendMessage = (message) => {
    console.log(message);
    setMessage("");
  };
  const sendBtnDisabled = message?.trim() === "";
  return (
    <div className="messagesContainer__currentMessageWrapper">
      <button className="iconWrapper attachmentIcon" title="Upload">
        <i className="bi bi-paperclip"></i>
      </button>
      <Input
        name="message"
        placeholder="Enter your message here"
        onChange={({ target }) => setMessage(target.value)}
        onKeyUp={handleSendMessage}
        value={message}
        hasEmoji
      />
      <button
        className="btn primary sendBtn"
        onClick={() => handleSendMessage(message)}
        title={sendBtnDisabled ? "" : "Send"}
        disabled={sendBtnDisabled}
      >
        <span>
          <p>Send</p>
          <span className="iconWrapper sendIcon" tabIndex="-1">
            <i className="bi bi-arrow-right-short"></i>
          </span>
        </span>
      </button>
    </div>
  );
}

function ConversationMessages({ handleCloseConversation }) {
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [showAccountInfo, setShowAccountInfo] = useState(false);
  const { activeStatus, ...userDetails } = useSelector(selectAccountInfo);
  const listRef = useRef();
  useEffect(() => {
    !showAccountInfo &&
      listRef?.current?.scrollTo(0, listRef?.current.scrollHeight);
  }, [showAccountInfo]);
  return (
    <>
      {showAccountInfo ? (
        <>
          <AccountInfo
            handleHideAccountInfo={() => setShowAccountInfo(false)}
            showSettingsModal={() => setShowUserDetails(true)}
          />
          <UserSettings
            showSettings={showUserDetails}
            handleCloseSettings={() => setShowUserDetails(false)}
            userValues={userDetails}
          />
        </>
      ) : (
        <>
          <button
            className="iconWrapper backTo"
            onClick={handleCloseConversation}
            title="Go Back"
          >
            <i className="bi bi-arrow-left"></i>
          </button>
          <div className="messagesContainer">
            <ul className="messagesContainer__list" ref={listRef}>
              {messages.map(({ messageId, ...message }) => (
                <Message
                  key={messageId}
                  {...message}
                  handleShowUserDetails={
                    message?.isMessageFromSelf
                      ? () => setShowAccountInfo(true)
                      : () => null
                  }
                  isActive={message?.isMessageFromSelf ? activeStatus : false}
                />
              ))}
            </ul>
            <CurrentMessage />
          </div>
        </>
      )}
    </>
  );
}

export default ConversationMessages;
