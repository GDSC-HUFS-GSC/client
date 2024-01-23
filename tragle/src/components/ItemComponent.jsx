import React from "react";
import "./Items.css";

const ItemComponent = ({ title, imageUrl }) => {
  return (
    <div className="item-container">
      <img src={imageUrl} alt={title} className="item-image" />
      <h3 className="item-title">{title}</h3>
    </div>
  );
};

export default ItemComponent;
