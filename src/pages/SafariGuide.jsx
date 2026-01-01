import React from "react";
import "./SafariGuide.css";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const SafariGuide = () => {
  return (
    <section className="safariGuide">
      {/* HEADER */}
      <div className="guideHeader">
        <span className="smallTitle">YOUR QUICK RANTHAMBORE SAFARI GUIDE</span>
        <h2>
          Ranthambore <span>Safari Information Guide</span>
        </h2>
      </div>

      {/* GRID */}
      <div className="guideGrid">
        {/* LEFT IMAGE CARD */}
        <div className="guideImageCard">
          <img
            src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1200"
            alt="Ranthambore Tiger"
          />

          <div className="imageOverlay">
            <h3>Book Your Jungle Safari Today!</h3>
            <p>
              Get a chance to see the majestic Bengal tiger & wildlife in their
              natural habitat.
            </p>

            {/* LINK instead of <a> */}
            <Link to="/safari-booking" className="btnPrimary">
              Book Your Safari Now
            </Link>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="guideInfo">
          <h3>Ranthambore Safari Zones</h3>

          <div className="tabs">
            <span className="active">Safari Zones</span>
            <span>Wildlife Species</span>
            <span>Safari Vehicles</span>
            <span>Safari Timing & Pricing</span>
          </div>

          <p className="infoText">
            Ranthambore has 10 safari zones with different landscapes and
            tiger-sighting chances. Choose a zone, vehicle, and time that fits
            the plan for the best wildlife experience.
          </p>

          <ul className="zoneList">
            <li><span>Zone 1 & 2:</span> Highest tiger activity & water points</li>
            <li><span>Zone 3:</span> Scenic lakes & photography</li>
            <li><span>Zone 4 & 5:</span> Balanced routes & heritage ruins</li>
            <li><span>Zone 6–10:</span> Peaceful zones with fewer crowds</li>
          </ul>

          {/* LINK instead of <a> */}
          <div className="helpBox">
            <p>Need assistance with booking?</p>
            <Link to="/contact" className="phoneLink">
              <FaPhoneAlt /> +91 7877094204
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafariGuide;
