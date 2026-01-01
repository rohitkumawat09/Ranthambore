import React, { useState, useEffect } from 'react';
import { MapPin, Star, Clock, Camera } from 'lucide-react';
import './Places.css';

const places = [
  {
    title: "Ranthambore Fort",
    desc: "UNESCO World Heritage Site with panoramic views and rich history spanning over 1000 years.",
    img: "https://images.unsplash.com/photo-1604079628040-94301bb21b91?w=900",
    rating: 4.8,
    duration: "2-3 hours",
    category: "Heritage"
  },
  {
    title: "Trinetra Ganesh Temple",
    desc: "Ancient temple located inside Ranthambore Fort, known for its spiritual significance.",
    img: "https://images.unsplash.com/photo-1624018582101-3c62fa5b1b5c?w=900",
    rating: 4.7,
    duration: "1-2 hours",
    category: "Religious"
  },
  {
    title: "Padam Talao Lake",
    desc: "Largest lake in the park, famous for tiger sightings at sunrise and sunset.",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900",
    rating: 4.9,
    duration: "3-4 hours",
    category: "Nature"
  },
  {
    title: "Rajbagh Talao",
    desc: "Picturesque lake surrounded by ancient ruins and perfect for wildlife photography.",
    img: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=900",
    rating: 4.6,
    duration: "2-3 hours",
    category: "Wildlife"
  },
  {
    title: "Malik Talao",
    desc: "Small lake popular for birdwatching and peaceful nature walks.",
    img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=900",
    rating: 4.5,
    duration: "1-2 hours",
    category: "Birdwatching"
  },
];

const Places = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  /* ===========================
     AUTO SCROLL (ADDED)
     =========================== */
  useEffect(() => {
    if (hoveredCard !== null) return;

    const interval = setInterval(() => {
      setActiveIndex(prev =>
        prev === places.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [hoveredCard]);
  /* =========================== */

  const handlePrev = () => {
    setActiveIndex(prev => (prev === 0 ? places.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev === places.length - 1 ? 0 : prev + 1));
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = -1; i <= 1; i++) {
      const index = (activeIndex + i + places.length) % places.length;
      cards.push({ ...places[index], position: i, originalIndex: index });
    }
    return cards;
  };

  return (
    <section className="places-section">
      <div className="places-bg">
        <div className="places-shape places-shape-1"></div>
        <div className="places-shape places-shape-2"></div>
        <div className="places-shape places-shape-3"></div>
      </div>

      <div className="places-container">
        <div className="places-header">
          <div className="places-tag">
            <MapPin size={16} />
            <span>EXPLORE DESTINATIONS</span>
          </div>

          <h2 className="places-title">
            Places to Visit in <span className="places-title-accent">Ranthambore</span>
          </h2>

          <p className="places-subtitle">
            Discover the most captivating destinations and hidden gems of Ranthambore National Park
          </p>
        </div>

        <div className="places-slider-wrapper">
          <div className="places-cards">
            {getVisibleCards().map((place, idx) => (
              <div
                key={idx}
                className={`place-card ${place.position === 0 ? 'place-card-active' : ''} place-card-pos-${place.position}`}
                onMouseEnter={() => setHoveredCard(place.originalIndex)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="place-image-wrapper">
                  <img src={place.img} alt={place.title} className="place-image" />
                  <div className="place-category">{place.category}</div>
                  <div className="place-gradient"></div>
                </div>

                <div className="place-content">
                  <div className="place-meta">
                    <div className="place-meta-item">
                      <Star size={16} fill="currentColor" />
                      <span>{place.rating}</span>
                    </div>
                    <div className="place-meta-item">
                      <Clock size={16} />
                      <span>{place.duration}</span>
                    </div>
                  </div>

                  <h3 className="place-title">{place.title}</h3>
                  <p className="place-desc">{place.desc}</p>

                  <button className="place-btn">
                    <Camera size={18} />
                    <span>View Details</span>
                  </button>
                </div>

                <div className="place-card-glow"></div>
              </div>
            ))}
          </div>

          <div className="places-nav">
            <button className="places-nav-btn places-nav-prev" onClick={handlePrev}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="places-dots">
              {places.map((_, idx) => (
                <button
                  key={idx}
                  className={`places-dot ${idx === activeIndex ? 'places-dot-active' : ''}`}
                  onClick={() => setActiveIndex(idx)}
                />
              ))}
            </div>

            <button className="places-nav-btn places-nav-next" onClick={handleNext}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Places;
