import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    title: "Remarkable Results & Support",
    text: "From concept to execution, every step was handled with professionalism. The ongoing support and maintenance has been exceptional. Truly a partnership worth investing in.",
    rating: 4.8,
    name: "Emily Rodriguez",
    role: "Marketing Lead, StartupHub",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    title: "Game-Changing Partnership",
    text: "The strategic approach and technical expertise provided by this team has been instrumental in our growth. The ROI has been phenomenal and continues to exceed projections.",
    rating: 4.7,
    name: "David Thompson",
    role: "Founder, GrowthLabs",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    title: "Innovative Solutions",
    text: "The strategic approach and technical expertise provided by this team has been instrumental in our growth. The ROI has been phenomenal and continues to exceed projections.",
    rating: 4.7,
    name: "Lisa Anderson",
    role: "CTO, InnovateTech",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    title: "Outstanding Experience",
    text: "Professional execution and reliable support helped us scale our business smoothly. The attention to detail and proactive communication made all the difference.",
    rating: 5.0,
    name: "James Carter",
    role: "CEO, TechWave",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      cards.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return cards;
  };

  return (
    <div className="testimonials-wrapper">
      <div className="animated-bg">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="testimonials-container">
        {/* Header */}
        <div className="testimonials-header">
          <div className="tag-badge">
            <span>TESTIMONIALS</span>
          </div>
          
          <h2 className="main-heading">
            What Our <span className="gradient-text">Client Says</span>
            <br />
            About Us.
          </h2>
          
          <p className="sub-text">
            Discover why clients choose us for their digital transformation journey
          </p>
        </div>

        {/* Cards Grid */}
        <div className="cards-grid">
          {getVisibleCards().map((testimonial, idx) => (
            <TestimonialCard key={idx} testimonial={testimonial} index={idx} />
          ))}
        </div>

        {/* Navigation */}
        <div className="navigation-container">
          <button className="nav-btn nav-btn-prev" onClick={prevSlide}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          
          <div className="dots-container">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`dot ${idx === currentIndex ? 'dot-active' : ''}`}
                onClick={() => goToSlide(idx)}
              />
            ))}
          </div>
          
          <button className="nav-btn nav-btn-next" onClick={nextSlide}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <div className="testimonial-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="card-glow"></div>
      
      {/* Quote Icon */}
      <div className="quote-icon">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
        </svg>
      </div>

      {/* Content */}
      <h3 className="card-title">{testimonial.title}</h3>
      <p className="card-text">{testimonial.text}</p>

      {/* Rating */}
      <div className="rating-section">
        <div className="stars">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`star ${i < Math.floor(testimonial.rating) ? 'star-filled' : ''}`}
              viewBox="0 0 24 24"
              fill={i < Math.floor(testimonial.rating) ? 'currentColor' : 'none'}
              stroke="currentColor"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>
        <span className="rating-value">{testimonial.rating}/5.0</span>
      </div>

      {/* User Info */}
      <div className="user-info">
        <div className="avatar-wrapper">
          <div className="avatar-glow"></div>
          <img src={testimonial.img} alt={testimonial.name} className="avatar" />
          <div className="online-indicator"></div>
        </div>
        
        <div className="user-details">
          <h4 className="user-name">{testimonial.name}</h4>
          <p className="user-role">{testimonial.role}</p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="deco-circle deco-1"></div>
      <div className="deco-circle deco-2"></div>
    </div>
  );
};

export default Testimonials;