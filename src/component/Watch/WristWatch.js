import React from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/cart-slice";
import { nanoid } from "@reduxjs/toolkit";
import {
  watch1,
  watch2,
  watch3,
  watch4,
  watch7,
  smart1,
  smart2,
  watch8,
} from "../../assets";
import "./watch.css";
const watchOBJ = [
  {
    id: nanoid(),
    name: "Rolex",
    price: 40,
    image: watch1,
    review: "Quality",
  },
  {
    id: nanoid(),
    name: "Versace",
    price: 40,
    image: smart1,
    review: "Quality",
  },
  {
    id: nanoid(),
    name: "Versace",
    price: 40,
    image: watch3,
    review: "Quality",
  },
  {
    id: nanoid(),
    name: "Versace",
    price: 40,
    image: watch4,
    review: "Quality",
  },
  {
    id: nanoid(),
    name: "Versace",
    price: 40,
    image: smart2,
    review: "Quality",
  },
  {
    id: nanoid(),
    name: "Versace",
    price: 40,
    image: watch2,
    review: "Quality",
  },
  {
    id: nanoid(),
    name: "Nike",
    price: 40,
    image: watch7,
    review: "Quality",
  },
  {
    id: nanoid(),
    name: "Rolex",
    price: 40,
    image: watch8,
    review: "Quality",
  },
];

const Watch = ({ id, name, price, image, review }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
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
    <div className="watch">
      <img src={image} className="watch-img" alt="" />
      <h2 className="watch-nam">{name}</h2>
      <p className="watch-rev">{review}</p>
      <p className="watch-price">${price}</p>
      <button onClick={addToCart}>Add To Cart</button>
    </div>
  );
};

const WristWatch = () => {
  return (
    <div className="watch-body">
      {watchOBJ.map((product, index) => (
        <Watch
          key={index}
          id={product.id}
          image={product.image}
          name={product.name}
          review={product.review}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default WristWatch;
