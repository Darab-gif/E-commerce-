import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../store/cart-slice";
import "./showcart.css";
const ShowCart = ({ id, name, quantity, price, imageURL, total }) => {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(cartAction.removeFromCart(id));
  };

  const addHandler = () => {
    dispatch(
      cartAction.addToCart({
        name,
        id,
        price,
      })
    );
  };

  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={removeHandler}>
        -
      </button>
      <button className="cart-actions" onClick={addHandler}>
        +
      </button>
    </div>
  );
};

const CartItem = () => {
  const cartItem = useSelector((state) => state.cart.itemList);
  let totals = 0;
  const totalPrice = useSelector((state) => state.cart.itemList);

  totalPrice.forEach((item) => (totals += item.totalPrice));
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <div className="total-price">
        <h3>Total: ${totals}</h3>
        <button className="orderBtn">Place Order</button>
      </div>
      <ul>
        {cartItem.map((product, index) => (
          <ShowCart
            key={index}
            id={product.id}
            name={product.name}
            quantity={product.quantity}
            price={product.price}
            total={product.totalPrice}
          />
        ))}
      </ul>
    </div>
  );
};

export default CartItem;
