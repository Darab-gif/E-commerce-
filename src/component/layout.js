import React from "react";
import Header from "./Header";
import SubHeader from "./subHeader";
import "./layout.css";
import Section from "./Section";
import Contact from "./Contact";
import Footer from "./footer";
import Material from "./Cloth";
import Leather from "./Shoe";
import CartItem from "./showCart";
import { useSelector } from "react-redux";

const Layout = () => {
  const showCart = useSelector((state) => state.cart.showCart);
  return (
    <React.Fragment>
      <div className="layout">
        <Header />

        <SubHeader />
        {showCart && <CartItem />}
        <Material />
        <div
          style={{
            height: "5px",
            width: "100%",
            background: "rgb(0, 210, 10)",
            marginTop: "60px",
          }}
        ></div>
        <Leather />
        <Section />
        <Contact />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Layout;
