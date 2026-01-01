import React from "react";
import { Link } from "react-router-dom";
import {
  FaPlane,
  FaWifi,
  FaDumbbell,
  FaBed,
  FaChevronRight,
} from "react-icons/fa";
import "./SERVICE.css";

const SERVICE = () => {
  return (
    <>
      {/* TOP SERVICE SECTION */}
      <section className="serviceTop">
        <div className="serviceLeft">
          <span className="serviceTag">SERVICE</span>

          <h2>
            Plan Your <br />
            <span>Ranthambore Trip</span>
          </h2>

          <p className="servicePhone">
            For More Information <br />
            <strong>+91 787709404</strong>
          </p>
        </div>

        <div className="serviceRight">
          <div className="infoBox">
            <FaPlane className="icon" />
            <h4>Transport Assistance</h4>
            <p>Jaipur–Ranthambore taxi & sightseeing.</p>
          </div>

          <div className="infoBox">
            <FaWifi className="icon" />
            <h4>Fast Wi-Fi</h4>
            <p>Stay connected at partner hotels and during planning.</p>
          </div>

          <div className="infoBox">
            <FaDumbbell className="icon" />
            <h4>Fitness & Wellness</h4>
            <p>Access to gym and spa options at select properties.</p>
          </div>

          <div className="infoBox">
            <FaBed className="icon" />
            <h4>24/7 Room Service</h4>
            <p>Comfortable stays with quick on-call support.</p>
          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="serviceCards">
        <div className="serviceCard">
          <span className="badge">Hotel</span>
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200"
            alt=""
          />

          <h3>Hotel Booking Near Safari Gate</h3>

          <ul>
            <li>Curated hotels close to Ranthambore National Park</li>
            <li>Easy booking with best price options</li>
          </ul>

          <Link to="/hotels" className="cardLink">
            Visit The Jungle Heart <FaChevronRight />
          </Link>
        </div>

        <div className="serviceCard">
          <span className="badge">Safari</span>
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200"
            alt=""
          />

          <h3>Jeep & Canter Safari Tours</h3>

          <ul>
            <li>Official Ranthambore safari booking</li>
            <li>Guided wildlife tours with expert drivers</li>
          </ul>

          <Link to="/safari" className="cardLink">
            View safari booking <FaChevronRight />
          </Link>
        </div>

        <div className="serviceCard">
          <span className="badge">Rental Car</span>
          <img
            src="https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1200"
            alt=""
          />

          <h3>Car Rental & Transfers</h3>

          <ul>
            <li>Jaipur to Ranthambore cab and return</li>
            <li>Local sightseeing taxi with driver</li>
          </ul>

          <Link to="/car-rental" className="cardLink">
            Explore car rentals <FaChevronRight />
          </Link>
        </div>
      </section>
    </>
  );
};

export default SERVICE;
