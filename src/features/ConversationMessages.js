import React, { useState } from "react";
import Input from "../components/Input";
import { messages } from "../mockData";
import "./ConversationMessages.scss";

function Message({
  message,
  messageTime,
  isActive = true,
  isMessageFromSelf = true,
}) {
  return (
    // todo isMessageFromSelf logic -> it should be based on userName, if message from same userName, then selfMessage, else others
    <li className={`messageWrapper ${isMessageFromSelf ? "selfMessage" : ""}`}>
      <button className="iconWrapper profilePic" tabIndex="-1">
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
  return (
    <div className="messagesContainer__currentMessageWrapper">
      <button className="iconWrapper attachmentIcon">
        <i className="bi bi-paperclip"></i>
      </button>
      <Input
        name="message"
        placeholder="Enter your message here"
        onChange={({ target }) => setMessage(target.value)}
        value={message}
        hasEmoji
      />
      <button className="btn primary sendBtn">
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

function ConversationMessages() {
  return (
    <div className="messagesContainer">
      <ul className="messagesContainer__list">
        {messages.map(({ messageId, ...message }) => (
          <Message key={message.messageId} {...message} />
        ))}
      </ul>
      <CurrentMessage />
    </div>
  );
}

export default ConversationMessages;
