function Header({ handleShowAccountInfo }) {
  return (
    <div className="layout__header">
      <div className="layout__header__appInfo">
        <button className="iconWrapper logo">
          <i className="bi bi-chat-quote"></i>
        </button>
        <h1 className="title">QuickChat</h1>
      </div>
      <button
        className="iconWrapper profilePic"
        onClick={handleShowAccountInfo}
        title="Account Info"
      >
        <i className="bi bi-person-circle"></i>
      </button>
    </div>
  );
}

export default Header;
