import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./subHeader.css";
import { useSelector } from "react-redux";
//import { cartAction } from "../store/cart-slice";
import { bg } from "../assets";
import { NavLink } from "react-router-dom";

library.add(faCartShopping);
const SubHeader = ({ link }) => {
  const quality = useSelector((state) => state.cart.totalQuantity);
  // const dispatch = useDispatch();
  /*const showCart = () => {
    dispatch(cartAction.displayCart());
  };*/
  return (
    <div className="subHeader">
      <div className="sub-img">
        <img src={bg} alt="Roll" />
      </div>
      <div className="input">
        <input type="text" className="input_text" placeholder="Search" />
        <input type="button" className="input_button" value="Search" />
      </div>
      <div className="sub-cart">
        <NavLink to={link} style={{ color: "black" }}>
          <FontAwesomeIcon icon={faCartShopping} size="2x" />
        </NavLink>

        <span>{quality}</span>
      </div>
    </div>
  );
};

export default SubHeader;
