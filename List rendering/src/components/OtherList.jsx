import React from "react";

function OtherList({ items }) {
  return (
    <div>
      <h3>FrameWorks:</h3>
      {items.length > 0 ? (
        items.map((item, index) => <p key={index}>{item}</p>)
      ) : (
        <p>Items not found</p>
      )}
    </div>
  );
}

export default OtherList;
