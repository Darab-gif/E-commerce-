import React from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../store/cart-slice";

import "./shoe.css";
const shoeOBJ = [
  {
    id: 7,
    name: "Addidas",
    price: 40,
    imageURL: "./image/shoe1.jpg",
    review: "Quality",
  },
  {
    id: 8,
    name: "Prada",
    price: 40,
    imageURL: "./image/shoe2.jpg",
    review: "Quality",
  },
  {
    id: 9,
    name: "Addidas",
    price: 40,
    imageURL: "./image/shoe3.jpg",
    review: "Quality",
  },
  {
    id: 10,
    name: "Addidas",
    price: 40,
    imageURL: "./image/shoe4.jpg",
    review: "Quality",
  },
  {
    id: 11,
    name: "Versace",
    price: 40,
    imageURL: "./image/shoe5.jpg",
    review: "Quality",
  },
  {
    id: 12,
    name: "Versace",
    price: 40,
    imageURL: "./image/shoe6.jpeg",
    review: "Quality",
  },
];

const Shoe = ({ id, name, price, imageURL, review }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartAction.addToCart({
        id,
        name,
        price,
      })
    );
  };

  return (
    <div className="shoe">
      <img src={imageURL} alt="" />
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
          imageURL={product.imageURL}
          name={product.name}
          review={product.review}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default Leather;
