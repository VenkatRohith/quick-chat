import React, { useState } from "react";
import "./Conversations.scss";

const data = [
  {
    name: "Henry Boyd",
    messageCount: 0,
    profilePic: "https://xsgames.co/randomusers/avatar.php?g=male",
  },
  {
    name: "Martha Curtis",
    messageCount: 2,
    profilePic: "https://xsgames.co/randomusers/avatar.php?g=female",
  },
  {
    name: "Phillip Tucker",
    messageCount: 0,
    profilePic: "https://xsgames.co/randomusers/avatar.php?g=male",
  },
  {
    name: "Christine Reid",
    messageCount: 0,
    profilePic: "https://xsgames.co/randomusers/avatar.php?g=female",
  },
  {
    name: "Jerry Guzman",
    messageCount: 0,
    profilePic: "https://xsgames.co/randomusers/avatar.php?g=male",
  },
  {
    name: "Russell Williams",
    messageCount: 0,
    profilePic: "https://xsgames.co/randomusers/avatar.php?g=male",
  },
];

function Conversation({
  name,
  messageCount,
  profilePic,
  isSelected,
  handleSelectedConversation,
}) {
  return (
    <li
      className={`conversationItem ${
        isSelected ? "conversationItem-selected" : ""
      }`}
      tabIndex="0"
      onClick={handleSelectedConversation}
      onFocus={handleSelectedConversation}
    >
      <button className="iconWrapper profilePic" tabIndex="-1">
        {profilePic ? (
          <img src={profilePic} alt="" loading="lazy" />
        ) : (
          <i class="bi bi-person-circle"></i>
        )}
      </button>
      <span className="rightSection">
        <p className={`userName${isSelected ? "-selected" : ""}`}>{name}</p>
        {messageCount ? (
          <span className="messageCount">{messageCount}</span>
        ) : null}
      </span>
    </li>
  );
}

function Conversations() {
  const [selectedConversation, setSelectedConversation] = useState(-1);
  return (
    <ul className="conversationContainer">
      {data.map((chat, idx) => (
        <Conversation
          key={idx}
          {...chat}
          isSelected={idx === selectedConversation}
          handleSelectedConversation={() => setSelectedConversation(idx)}
        />
      ))}
    </ul>
  );
}

export default Conversations;
