import React from "react";
import "./Card.css"; // Import the Card component CSS file

function Card({ children }) {
  return <div className="card">{children}</div>;
}

export default Card;
