import React from "react";

function Filter({ search, onSearchChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search items..."
        value={search} // Controlled input
        onChange={(e) => onSearchChange(e.target.value)} // Callback to update state
      />
    </div>
  );
}

export default Filter;
