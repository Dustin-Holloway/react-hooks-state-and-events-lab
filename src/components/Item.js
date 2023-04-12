import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(true);

  return (
    <li className={!isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className="add"
        onClick={() => {
          setIsInCart(!isInCart);
        }}
      >
        {isInCart ? "Add to" : "Remove From"} Cart
      </button>
    </li>
  );
}

export default Item;
