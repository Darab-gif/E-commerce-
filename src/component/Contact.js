import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLandmark,
  faMailBulk,
} from "@fortawesome/free-solid-svg-icons";
import "./contact.css";

library.add(faPhone, faLandmark, faMailBulk);
const Contact = () => {
  return (
    <div className="contact-head">
      <div className="contact-phone">
        <span className="span-phone">
          <FontAwesomeIcon icon={faPhone} size="2x" />
        </span>
        <h2>Call us 24/7</h2>
        <p>+2348130396203</p>
      </div>
      <div className="contact-add">
        <span className="span-add">
          <FontAwesomeIcon icon={faLandmark} size="2x" />
        </span>
        <h2 className="span-h2">Address</h2>
        <p>No 23, Sawmill Abaletu,Oyo State,Nigeria</p>
      </div>
      <div className="contact-mail">
        <span className="span-mail">
          <FontAwesomeIcon icon={faMailBulk} size="2x" />
        </span>
        <h2>Email</h2>
        <p>rdapoahmid@gmail.com</p>
      </div>
    </div>
  );
};

export default Contact;
