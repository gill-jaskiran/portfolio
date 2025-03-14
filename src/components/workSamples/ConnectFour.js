import React from "react";
import "./styles/ConnectFour.css"; 
import Con1 from "./styles/assets/con1.png";
import Con2 from "./styles/assets/con2.png";

const ConnectFour = () => {
  return (
    <div className="connect-four-container">
      <h1>Connect Four Game</h1>
      <p>This is a really simple straightfoward two player game -
      connect four. This game was created using java and uses simple arrays and algorithms
      </p>
      <div className="connect-four-image-gallery">
        <img src={Con1} alt="Connect Four 1" className="connect-four-image" />
        <img src={Con2} alt="Connect Four 2" className="connect-four-image" />
      </div>
    </div>
  );
};

export default ConnectFour;
