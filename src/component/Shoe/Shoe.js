import React from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/cart-slice";
import { nanoid } from "@reduxjs/toolkit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  newshoe,
  newShoe2,
  shoe3,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  shoe8,
} from "../../assets";
import "./shoe.css";
const shoeOBJ = [
  {
    id: nanoid(),
    name: "Addidas",
    price: 40,
    image: newshoe,
    review: "Quality",
  },
  {
    id: nanoid(),
    name: "Prada",
    price: 40,
    image: newShoe2,
    review: "Quality",
  },
  {
    id: nanoid(),
    name: "Addidas",
    price: 40,
    image: shoe3,
    review: "Quality",
  },
  {
    id: nanoid(),
    name: "Addidas",
    price: 40,
    image: shoe4,
    review: "Quality",
  },
  {
    id: nanoid(),
    name: "Versace",
    price: 40,
    image: shoe5,
    review: "Quality",
  },
  {
    id: nanoid(),
    name: "Versace",
    price: 40,
    image: shoe6,
    review: "Quality",
  },
  {
    id: nanoid(),
    name: "Versace",
    price: 40,
    image: shoe7,
    review: "Quality",
  },
  {
    id: nanoid(),
    name: "Versace",
    price: 40,
    image: shoe8,
    review: "Quality",
  },
];

const Shoe = ({ id, name, price, image, review }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    toast.success("Item added to the cart", {
      closeOnClick: true,
    });
    dispatch(
      cartAction.addToCart({
        id,
        name,
        image,
        price,
      })
    );
  };

  return (
    <div className="shoe">
      <img src={image} alt="" />
      <h2>{name}</h2>
      <p>{review}</p>
      <p>${price}</p>
      <button onClick={addToCart}>Add To Cart</button>
    </div>
  );
};

const Leather = () => {
  return (
    <div className="shoe-body">
      {shoeOBJ.map((product, index) => (
        <Shoe
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

export default Leather;
