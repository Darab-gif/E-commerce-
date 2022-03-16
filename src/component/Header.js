import React from "react";
import "./header.css";
import Media from "./media";

const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{
                fontFamily: "monospace",
                fontSize: "30px",
                cursor: "pointer",
              }}
            >
              Darab Collection
            </h2>
          </li>
          <li style={{ marginLeft: "2px" }}>info@darab-collection.com</li>
          <li style={{ marginRight: "30px" }}>
            <Media />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
