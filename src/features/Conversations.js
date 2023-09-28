import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import { data } from "../mockData";
import ConversationMessages from "./ConversationMessages";
import "./Conversations.scss";

function Conversation({
  name,
  messageCount,
  profilePic,
  isSelected,
  handleSelectedConversation,
  handleOpenConversation,
  isFocusable,
}) {
  return (
    <li
      className={`conversationItem ${
        isSelected ? "conversationItem-selected" : ""
      }`}
      tabIndex={isFocusable ? "0" : "-1"}
      onClick={() => {
        handleSelectedConversation();
        handleOpenConversation();
      }}
      onFocus={handleSelectedConversation}
      onKeyUp={({ key }) => key === "Enter" && handleOpenConversation()}
    >
      <button className="iconWrapper profilePic" tabIndex="-1">
        {profilePic ? (
          <img src={profilePic} alt="" loading="lazy" />
        ) : (
          <i className="bi bi-person-circle"></i>
        )}
      </button>
      <span className="rightSection">
        <p className={`userName ${isSelected ? "userName-selected" : ""}`}>
          {name}
        </p>
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
  handleOpenConversation,
}) {
  const [selectedConversation, setSelectedConversation] = useState(-1);
  useEffect(() => {
    !isConversationOpen && setSelectedConversation(-1);
  }, [isConversationOpen]);
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
        onKeyUp={({ key }) => {
          if (key === "Enter") {
            setSelectedConversation(-1);
            handleToggleConversationWrapper();
          }
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
          tabIndex="-1"
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
          {data.map(({ id, ...chat }) => (
            <Conversation
              key={id}
              {...chat}
              isSelected={id === selectedConversation}
              handleSelectedConversation={() => {
                setSelectedConversation(id);
              }}
              handleOpenConversation={() => handleOpenConversation(true)}
              isFocusable={!!isConversationOpen}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

function Conversations({ handleShowAccountInfo }) {
  const [toggleConversationWrapper, setToggleConversationWrapper] =
    useState("active");
  const [conversationOpen, setConversationOpen] = useState(false);
  return (
    <>
      {conversationOpen && (
        <ConversationMessages
          handleCloseConversation={() => setConversationOpen(false)}
        />
      )}

      {!conversationOpen && (
        <>
          <Header handleShowAccountInfo={handleShowAccountInfo} />
          <ConversationsWrapper
            conversationTitle="Archived Conversations"
            unseenConversationCount={2}
            isConversationOpen={toggleConversationWrapper === "archived"}
            handleToggleConversationWrapper={() =>
              setToggleConversationWrapper((prevVal) =>
                prevVal === "archived" ? "" : "archived"
              )
            }
            handleOpenConversation={(isOpen) => setConversationOpen(isOpen)}
          />
          <ConversationsWrapper
            conversationTitle="Active Conversations"
            unseenConversationCount={2}
            isConversationOpen={toggleConversationWrapper === "active"}
            handleToggleConversationWrapper={() =>
              setToggleConversationWrapper((prevVal) =>
                prevVal === "active" ? "" : "active"
              )
            }
            handleOpenConversation={(isOpen) => setConversationOpen(isOpen)}
          />
        </>
      )}
    </>
  );
}

export default Conversations;
