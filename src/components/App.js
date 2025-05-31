import React, { useState } from "react";
import Filter from "./Filter";
import ItemForm from "./ItemForm";
import ItemList from "./ItemList";
import itemsData from "../data/items";

function App() {
  const [items, setItems] = useState(itemsData);
  const [search, setSearch] = useState("");

  function handleSearchChange(searchText) {
    setSearch(searchText);
  }

  function handleItemFormSubmit(newItem) {
    setItems([...items, newItem]);
  }

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Filter search={search} onSearchChange={handleSearchChange} />
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <ItemList items={filteredItems} />
    </div>
  );
}

export default App;
