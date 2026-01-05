import React, { useEffect, useState } from "react";
import "./ABOUTWILDTRIP.css";

const Counter = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = end / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span className="stat-number">
      {count}
      {suffix}
    </span>
  );
};

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const largeImages = [
    "https://images.unsplash.com/photo-1549366021-9f761d450615?w=600",
    "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=600",
    "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=600",
    "https://images.unsplash.com/photo-1516642898937-8a8d91022f6e?w=600"
  ];

  const smallImages = [
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=600",
    "https://images.unsplash.com/photo-1551316679-9c6ae9dec224?w=600",
    "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?w=600",
    "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=600"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === largeImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="about-section">
      <div className="about-container">
        
        {/* LEFT IMAGES */}
        <div className="about-images">
          <div className="image-wrapper">
            <img
              src={largeImages[currentImageIndex]}
              alt="Wildlife"
              className="img-large"
              key={`large-${currentImageIndex}`}
            />
            <div className="image-overlay"></div>
          </div>
          <div className="image-wrapper-small">
            <img
              src={smallImages[currentImageIndex]}
              alt="Wildlife"
              className="img-small"
              key={`small-${currentImageIndex}`}
            />
            <div className="image-overlay-small"></div>
          </div>
          <div className="decorative-shape"></div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">
          <span className="about-tag">ABOUT WILDTRIP</span>

          <h2 className="about-title">
            Your Gateway to Extraordinary
            <span className="title-highlight"> Ranthambore Adventures</span>
          </h2>

          <p className="about-description">
            Welcome to Ranthambore Wild Trip, where we transform your travel
            dreams into reality. We are passionate about crafting unforgettable
            journeys into the heart of India's most majestic wilderness.
          </p>

          <ul className="about-list">
            <li>
              <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
              Expert local guides and dedicated 24/7 support
            </li>
            <li>
              <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
              Bespoke safari itineraries for wildlife lovers
            </li>
            <li>
              <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
              Unforgettable memories with premium services
            </li>
          </ul>

          {/* STATS */}
          <div className="about-stats">
            <div className="stat-card">
              <Counter end={8} suffix="+" />
              <p className="stat-label">Years Experience</p>
            </div>

            <div className="stat-card">
              <Counter end={355} suffix="+" />
              <p className="stat-label">Destination Collaboration</p>
            </div>

            <div className="stat-card">
              <Counter end={17} suffix="k+" />
              <p className="stat-label">Happy Customers</p>
            </div>
          </div>

          <button className="about-btn">
            Discover Our Tours
            <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;