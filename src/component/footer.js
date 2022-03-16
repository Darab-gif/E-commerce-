import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCcMastercard,
  faCcAmazonPay,
  faCcVisa,
  faCcPaypal,
  faCcDiscover,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

library.add(faCcAmazonPay, faCcVisa, faCcDiscover, faCcMastercard, faCcPaypal);
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sub">
        <FontAwesomeIcon icon={faCcMastercard} size="3x" />
        <FontAwesomeIcon icon={faCcVisa} size="3x" />
        <FontAwesomeIcon icon={faCcDiscover} size="3x" />
        <FontAwesomeIcon icon={faCcPaypal} size="3x" />
        <FontAwesomeIcon icon={faCcAmazonPay} size="3x" />
      </div>
    </footer>
  );
};

export default Footer;
