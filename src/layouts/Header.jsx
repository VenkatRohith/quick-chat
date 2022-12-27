function Header({ handleShowAccountInfo }) {
  return (
    <div className="layout__header">
      <div className="layout__header__appInfo">
        <button className="iconWrapper logo">
          <i class="bi bi-chat-quote"></i>
        </button>
        <h1 className="title">QuickChat</h1>
      </div>
      <button
        className="iconWrapper profilePic"
        onClick={handleShowAccountInfo}
      >
        <i class="bi bi-person-circle"></i>
      </button>
    </div>
  );
}

export default Header;
