import React from "react";
import ItemComponent from "./ItemComponent";
import "./Items.css";

const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <ItemComponent
          key={item.id}
          title={item.title}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
};

export default ItemList;
