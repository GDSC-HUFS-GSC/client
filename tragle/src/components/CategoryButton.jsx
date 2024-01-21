import React from "react";
import "./CategoryButton.css";

const CategoryButton = ({ category, onClick }) => {
  return (
    <button onClick={() => onClick(category)} className="category-button">
      {category}
    </button>
  );
};

export default CategoryButton;
