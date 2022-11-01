import React from "react";
import "./Order.css";

function Order({ quantity, setOrder }) {
  return (
    <div className="order">
      <p>Quantity of products: {quantity}</p>
      <div className="select">
        <p>Order:</p>
        <select
          onChange={(e) => {
            setOrder(e.target.value);
          }}
        >
          <option>Default</option>
          <option>Descending</option>
          <option>Growing</option>
        </select>
      </div>
    </div>
  );
}

export default Order;
