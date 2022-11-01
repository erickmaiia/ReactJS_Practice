import React from "react";
import Filter from "../Filter/Filter";
import Home from "../Home/Home";
import Cart from "../Cart/Cart";
import cards from "../../cards.json";
import Order from "../Order/Order";
import { useState } from "react";
import "./RenderComponents.css";

function RenderComponents() {
  const [searchName, setSearchName] = useState("");
  const [order, setOrder] = useState("");
  const [minimum, setMinimum] = useState(0);
  const [maximum, setMaximum] = useState(2000);
  const [cartProducts, setCartProducts] = useState([]);
  const [totalValue, setTotalValue] = useState(0);

  const handleAddToCart = (value) => {
    const copyCart = [...cartProducts];
    const item = copyCart.find((product) => product.id === value.id);

    if (!item) {
      copyCart.push({ ...value, qtt: 1 });
    } else {
      item.qtt += 1;
    }
    setTotalValue(totalValue + value.value);
    setCartProducts(copyCart);
  };
  const handleRemoveById = (value) => {
    const copyCart = [...cartProducts];
    const item = copyCart.find((product) => product.id === value.id);
    if (item.qtt > 1) {
      item.qtt -= 1;
      setCartProducts(copyCart);
    } else {
      const arrayFiltered = copyCart.filter(
        (product) => product.id !== value.id
      );
      setCartProducts(arrayFiltered);
    }
    if (totalValue === -0) {
      setTotalValue(0);
    } else {
      setTotalValue(totalValue - value.value);
    }
  };

  let filter = [...cards];
  if (order != "Default") {
    filter = filter.sort(function (a, b) {
      if (order === "Descending") {
        if (a.value > b.value) {
          return -1;
        }
      }
      if (order === "Growing") {
        if (a.value < b.value) {
          return -1;
        }
      }
    });
  }
  filter = filter
    .filter((value) => {
      if (
        minimum < value.value &&
        value.value < (maximum || 9000) &&
        value.name.toLowerCase().includes(searchName.toLowerCase())
      ) {
        return value;
      }
    })
    .map((value, key) => {
      return (
        <div key={key}>
          <div className="card">
            <img src={value.imageUrl} alt="" />
            <div className="text">
              <p>{value.name}</p>
              <p>R$: {value.value.toFixed(2)}</p>
            </div>
            <button onClick={() => handleAddToCart(value)} className="btn">
              Add to cart
            </button>
          </div>
        </div>
      );
    });

  const quantity = filter.length;

  return (
    <div className="RenderComponents">
      <Filter
        setSearchName={setSearchName}
        setMinimum={setMinimum}
        setMaximum={setMaximum}
      />
      <div className="all">
        <Order quantity={quantity} setOrder={setOrder} />
        <div>
          <Home filter={filter} />
        </div>
      </div>
      <Cart
        cart={cartProducts}
        handleRemoveById={handleRemoveById}
        totalValue={totalValue}
      />
    </div>
  );
}

export default RenderComponents;
