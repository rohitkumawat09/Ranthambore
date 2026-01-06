import React, { useState, useRef, useEffect } from 'react';
import { Star, Users, Car, MapPin, Calendar, X, ShoppingBag } from 'lucide-react';
import './Carboock.css';

const Carboock = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    pickupPlace: '',
    dropPlace: '',
    pickupDate: '',
    returnDate: '',
    people: '',
    withAC: 'yes',
    specialRequest: '',
    roundTrip: true
  });

  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (heroRef.current) {
        heroRef.current.style.setProperty('--hero-translateY', `${y * 0.5}px`);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const vehicles = [
    {
      id: 1,
      name: 'Toyota Innova',
      type: 'SUV',
      capacity: 7,
      rating: 4.6,
      description: 'Spacious performance for every terrain',
      features: ['High Ground Clearance', 'Spacious Cabin', 'ABS'],
      image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&q=80'
    },
    {
      id: 2,
      name: 'Toyota Fortuner',
      type: 'SUV',
      capacity: 7,
      rating: 4.8,
      description: 'Premium comfort and power',
      features: ['4WD', 'Leather Seats', 'Sunroof'],
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&q=80'
    },
    {
      id: 3,
      name: 'Maruti Ertiga',
      type: 'MUV',
      capacity: 7,
      rating: 4.5,
      description: 'Perfect for family trips',
      features: ['Fuel Efficient', 'Comfortable', 'AC'],
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&q=80'
    }
  ];

  const handleBookNow = (vehicle) => {
    setSelectedVehicle(vehicle);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVehicle(null);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, vehicle: selectedVehicle });
    alert(`Enquiry submitted for ${selectedVehicle.name}!`);
    handleCloseModal();
  };

  return (
    <div className="car-booking-container">
      {/* Hero Section */}
      <section className="hero-section" ref={heroRef}>
        <div className="hero-bg" />
        <div className="hero-particles">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                ['--left']: `${Math.random() * 100}%`,
                ['--delay']: `${Math.random() * 5}s`,
                ['--dur']: `${8 + Math.random() * 12}s`
              }}
            />
          ))}
        </div>
        <div className="hero-overlay">
          <div className="hero-content">
            <div className="breadcrumb">
              <span>Home</span>
              <span className="arrow">→</span>
              <span>Vehicle Booking</span>
            </div>
            <h1 className="hero-title">Ranthambore Car Rental with Driver</h1>
            <p className="hero-description">
              Clean AC vehicles and vetted drivers, clear per-km pricing, and 24/7 assistance for transfers, sightseeing, and safari gate reporting.
            </p>
            <div className="hero-buttons">
              <button className="cta-button">
                <span>Book Your Vehicle</span>
                <div className="btn-shine"></div>
              </button>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <div className="scroll-mouse"></div>
          <p>Scroll to explore</p>
        </div>
      </section> 

      {/* Vehicle Booking Section */}
      <section className="booking-section">
        <div className="section-header">
          <p className="section-subtitle">VEHICLE BOOKING</p>
          <h2 className="section-title">
            Choose Your Perfect <span className="highlight">Adventure Vehicle</span>
          </h2>
          <p className="section-description">
            Select from our premium fleet. Click "Book Now" to proceed with your reservation.
          </p>
        </div>

        <div className="vehicles-grid">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="vehicle-card">
              <div className="vehicle-image-container">
                <span className="vehicle-badge">{vehicle.type}</span>
                <div className="vehicle-rating">
                  <Star size={16} fill="#FFD700" color="#FFD700" />
                  <span>{vehicle.rating}</span>
                </div>
                <img src={vehicle.image} alt={vehicle.name} className="vehicle-image" />
              </div>
              
              <div className="vehicle-details">
                <div className="vehicle-header">
                  <span className="vehicle-type">
                    <Car size={16} /> {vehicle.type}
                  </span>
                  <div className="star-rating">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16}
                        fill={i < Math.floor(vehicle.rating) ? '#FFD700' : 'none'}
                        color={i < Math.floor(vehicle.rating) ? '#FFD700' : '#DDD'}
                      />
                    ))}
                  </div>
                </div>
                
                <h3 className="vehicle-name">{vehicle.name}</h3>
                <p className="vehicle-description">{vehicle.description}</p>
                
                <div className="vehicle-specs">
                  <span><Users size={16} /> Capacity: {vehicle.capacity}</span>
                  <span> • </span>
                  <span>Type: {vehicle.type.toLowerCase()}</span>
                </div>
                
                <div className="vehicle-features">
                  {vehicle.features.map((feature, index) => (
                    <span key={index} className="feature-tag">{feature}</span>
                  ))}
                </div>
                
                <button 
                  className="book-now-button"
                  onClick={() => handleBookNow(vehicle)}
                >
                  <ShoppingBag size={18} />
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>
              <X size={24} />
            </button>
            
            <div className="modal-header">
              <h2>Your Details & Enquiry</h2>
              {selectedVehicle && (
                <p className="modal-vehicle-name">Booking: {selectedVehicle.name}</p>
              )}
            </div>

            <form onSubmit={handleSubmit} className="booking-form">
              <div className="form-section">
                <h3>Contact Information</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name <span className="required">*</span></label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter full name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address <span className="required">*</span></label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter email address"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number <span className="required">*</span></label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter phone number"
                      pattern="[0-9]{10}"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Pickup Place <span className="required">*</span></label>
                  <input
                    type="text"
                    name="pickupPlace"
                    value={formData.pickupPlace}
                    onChange={handleInputChange}
                    placeholder="Enter pickup location"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Drop Place <span className="required">*</span></label>
                  <input
                    type="text"
                    name="dropPlace"
                    value={formData.dropPlace}
                    onChange={handleInputChange}
                    placeholder="Enter drop location"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>
                    <input
                      type="checkbox"
                      name="roundTrip"
                      checked={formData.roundTrip}
                      onChange={handleInputChange}
                      className="checkbox-input"
                    />
                    Round Trip?
                  </label>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Pick Up Date <span className="required">*</span></label>
                  <input
                    type="date"
                    name="pickupDate"
                    value={formData.pickupDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Return Date <span className="required">*</span></label>
                  <input
                    type="date"
                    name="returnDate"
                    value={formData.returnDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>People <span className="required">*</span></label>
                  <input
                    type="number"
                    name="people"
                    value={formData.people}
                    onChange={handleInputChange}
                    placeholder="0"
                    min="1"
                    max={selectedVehicle?.capacity || 10}
                    required
                  />
                  {selectedVehicle && (
                    <small>Capacity: {selectedVehicle.capacity}</small>
                  )}
                </div>
                <div className="form-group">
                  <label>With AC? <span className="required">*</span></label>
                  <div className="radio-group">
                    <label>
                      <input
                        type="radio"
                        name="withAC"
                        value="yes"
                        checked={formData.withAC === 'yes'}
                        onChange={handleInputChange}
                      />
                      Yes
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="withAC"
                        value="no"
                        checked={formData.withAC === 'no'}
                        onChange={handleInputChange}
                      />
                      No
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-group full-width">
                <label>Special Request (Optional)</label>
                <textarea
                  name="specialRequest"
                  value={formData.specialRequest}
                  onChange={handleInputChange}
                  placeholder="Any special requests?"
                  rows="4"
                />
              </div>

              <button type="submit" className="submit-button">
                <ShoppingBag size={18} />
                Submit Enquiry for {selectedVehicle?.type} {selectedVehicle?.name}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carboock;