import React from "react";
import "./Header.css"; // relative path to the CSS file

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <img
          src="https://www.mdachennai.com/theme/bs/images/logo-MDA.png"
          alt="MDA Logo"
          className="logo"
        />
        <h1>MDA Webpage</h1>
      </div>
    </header>
  );
};

export default Header;
