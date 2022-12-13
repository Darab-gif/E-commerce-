import React from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/cart-slice";
import { nanoid } from "@reduxjs/toolkit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  cloth1,
  cloth2,
  cloth3,
  cloth4,
  cloth5,
  cloth6,
  cloth7,
  cloth8,
} from "../../assets";
import "./cloth.css";
const clothOBJ = [
  {
    id: nanoid(),
    name: "Versace",
    price: 40,
    image: cloth1,
    review: "Quality",
  },
  {
    id: nanoid(),
    name: "Versace",
    price: 40,
    image: cloth2,
    review: "Quality",
  },
  {
    id: nanoid(),
    name: "Versace",
    price: 40,
    image: cloth3,
    review: "Quality",
  },
  {
    id: nanoid(),
    name: "Versace",
    price: 40,
    image: cloth4,
    review: "Quality",
  },
  {
    id: nanoid(),
    name: "Versace",
    price: 40,
    image: cloth5,
    review: "Quality",
  },
  {
    id: nanoid(),
    name: "Versace",
    price: 40,
    image: cloth6,
    review: "Quality",
  },
  {
    id: nanoid(),
    name: "Versace",
    price: 40,
    image: cloth7,
    review: "Quality",
  },
  {
    id: nanoid(),
    name: "Versace",
    price: 40,
    image: cloth8,
    review: "Quality",
  },
];

const Cloth = ({ id, name, price, image, review }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    toast.success("Item added to the cart", {
      closeOnClick: true,
    });
    dispatch(
      cartAction.addToCart({
        name,
        id,
        image,
        price,
      })
    );
  };
  return (
    <div className="cloth">
      <img src={image} className="cloth-img" alt="" />
      <h2 className="cloth-nam">{name}</h2>
      <p className="cloth-rev">{review}</p>
      <p className="cloth-price">${price}</p>
      <button onClick={addToCart}>Add To Cart</button>
    </div>
  );
};

const Material = () => {
  return (
    <div className="cloth-body">
      {clothOBJ.map((product, index) => (
        <Cloth
          key={index}
          id={product.id}
          image={product.image}
          name={product.name}
          review={product.review}
          price={product.price}
        />
      ))}
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default Material;
