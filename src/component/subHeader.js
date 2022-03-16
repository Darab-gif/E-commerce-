import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./subHeader.css";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../store/cart-slice";

library.add(faCartShopping);
const SubHeader = () => {
  const quality = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const showCart = () => {
    dispatch(cartAction.displayCart());
  };
  return (
    <div className="subHeader">
      <div className="sub-img">
        <img src="./image/background2.jpg" alt="Roll" />
      </div>
      <div className="input">
        <input type="text" placeholder="Search" />
        <input type="button" value="Search" />
      </div>
      <div className="sub-cart">
        <FontAwesomeIcon onClick={showCart} icon={faCartShopping} size="2x" />

        <span>{quality}</span>
      </div>
    </div>
  );
};

export default SubHeader;
