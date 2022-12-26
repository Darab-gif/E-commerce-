import React from "react";
import Header from "./Header";
import SubHeader from "./subHeader";
import "./layout.css";
import Section from "./Section";
import Contact from "./Contact";
import Footer from "./footer";
import Material from "../component/Cloth/Cloth";
import Leather from "../component/Shoe/Shoe";
import CartItem from "./showCart";
import { useSelector } from "react-redux";
import WristWatch from "./Watch/WristWatch";

const Layout = () => {
  const showCart = useSelector((state) => state.cart.showCart);
  return (
    <React.Fragment>
      <div className="layout">
        <Header />

        <SubHeader link="cart" />
        {showCart && <CartItem />}
        <Material />
        <div
          style={{
            height: "2px",
            width: "100%",
            background: "rgb(0, 210, 10)",
            marginTop: "60px",
          }}
        ></div>
        <Leather />
        <div
          style={{
            height: "2px",
            width: "100%",
            background: "rgb(0, 210, 10)",
            marginTop: "60px",
          }}
        ></div>
        <WristWatch />
        <Section />
        <Contact />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Layout;
