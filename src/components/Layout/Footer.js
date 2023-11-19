import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <p className="text-center">Get your medicines at your door steps!</p>
      <h6 className="text-center mt-3">
        <Link to="/about">About</Link>
        |
        <Link to="/contact">Contact</Link>
      </h6>
    </div>
  );
};

export default Footer;





