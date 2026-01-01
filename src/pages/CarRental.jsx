import React from "react";
import { FaMapMarkerAlt, FaClock, FaFileAlt } from "react-icons/fa";
import "./CarRental.css";
import Car from "../assets/car.webp";

const CarRental = () => {
  return (
    <section className="carRental">
      <div className="carRentalLeft">
        <span className="tag">ONLINE BOOKING</span>

        <h1>
          Ranthambore Car Rental <br /> with Driver
        </h1>

        <p className="desc">
          Book a clean, comfortable sedan or SUV with a professional chauffeur
          for Jaipur to Ranthambore, local sightseeing, and safari-gate pickups.
          Enjoy fixed, transparent fares, on-time service, and easy
          WhatsApp/call booking. Choose hourly, one-way, or round-trip plans
          designed for a smooth Ranthambore trip.
        </p>

        <div className="features">
          <div className="feature">
            <FaMapMarkerAlt />
            <span>Easy to Find a Taxi</span>
          </div>

          <div className="feature">
            <FaClock />
            <span>Find Taxis Fast</span>
          </div>

          <div className="feature">
            <FaFileAlt />
            <span>Trusted Inclusive Rates</span>
          </div>
        </div>

        <button className="bookBtn">Book Your Car Today</button>
      </div>

      <div className="carRentalRight">
        <img
          src={Car}
          alt="Car Rental"
        />
      </div>
    </section>
  );
};

export default CarRental;
