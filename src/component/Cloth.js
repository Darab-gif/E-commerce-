import React from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../store/cart-slice";
import "./cloth.css";
const clothOBJ = [
  {
    id: 1,
    name: "Versace",
    price: 40,
    imageURL: "./image/cloth1.jpg",
    review: "Quality",
  },
  {
    id: 2,
    name: "Versace",
    price: 40,
    imageURL: "./image/cloth2.jpg",
    review: "Quality",
  },
  {
    id: 3,
    name: "Versace",
    price: 40,
    imageURL: "./image/cloth3.jpg",
    review: "Quality",
  },
  {
    id: 4,
    name: "Versace",
    price: 40,
    imageURL: "./image/cloth4.jpg",
    review: "Quality",
  },
  {
    id: 5,
    name: "Versace",
    price: 40,
    imageURL: "./image/cloth5.jpg",
    review: "Quality",
  },
  {
    id: 6,
    name: "Versace",
    price: 40,
    imageURL: "./image/cloth6.jpg",
    review: "Quality",
  },
  {
    id: 7,
    name: "Versace",
    price: 40,
    imageURL: "./image/cloth7.jpg",
    review: "Quality",
  },
  {
    id: 8,
    name: "Versace",
    price: 40,
    imageURL: "./image/cloth8.jpg",
    review: "Quality",
  },
];

const Cloth = ({ id, name, price, imageURL, review }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartAction.addToCart({
        name,
        id,
        price,
      })
    );
  };
  return (
    <div className="cloth">
      <img src={imageURL} className="cloth-img" alt="" />
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
          imageURL={product.imageURL}
          name={product.name}
          review={product.review}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default Material;
