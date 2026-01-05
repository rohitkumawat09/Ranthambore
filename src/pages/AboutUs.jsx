
import React, { useState, useEffect, useRef } from "react";
import {
  Heart,
  MapPin,
  Users,
  Star,
  Award,
  Coffee,
  Camera,
  Compass,
  Quote,
  Play,
  Leaf,
  Mountain,
  Footprints,
  ChevronRight,
 
} from "lucide-react";
import "./AboutUs.css";

const AboutUs = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [activeTab, setActiveTab] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const heroRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrollY(y);
      if (heroRef.current) {
        heroRef.current.style.setProperty('--au-hero-translateY', `${y * 0.5}px`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // initialize position
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);



  const values = [
    {
      icon: Leaf,
      title: "Conservation",
      desc: "Committed to preserving wildlife and supporting local ecosystems through responsible tourism practices.",
      color: "#2ecc71"
    },
    {
      icon: Mountain,
      title: "Authenticity",
      desc: "Genuine experiences that showcase the real heart of Rajasthan's culture and natural beauty.",
      color: "#e67e22"
    },
    {
      icon: Footprints,
      title: "Excellence",
      desc: "Uncompromising quality in every safari, tour, and guest interaction we deliver.",
      color: "#8b1538"
    }
  ];

  

  const timelineData = [
    {
      year: "2016",
      icon: Heart,
      title: "The Beginning",
      subtitle: "Guided First Drives",
      desc: "Started with official Ranthambore safari bookings, helping travelers choose between Jeep and Canter safaris with smooth Jaipur–Ranthambore transfers.",
      highlight: false
    },
    {
      year: "2018",
      icon: Coffee,
      title: "Expanding Routes",
      subtitle: "Clear Travel Links",
      desc: "Introduced door-to-gate cab services with synced flight & train schedules for morning and evening safaris.",
      highlight: false
    },
    {
      year: "2021",
      icon: MapPin,
      title: "Smarter Safari Planning",
      subtitle: "Planned With Ease",
      desc: "Zone guidance (1–10), bundled permits, hotels, and OBMS-linked assistance for effortless entries.",
      highlight: false
    },
   
  ];

  const experienceData = [
    {
      icon: Coffee,
      title: "Traditional Cuisine",
      desc: "Dal baati churma, ker sangri, laal maas cooked locally with authentic recipes.",
      image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800"
    },
    {
      icon: Compass,
      title: "Safari Adventures",
      desc: "Guided jeep & canter safaris with breathtaking sunset views and expert naturalists.",
      image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800"
    },
    {
      icon: Heart,
      title: "Personal Touch",
      desc: "Warm hospitality, folk stories, traditional music & care that feels like home.",
      image: "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?w=800"
    }
  ];

  const statss = [
    { icon: Award, number: "10+", label: "Years Excellence" },
    { icon: Star, number: "1000+", label: "Happy Guests" },
    { icon: Coffee, number: "50+", label: "Cultural Tours" },
    { icon: Camera, number: "25+", label: "Photography Tours" }
  ];

  return (
    <div className="au-page">

      {/* HERO SECTION */}
      <section className="au-hero" ref={heroRef}>
        <div className="au-hero-bg" />
        <div className="au-hero-particles">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="au-particle"
              style={{
                ['--au-left']: `${Math.random() * 100}%`,
                ['--au-delay']: `${Math.random() * 5}s`,
                ['--au-dur']: `${8 + Math.random() * 12}s`
              }}
            />
          ))}
        </div>
        <div className="au-hero-overlay">
          <div className="au-hero-content">
            <p className="au-breadcrumb" data-animate id="au-breadcrumb">
              Home → About Us
            </p>
            <h1 data-animate id="au-hero-title">
              About Ranthambore Safari Booking <br /> & Rajasthan Tour Packages
            </h1>
            <p className="au-hero-sub" data-animate id="au-hero-sub">
              Experience the royal heritage and stunning landscapes of Rajasthan
              with our carefully crafted tour packages.
            </p>
            <div className="au-hero-buttons" data-animate id="au-hero-btns">
              <button className="au-primary-btn">
                <span>Contact Us</span>
                <div className="au-btn-shine"></div>
              </button>
              <button className="au-secondary-btn">
                <Play size={18} /> Watch Story
              </button>
            </div>
          </div>
        </div>
        <div className="au-hero-scroll-indicator">
          <div className="au-scroll-mouse"></div>
          <p>Scroll to explore</p>
        </div>
      </section>

      {/* STORY */}
      <section className="au-story-section">
        <div className="container">
          <p className="au-section-tag" data-animate id="au-story-tag">OUR JOURNEY</p>
          <h2 data-animate id="au-story-title">
            Our <span className="gradient-text">Story</span>
          </h2>
          <p className="au-section-sub" data-animate id="au-story-sub">
            The heart and soul behind our wild tours in the golden landscapes of Rajasthan
          </p>

          <div className="au-timeline">
            {timelineData.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`au-timeline-card ${item.highlight ? "highlight" : ""} ${
                    isVisible[`au-timeline-${idx}`] ? "visible" : ""
                  }`}
                  data-animate
                  id={`au-timeline-${idx}`}
                  style={{ ['--au-delay']: `${idx * 0.15}s` }}
                >
                  <div className="au-card-header">
                    <span className="au-year">{item.year}</span>
                    <div className="">
                      <Icon className="au-icon" size={30} />
                    </div>
                  </div>
                  <h3>{item.title}</h3>
                  {item.subtitle && <p className="au-small-title">{item.subtitle}</p>}
                  <p className="au-card-desc">{item.desc}</p>
                  <div className="au-card-glow"></div>
                  <div className="au-card-shine"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="au-values-section">
        <div className="container">
          <p className="au-section-tag" data-animate id="au-values-tag">OUR VALUES</p>
          <h2 data-animate id="au-values-title">
            What We <span className="gradient-text">Stand For</span>
          </h2>
          
          <div className="au-values-grid">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  className={`au-value-card ${isVisible[`au-value-${idx}`] ? "visible" : ""}`}
                  data-animate
                  id={`au-value-${idx}`}
                  style={{ ['--au-delay']: `${idx * 0.2}s`, ['--au-value-color']: value.color, ['--au-value-bg']: `${value.color}15` }}
                >
                  <div className="au-value-icon-wrapper">
                    <Icon className="au-value-icon" size={44} />
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.desc}</p>
                  <div className="au-value-border"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="au-founder-section">
        <div className="container au-founder-grid">
          <div className="au-founder-box" data-animate id="au-founder-box">
            <div className="au-quote-icon">
              <Quote size={56} />
            </div>
            <h2>Meet the WildTrip Founders</h2>

            <blockquote>
              "Whether it's a day trip or a multi-day package, WildTrip brings
              together official tickets, zone advice, and vetted drivers to
              create effortless wildlife experiences."
            </blockquote>

            <div className="au-founder-info">
              <div className="au-founder-img-wrapper">
                <img
                  src="https://i.pravatar.cc/100?img=12"
                  alt="Founder"
                />
                <div className="au-img-border"></div>
              </div>
              <div>
                <h4>Krishna Bhardwaj</h4>
                <p>Founder, Ranthambore WildTrip</p>
              </div>
            </div>

            <p className="au-founder-desc">
              WildTrip designs end-to-end travel experiences around Ranthambore
              National Park, combining safaris, forts, temples, and Rajasthan's
              rich culture into unforgettable journeys.
            </p>

            <div className="au-founder-signature">
              <img src="https://via.placeholder.com/160x50/8b1538/ffffff?text=Krishna+Bhardwaj" alt="Signature" />
            </div>
          </div>

          <div className="au-stats">
            {statss.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className={`au-stat-card ${isVisible[`au-stat-${idx}`] ? "visible" : ""}`}
                  data-animate
                  id={`au-stat-${idx}`}
                  style={{ ['--au-delay']: `${idx * 0.15}s` }}
                >
                  <Icon className="au-stat-icon" size={46} />
                  <h3>{stat.number}</h3>
                  <p>{stat.label}</p>
                  <div className="au-stat-glow"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

 

      {/* EXPERIENCE */}
      <section className="au-experience">
        <div className="container">
          <h2 data-animate id="au-exp-title">Experience Authentic Rajasthan</h2>
          <p data-animate id="au-exp-sub">
            Cultural immersion where ancient traditions meet modern comfort and
            heartfelt hospitality.
          </p>

          <div className="au-experience-cards">
            {experienceData.map((exp, idx) => {
              const Icon = exp.icon;
              return (
                <div
                  key={idx}
                  className={`au-exp-card ${isVisible[`au-exp-${idx}`] ? "visible" : ""}`}
                  data-animate
                  id={`au-exp-${idx}`}
                  style={{ ['--au-delay']: `${idx * 0.2}s` }}
                >
                  <div className="au-exp-image" style={{ ['--au-bg-image']: `url(${exp.image})` }}>
                    <div className="au-exp-overlay"></div>
                  </div>
                  <div className="au-exp-content">
                    <div className="au-exp-icon-wrapper">
                      <Icon className="au-exp-icon" size={32} />
                    </div>
                    <h3>{exp.title}</h3>
                    <p>{exp.desc}</p>
                  </div>
                  <div className="au-exp-card-border"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="au-cta-section">
        <div className="container">
          <div className="au-cta-content" data-animate id="au-cta">
            <h2>Ready to Start Your Adventure?</h2>
            <p>Book your Ranthambore safari and explore the majestic wildlife of Rajasthan</p>
            <button className="au-cta-btn">
              <span>Plan Your Trip</span>
              <ChevronRight size={20} />
              <div className="au-btn-shine"></div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;