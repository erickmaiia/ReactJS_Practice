import React from "react";

function Person({ namee, photo, profission, age }) {
  return (
    <div>
      <img src={photo} alt="" />
      <h2>Name: {namee}</h2>
      <p>Age: {age}</p>
      <p>Profission: {profission}</p>
    </div>
  );
}

export default Person;
