import React from "react";
import "./section.css";

const Section = () => {
  return (
    <div className="section">
      <h1 className="section-h1">Do you want more tips?</h1>
      <p className="section-p">Sign up free and get the latest tips.</p>
      <div>
        <input
          type="email"
          className="section_email"
          placeholder="Your email"
        />
        <button className="section-btn">YES, I WANT!</button>
      </div>
    </div>
  );
};

export default Section;
