import React, { useState, useEffect, useRef } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageCircle,
  CheckCircle,
  Sparkles,
  ArrowRight,
  Users,
  Award,
  Zap
} from "lucide-react";
import "./Contactus.css";

const Contactus = () => {
  const [cuFormData, setCuFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const [cuFocused, setCuFocused] = useState("");
  const [cuSubmitted, setCuSubmitted] = useState(false);
  const [cuMousePos, setCuMousePos] = useState({ x: 0, y: 0 });
  const [cuIsVisible, setCuIsVisible] = useState({});
  const [scrollY, setScrollY] = useState(0);
  const orb1Ref = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCuMousePos({ x: e.clientX, y: e.clientY });
      if (orb1Ref.current) {
        orb1Ref.current.style.setProperty('--cu-left', `${e.clientX / 20}px`);
        orb1Ref.current.style.setProperty('--cu-top', `${e.clientY / 20}px`);
      }
    };

    const handleScroll = () => {
      const y = window.scrollY;
      setScrollY(y);
      if (heroRef.current) {
        heroRef.current.style.setProperty('--au-hero-translateY', `${y * 0.5}px`);
      }
      
      const elements = document.querySelectorAll('.cu-animate-on-scroll');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const visible = rect.top < window.innerHeight && rect.bottom > 0;
        if (visible) {
          el.classList.add('is-visible');
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCuIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
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

  // Page-scoped animation trigger (runs when Contact page mounts)
  useEffect(() => {
    // prefer the page root so we scope only this page's animations
    const pageEl = heroRef.current ? heroRef.current.closest('.cu-page') : document.documentElement;
    let rafId = 0;

    if (pageEl) {
      rafId = window.requestAnimationFrame(() => {
        pageEl.classList.add('animations-ready');
      });
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (pageEl) pageEl.classList.remove('animations-ready');
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cuFormData.name && cuFormData.email && cuFormData.message) {
      setCuSubmitted(true);
      setTimeout(() => {
        setCuSubmitted(false);
        setCuFormData({ name: "", email: "", phone: "", message: "" });
      }, 3500);
    }
  };

  const handleChange = (e) => {
    setCuFormData({ ...cuFormData, [e.target.name]: e.target.value });
  };

  const cuStatsData = [
    { icon: Users, number: "5000+", label: "Happy Travelers", color: "blue" },
    { icon: Award, number: "98%", label: "Success Rate", color: "rose" },
    { icon: Zap, number: "24/7", label: "Support Available", color: "amber" }
  ];

  const cuContactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+91-8112244114",
      subtext: "Mon-Sun, 8AM-8PM",
      gradient: "blue-cyan"
    },
    {
      icon: Mail,
      title: "Email",
      content: "hello@ranthamborewildtrip.com",
      subtext: "We reply within 2 hours",
      gradient: "rose-pink"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Sherpur Road, Near Ranthambore",
      subtext: "Sawai Madhopur, Rajasthan 322001",
      gradient: "amber-orange"
    }
  ];

  return (
    <div className="cu-page">
      
      {/* Animated Background Orbs */}
      <div className="cu-bg-orbs">
        <div ref={orb1Ref} className="cu-orb cu-orb-1" />
        <div className="cu-orb cu-orb-2" />
        <div className="cu-orb cu-orb-3" />
      </div>

      {/* HERO SECTION (copied from AboutUs, adapted for Contact) */}
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
              Home → Contact Us
            </p>
            <h1 data-animate id="au-hero-title">
              Contact Ranthambore Safari Booking <br /> &amp; Rajasthan Tour Packages
            </h1>
            <p className="au-hero-sub" data-animate id="au-hero-sub">
              Have questions or ready to book? Reach out — we'll plan the perfect wildlife experience for you.
            </p>
            <div className="au-hero-buttons" data-animate id="au-hero-btns">
              <button className="au-primary-btn">
                <span>Contact Us</span>
                <div className="au-btn-shine"></div>
              </button>
              <button className="au-secondary-btn">
                View Packages
              </button>
            </div>
          </div>
        </div>
        <div className="au-hero-scroll-indicator">
          <div className="au-scroll-mouse"></div>
          <p>Scroll to explore</p>
        </div>
      </section> 

      {/* Stats Section */}
      <section className="cu-stats-section cu-animate-on-scroll">
        <div className="cu-stats-container">
          {cuStatsData.map((stat, idx) => (
            <div key={idx} className={`cu-stat-card stat-${stat.color}`}>
              <div className="cu-stat-icon-wrapper">
                <stat.icon className="cu-stat-icon" />
              </div>
              <div className="cu-stat-number">{stat.number}</div>
              <div className="cu-stat-label">{stat.label}</div>
              <div className="cu-stat-shine" />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="cu-contact-section">
        <div className="cu-section-header cu-animate-on-scroll">
          <h2 className="cu-section-title">Get In Touch</h2>
          <p className="cu-section-subtitle">
            Ready to embark on your wildlife adventure? We're here to help you every step of the way.
          </p>
        </div>

        <div className="cu-contact-grid">
          
          {/* Contact Form */}
          <div className="cu-form-wrapper cu-animate-on-scroll">
            <div className="cu-form-card">
              <div className="cu-form-header">
                <div className="cu-form-icon">
                  <MessageCircle />
                </div>
                <h3>Send us a message</h3>
              </div>

              {cuSubmitted ? (
                <div className="cu-success-message">
                  <div className="cu-success-icon">
                    <CheckCircle />
                  </div>
                  <h4>Thank You!</h4>
                  <p>We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <div className="cu-form-content">
                  <div className="cu-form-group">
                    <label>Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={cuFormData.name}
                      onChange={handleChange}
                      onFocus={() => setCuFocused("name")}
                      onBlur={() => setCuFocused("")}
                      placeholder="John Doe"
                      className={cuFocused === "name" ? "focused" : ""}
                    />
                    <div className={`cu-input-line ${cuFocused === "name" ? "active" : ""}`} />
                  </div>

                  <div className="cu-form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={cuFormData.email}
                      onChange={handleChange}
                      onFocus={() => setCuFocused("email")}
                      onBlur={() => setCuFocused("")}
                      placeholder="john@example.com"
                      className={cuFocused === "email" ? "focused" : ""}
                    />
                    <div className={`cu-input-line ${cuFocused === "email" ? "active" : ""}`} />
                  </div>

                  <div className="cu-form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={cuFormData.phone}
                      onChange={handleChange}
                      onFocus={() => setCuFocused("phone")}
                      onBlur={() => setCuFocused("")}
                      placeholder="+91 XXXXX XXXXX"
                      className={cuFocused === "phone" ? "focused" : ""}
                    />
                    <div className={`cu-input-line ${cuFocused === "phone" ? "active" : ""}`} />
                  </div>

                  <div className="cu-form-group">
                    <label>Your Message *</label>
                    <textarea
                      name="message"
                      value={cuFormData.message}
                      onChange={handleChange}
                      onFocus={() => setCuFocused("message")}
                      onBlur={() => setCuFocused("")}
                      placeholder="Tell us about your safari plans..."
                      rows="5"
                      className={cuFocused === "message" ? "focused" : ""}
                    />
                    <div className={`cu-input-line ${cuFocused === "message" ? "active" : ""}`} />
                  </div>

                  <button className="cu-submit-btn" onClick={handleSubmit}>
                    <span>Send Message</span>
                    <Send className="cu-submit-icon" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="cu-info-cards-wrapper">
            {cuContactInfo.map((info, idx) => (
              <div key={idx} className={`cu-info-card info-${info.gradient} cu-animate-on-scroll`} style={{ '--cu-delay': `${idx * 0.1}s` }}>
                <div className="cu-info-bg-decoration" />
                <div className="cu-info-content">
                  <div className={`cu-info-icon-box gradient-${info.gradient}`}>
                    <info.icon className="cu-info-icon" />
                  </div>
                  <h4>{info.title}</h4>
                  <p className="cu-info-main">{info.content}</p>
                  <p className="cu-info-sub">{info.subtext}</p>
                </div>
                <div className="cu-info-hover-effect" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="cu-map-section cu-animate-on-scroll">
        <div className="cu-map-container">
          <div className="cu-map-wrapper">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps?q=Ranthambore%20Wild%20Trip%20Sawai%20Madhopur&output=embed"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cu-cta-section cu-animate-on-scroll">
        <div className="cu-cta-content">
          <h2>Ready for an Unforgettable Safari?</h2>
          <p>Book your Ranthambore adventure today and witness the majestic Bengal tigers in their natural habitat.</p>
          <button className="cu-cta-btn">
            Start Your Journey
            <ArrowRight />
          </button>
        </div>
      </section>

    </div>
  );
};

export default Contactus;