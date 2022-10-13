import React from "react";

function Child(props) {
  return (
    <div>
      <h3>Child</h3>
      <p>Name: {props.name}</p>
    </div>
  );
}

export default Child;
