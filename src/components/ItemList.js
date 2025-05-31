import React from "react";

function Item({ name, category }) {
  return (
    <li>
      {name} - <strong>{category}</strong>
    </li>
  );
}

export default Item;
