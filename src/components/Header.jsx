import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import "./Header.css";

const Header = ({ openLogin, openRegister }) => {
  return (
    <header className="header">
      
      {/* LEFT NAV */}
      <nav className="nav">
        <Link className="link active" to="/">HOME</Link>
        <Link className="link" to="/about">ABOUT US</Link>

        <div className="dropdown">
          <span className="link">SERVICES ▾</span>
        </div>

        <Link className="link" to="/contact">CONTACT</Link>
      </nav>

      {/* CENTER LOGO */}
      <div className="logoBox">
        <img src={logo} alt="Ranthambore Wild Trip" className="logo" />
      </div>

      {/* RIGHT ACTIONS */}
      <div className="right">
        <Link className="link" to="/blog">BLOG</Link>

        <button
          className="btn"
          onClick={openLogin}
        >
          Sign In
        </button>
      </div>

    </header>
  );
};

export default Header;
