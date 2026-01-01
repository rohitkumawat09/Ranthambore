import React, { useEffect, useState } from "react";
import "./Home.css";
import Package from "./Package";
import Ranthambore from "./Ranthambore";
import SafariGuide from "./SafariGuide";
import Places from "./Places";
import About from "./ABOUTWILDTRIP";
import SERVICE from "./SERVICE";
import CarRental from "./CarRental";
import Blog from "./Blog";
import Testimonials from "./Testimonials";
import OurProcess from "./OurProcess";

import WelcomeVoice from "./WelcomeVoice";
const img1 = "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=800&fit=crop";
const img2 = "https://images.unsplash.com/photo-1549366021-9f761d450615?w=1200&h=800&fit=crop";
const img3 = "https://images.unsplash.com/photo-1587974928442-77dc3e3dba72?w=1200&h=800&fit=crop";
const img4 = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&h=800&fit=crop";
const img5 = "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1200&h=800&fit=crop";

const slides = [
  {
    badge: "Safari Booking",
    title: "Ranthambore Safari Booking Online",
    desc: "Book your Jeep Safari or Canter Safari for Ranthambore National Park today. We offer easy and fast online booking for the best tiger safari experience.",
    image: img1,
  },
  {
    badge: "Safari Packages",
    title: "Complete Ranthambore Safari Packages",
    desc: "Get our all-in-one Ranthambore tour packages including safari ticket, hotel booking, and car rental. Plan your whole trip in one click.",
    image: img2,
  },
  {
    badge: "Car Rental",
    title: "Car Rental for Your Ranthambore Trip",
    desc: "Need a ride? We offer reliable and affordable car rentals and taxi services to reach Ranthambore from Jaipur and other cities.",
    image: img3,
  },
  {
    badge: "Hotel Booking",
    title: "Ranthambore Hotel Booking Made Easy",
    desc: "Find and book the best hotels near Ranthambore National Park. Choose from budget to luxury accommodations for your perfect stay.",
    image: img4,
  },
  {
    badge: "Travel Guide",
    title: "Your Ultimate Ranthambore Travel Guide",
    desc: "Discover the best time to visit, safari tips, and local attractions with our comprehensive Ranthambore travel guide.",
    image: img5,
  },
];

const Home = () => {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState('next');

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [index]);

  const handleNext = () => {
    setDirection('next');
    setAnimating(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
      setAnimating(false);
    }, 600);
  };

  const handlePrev = () => {
    setDirection('prev');
    setAnimating(true);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + slides.length) % slides.length);
      setAnimating(false);
    }, 600);
  };

  const handleDotClick = (i) => {
    if (i !== index) {
      setDirection(i > index ? 'next' : 'prev');
      setAnimating(true);
      setTimeout(() => {
        setIndex(i);
        setAnimating(false);
      }, 600);
    }
  };

  const slide = slides[index];

  return (
    <>
     <div className="slider">
      <div className="slider__image-wrapper">
        <img 
          src={slide.image} 
          alt="" 
          className={`slider__image ${animating ? 'animating' : ''} ${direction}`}
        />
      </div>

      <div className={`slider__overlay ${animating ? 'animating' : ''}`}></div>

      <div className="slider__content">
        <span className={`slider__badge ${animating ? '' : 'animate'}`}>
          {slide.badge}
        </span>

        <h1 className="slider__title">
          {slide.title.split(' ').map((word, i) => (
            <span
              key={i}
              className={`slider__title-word ${animating ? '' : 'animate'}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {word}&nbsp;
            </span>
          ))}
        </h1>

        <p className={`slider__desc ${animating ? '' : 'animate'}`}>
          {slide.desc}
        </p>

        <button className={`slider__button ${animating ? '' : 'animate'}`}>
          <span className="slider__button-text">Book Your Safari Now</span>
          <span className="slider__button-glow"></span>
        </button>
      </div>

      <button className="slider__nav slider__nav--prev" onClick={handlePrev}>
        <span className="slider__arrow">‹</span>
      </button>
      
      <button className="slider__nav slider__nav--next" onClick={handleNext}>
        <span className="slider__arrow">›</span>
      </button>

      <div className="slider__dots">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`slider__dot ${i === index ? 'active' : ''}`}
          />
        ))}
      </div>

      <div className="slider__counter">
        <span className="slider__counter-number">{String(index + 1).padStart(2, '0')}</span>
        <span className="slider__counter-divider">/</span>
        <span className="slider__counter-total">{String(slides.length).padStart(2, '0')}</span>
      </div>
      
    </div>
    <About />
    <Package />
    <SERVICE />
    <CarRental />
    <Ranthambore />
    <SafariGuide />
    <Places />
    <Blog/>
    <Testimonials />
    <WelcomeVoice />
    <OurProcess />
    </>
   
     
  
    
  );
  

};

export default Home;