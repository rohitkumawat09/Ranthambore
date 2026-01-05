import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.webp";
import "./Header.css";

const Header = ({ openLogin }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* LEFT */}
      <div className="left">
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <Link className="link active" to="/">HOME</Link>
          <Link className="link" to="/AboutUs">ABOUT US</Link>

          <div className="dropdown">
            <span className="link">SERVICES ▾</span>
            <div className="dropdown-content">
              <Link className="link" to="/safari-packages">Safari Packages</Link>
              <Link className="link" to="/custom-packages">Custom Packages</Link>
              <Link className="link" to="CarRental">CarRental</Link>
              <Link className="link" to="/transportation">Transportation</Link>
            </div>
          </div>

          <Link className="link" to="/Contactus">CONTACT</Link>
        </nav>
      </div>

      {/* CENTER LOGO */}
      <div className="logoBox">
        <img src={logo} alt="Ranthambore Wild Trip" className="logo" />
      </div>

      {/* RIGHT */}
      <div className="right">
        <Link className="link" to="/blog">BLOG</Link>
        <button className="btn" onClick={openLogin}>
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;
