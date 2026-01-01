import React, { useEffect, useState } from "react";
import "./Login.css";
import logo from "../assets/logo.webp";

const images = [
  "https://images.unsplash.com/photo-1549366021-9f761d450615?w=1400",
  "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1400",
  "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1400",
];

const Login = ({ switchToRegister }) => {
  const [bg, setBg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBg((p) => (p + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="login">
      <div
        className="loginLeft"
        style={{ backgroundImage: `url(${images[bg]})` }}
      >
        <div className="overlay">
          <h1>Start Your Adventure</h1>
          <p>Join thousands of travelers discovering amazing destinations</p>

          <div className="stats">
            <div><h3>1000+</h3><span>Destinations</span></div>
            <div><h3>50K+</h3><span>Happy Travelers</span></div>
            <div><h3>24/7</h3><span>Support</span></div>
          </div>
        </div>
      </div>

      <div className="loginRight">
        <img src={logo} className="logo" alt="logo" />

        <h2>Welcome Back!</h2>
        <p className="subtitle">Enter your email to receive an OTP</p>

        <form className="form">
          <label>Email Address</label>
          <input placeholder="your.email@example.com" />
          <button type="button">Send OTP</button>
        </form>

        <p className="signupText">
          Don’t have an account?{" "}
          <span onClick={switchToRegister}>Sign Up</span>
        </p>

        <p className="terms">
          By continuing, you agree to our <span>Terms</span> &{" "}
          <span>Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
