import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../store/cart-slice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { BsCartX } from "react-icons/bs";
import "./showcart.css";
const ShowCart = ({ id, name, quantity, price, image, total }) => {
  const dispatch = useDispatch();
  const removeHandler = () => {
    toast.warn("Item Removed", {
      closeOnClick: true,
      autoClose: 500,
    });
    dispatch(cartAction.removeFromCart(id));
  };

  const addHandler = () => {
    toast.success("Another Item Added", {
      closeOnClick: true,
    });
    dispatch(
      cartAction.addToCart({
        name,
        image,
        id,
        price,
      })
    );
  };

  return (
    <div className="cartItem">
      <img src={image} alt={name} />
      <p>${price} </p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <div className="btn">
        <button className="cart-actions" onClick={removeHandler}>
          -
        </button>
        <button className="cart-actions" onClick={addHandler}>
          +
        </button>
      </div>
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
      <h2>Shopping Cart</h2>

      <ul>
        {cartItem && cartItem.length > 0 ? (
          <div>
            <div className="total-price">
              <h3>Total: ${totals}</h3>
              <Link to="order">
                <button className="orderBtn">Place Order</button>
              </Link>
            </div>
            {cartItem.map((product, index) => (
              <ShowCart
                key={index}
                id={product.id}
                image={product.image}
                name={product.name}
                quantity={product.quantity}
                price={product.price}
                total={product.totalPrice}
              />
            ))}
          </div>
        ) : (
          <div className="emptyContainer">
            <h1 className="empty">
              <BsCartX className="icon" />
            </h1>
            <Link to="/">
              {" "}
              <button>Goto Shopping</button>
            </Link>
          </div>
        )}
      </ul>
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default CartItem;
