import React from "react";
import Item from "./Item";

function ItemList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </ul>
  );
}

export default ItemList;
