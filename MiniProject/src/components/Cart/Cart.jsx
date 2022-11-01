import "./Cart.css";

function Cart({ cart, handleRemoveById, totalValue }) {
  return (
    <div className="cart">
      <h3>Cart</h3>
      {cart.map((item, key) => (
        <div key={key} className="valueItem">
          <span>{item.qtt}x</span>
          <span>{item.name}</span>
          <button onClick={() => handleRemoveById(item)} id="remove">
            Remove
          </button>
        </div>
      ))}
      <p>Total value: R$ {totalValue.toFixed(2)}</p>
    </div>
  );
}

export default Cart;
