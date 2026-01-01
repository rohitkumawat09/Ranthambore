import React from "react";
import { FaGlobe, FaRupeeSign, FaUsers } from "react-icons/fa";
import "./Ranthambore.css";
import TigerImage from "../assets/image.png";

const Ranthambore = () => {
  return (
    <section className="whyChoose">
      
      {/* LEFT CONTENT */}
      <div className="whyLeft">
        <span className="tag">WHY CHOOSE US</span>

        <h2>
          Why Choose Us for <br />
          <span>Ranthambore Safari Booking</span>
        </h2>

        <p>
          Since 2015, we help travelers book Ranthambore safari online—Jeep
          safari, Canter safari, and full tour packages with hotel and car. Get
          clear prices, fast support, and the right safari zone and timing for
          better tiger sightings in Ranthambore National Park.
        </p>
      </div>

      {/* CENTER IMAGE */}
      <div className="whyImage">
        <img src={TigerImage} alt="Ranthambore Tiger" />
      </div>

      {/* RIGHT FEATURES */}
      <div className="whyRight">
        
        <div className="featureBox">
          <div className="icon">
            <FaGlobe />
          </div>
          <div className="featureText">
            <h4>Safe Traveling</h4>
            <p>
              Verified drivers, on-time pickups, and official Ranthambore safari
              permits. Secure bookings for Jeep/Canter, hotels near the safari
              gate, and Jaipur–Ranthambore taxis.
            </p>
          </div>
        </div>

        <div className="featureBox">
          <div className="icon">
            <FaRupeeSign />
          </div>
          <div className="featureText">
            <h4>Affordable Price</h4>
            <p>
              Transparent safari price and taxi fare with no hidden charges.
              Best value on Ranthambore safari packages, hotel booking, and
              round-trip cab service.
            </p>
          </div>
        </div>

        <div className="featureBox">
          <div className="icon">
            <FaUsers />
          </div>
          <div className="featureText">
            <h4>Professional Guides</h4>
            <p>
              Local experts help choose the best safari zone, advise the best
              time to visit, and guide wildlife spotting for a better tiger
              safari experience.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Ranthambore;
