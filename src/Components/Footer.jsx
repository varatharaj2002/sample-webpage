import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        {/* Left side */}
        <div className="footer-left">
          <p>Copyright © MDA 2025. All rights reserved</p>
        </div>

        {/* Right side */}
        <div className="footer-right">
          <div className="footer-links">
            <a href="#">Sitemap</a>
            <a href="#">Terms</a>
            <a href="#">Policy</a>
          </div>
          <div className="footer-socials">
            <a href="https://www.facebook.com/MadrasDyslexiaAssociation"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" /></a>
            <a href="https://x.com/MDA_Dyslexia"><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="X" /></a>
            <a href="https://www.youtube.com/channel/UCaHgu0Wu7TnpF3cKW6cK-Gw"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
