import React, { useState } from "react";
import Input from "../../components/input/Input";
import "./ConversationMessages.scss";

const messages = [
  { message: "Hi Henry!!", messageTime: "9h ago", isMessageFromSelf: true },
  {
    message: "How can I help you today?",
    messageTime: "9h ago",
    isMessageFromSelf: true,
  },
  {
    message: "Hey Bill, nice to meet you!",
    messageTime: "5h ago",
    isMessageFromSelf: false,
  },
  {
    message: "Hope you re doing fine.",
    messageTime: "5h ago",
    isMessageFromSelf: false,
  },
  {
    message: "I'm good thanks for asking",
    messageTime: "5h ago",
    isMessageFromSelf: true,
  },
  {
    message:
      "I am interested to know more about your prices and services you offer",
    messageTime: "5h ago",
    isMessageFromSelf: false,
  },
  {
    message:
      "Sure, please click below link to find more useful information https://www.google.com",
    messageTime: "9h ago",
    isMessageFromSelf: true,
  },
  {
    message:
      "Awesome, will get in touch if there's anything unclear. Thanks for now!",
    messageTime: "5h ago",
    isMessageFromSelf: false,
  },
  {
    message: "Have a great day",
    messageTime: "5h ago",
    isMessageFromSelf: false,
  },
  {
    message: "Thanks buddy, you too as well",
    messageTime: "5h ago",
    isMessageFromSelf: true,
  },
];

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
      />
      <button className="btn primary sendBtn">
        <span>
          <p>Send</p>
          <button className="iconWrapper sendIcon" tabIndex="-1">
            <i className="bi bi-arrow-right-short"></i>
          </button>
        </span>
      </button>
    </div>
  );
}

function ConversationMessages() {
  return (
    <div className="messagesContainer">
      <ul className="messagesContainer__list">
        {messages.map((message, idx) => (
          <Message key={idx} {...message} />
        ))}
      </ul>
      <CurrentMessage />
    </div>
  );
}

export default ConversationMessages;
