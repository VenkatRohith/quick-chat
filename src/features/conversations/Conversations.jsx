import React, { useState } from "react";
import "./Conversations.scss";
import { data } from "./mockData";

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
          <i className="bi bi-person-circle"></i>
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

function ConversationsWrapper({
  conversationTitle = "",
  unseenConversationCount = 0,
  isConversationOpen = false,
  handleToggleConversationWrapper,
}) {
  const [selectedConversation, setSelectedConversation] = useState(-1);
  return (
    <div
      className={`conversationsContainer ${
        isConversationOpen ? "container-expanded" : "container-collapsed"
      }`}
    >
      <div
        className="conversationsContainer__header"
        onClick={() => {
          setSelectedConversation(-1);
          handleToggleConversationWrapper();
        }}
        tabIndex="0"
      >
        <span className="titleWrapper">
          <p className="title">{conversationTitle}</p>
          {unseenConversationCount ? (
            <p className="count">{unseenConversationCount}</p>
          ) : null}
        </span>
        <button
          className={`iconWrapper arrowIcon ${
            isConversationOpen ? "arrowIcon-up" : "arrowIcon-down"
          }`}
        >
          <i className="bi bi-caret-up-fill"></i>
        </button>
      </div>

      <div
        className={`conversationsContainer__body ${
          isConversationOpen ? "body-expanded" : "body-collapsed"
        }`}
      >
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
      </div>
    </div>
  );
}

function Conversations() {
  const [toggleConversationWrapper, setToggleConversationWrapper] =
    useState("active");
  return (
    <>
      <ConversationsWrapper
        conversationTitle="Active Conversations"
        unseenConversationCount={2}
        isConversationOpen={toggleConversationWrapper === "active"}
        handleToggleConversationWrapper={() =>
          setToggleConversationWrapper((prevVal) =>
            prevVal === "active" ? "" : "active"
          )
        }
      />
      <ConversationsWrapper
        conversationTitle="Archived Conversations"
        unseenConversationCount={2}
        isConversationOpen={toggleConversationWrapper === "archived"}
        handleToggleConversationWrapper={() =>
          setToggleConversationWrapper((prevVal) =>
            prevVal === "archived" ? "" : "archived"
          )
        }
      />
    </>
  );
}

export default Conversations;
