import React from "react";
import "./styles/PrivateChat.css"; 
import chat1 from "./styles/assets/chat1.jpg";
import chat2 from "./styles/assets/chat2.jpg";
import chat3 from "./styles/assets/chat3.jpg";
import chat4 from "./styles/assets/chat4.jpg";
import chat5 from "./styles/assets/chat5.jpg";
import chat6 from "./styles/assets/chat6.jpg";
import chat7 from "./styles/assets/chat7.jpg";

const PrivateChatBox = () => {
  const chatImages = [chat1, chat2, chat3, chat4, chat5, chat6, chat7];

  return (
    <div className="private-chat-container">
      <h1>Private Chat Box</h1>
      <p>I created this private chat box where user are required to sign up and log in, in order to 
        start chatting. Users can choose which groups to chat on and participate in private chats. The
        chat history is all saved so when the user returns they are able to review the chat logs.
      </p>
      <div className="project-links">
        <p>
          Source Code for the Application:  <a 
            href="https://github.com/gill-jaskiran/101458336_lab_test1_chat_app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link"
          >GitHub</a>
        </p>
      </div>
      <div className="chat-image-gallery">
        {chatImages.map((image, index) => (
          <img key={index} src={image} alt={`Chat ${index + 1}`} className="chat-image" />
        ))}
      </div>
    </div>
  );
};

export default PrivateChatBox;
