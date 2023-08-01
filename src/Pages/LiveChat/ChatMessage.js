import React from "react";

const ChatMessage = ({ name, picture, lastChat }) => {
  return (
    <div className="live-message">
      <p className="Live-name">
        <span>
          <img src={picture} alt="logo" />
        </span>
        {name}
      </p>
      <p className="chatMessage">{lastChat}</p>
    </div>
  );
};
export default ChatMessage;
