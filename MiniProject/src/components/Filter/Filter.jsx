import React from "react";
import "./Filter.css";

function Filter({ setSearchName, setMaximum, setMinimum }) {
  return (
    <div className="filter">
      <h3>Filter</h3>
      <label>Minimum value:</label>
      <input
        type="number"
        placeholder="0"
        onChange={(e) => {
          setMinimum(Number(e.target.value));
        }}
      />
      <label>Maximum value:</label>
      <input
        type="number"
        placeholder="2000"
        onChange={(e) => {
          setMaximum(Number(e.target.value));
        }}
      />
      <label>Search for name:</label>
      <input
        type="text"
        onChange={(e) => {
          setSearchName(e.target.value);
        }}
        placeholder="Search..."
      />
    </div>
  );
}
export default Filter;
