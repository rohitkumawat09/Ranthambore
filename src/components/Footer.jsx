import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  X,
  MapPin,
  Mail,
  Phone
} from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1 */}
        <div className="footer-col">
          <h2 className="footer-logo">WildTrip</h2>
          <p className="footer-text">
            Wild Trip offers official Ranthambore safari booking with private
            Jeep safari, shared Canter safari, door-to-door car rentals, and
            custom tour packages – fast permits, reliable transfers, and 24/7
            support for a seamless tiger safari in Rajasthan.
          </p>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h3>Services</h3>
          <ul>
            <li>Vehicle Booking</li>
            <li>Safari Booking</li>
            <li>Tour Package</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-col">
          <h3>Useful Links</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Cancellation Policy</li>
            <li>Refund Policy</li>
          </ul>
        </div>

        {/* Column 5 */}
        <div className="footer-col">
          <h3>Contact Us</h3>
          <ul className="footer-contact">
            <li>
              <MapPin />
              <span>Ranthambore wild trip, Sherpur Road</span>
            </li>
            <li>
              <Mail />
              <span>hello@ranthamborewildtrip.com</span>
            </li>
            <li>
              <Phone />
              <span>+91 7877094204</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="footer-divider"></div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-social">
          <span>Follow Us On</span>
          <div className="social-icons">
            <div className="social-icon"><Facebook /></div>
            <div className="social-icon"><X /></div>
            <div className="social-icon"><Instagram /></div>
            <div className="social-icon"><Linkedin /></div>
          </div>
        </div>

        <p className="footer-copy">
          © Copyright © 2026 WildTrip, All rights reserved.
          <span> Made by <strong>Rohit Kumawat</strong></span>
        </p>
      </div>
    </footer>
  );
};

export { Footer };
