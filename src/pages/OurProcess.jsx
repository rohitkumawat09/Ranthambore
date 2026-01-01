import React, { useState, useEffect } from "react";
import { 
  ClipboardList, 
  Map, 
  CheckCircle, 
  Target, 
  ChevronRight,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Sparkles,
  Clock,
  Users,
  FileText,
  Calendar
} from "lucide-react";

const processSteps = [
  {
    step: 1,
    title: "Requirement Analysis",
    desc: "We analyze your requirements and create a clear Ranthambore travel roadmap tailored to dates, group size, and budget.",
    icon: ClipboardList,
    colorStart: "#3b82f6",
    colorEnd: "#2563eb"
  },
  {
    step: 2,
    title: "Itinerary Planning",
    desc: "We craft a day-by-day itinerary with preferred zones, Jeep/Canter selection, hotel options near gates, and transfer routes.",
    icon: Map,
    colorStart: "#a855f7",
    colorEnd: "#9333ea"
  },
  {
    step: 3,
    title: "Booking Verification",
    desc: "We verify traveler names, IDs, dates, zone/vehicle availability, and payment confirmations to avoid last-minute issues.",
    icon: CheckCircle,
    colorStart: "#22c55e",
    colorEnd: "#16a34a"
  },
  {
    step: 4,
    title: "Finalization & Support",
    desc: "We share final vouchers, pickup details, and 24/7 support numbers; we stay available for timing changes or weather updates.",
    icon: Target,
    colorStart: "#f43f5e",
    colorEnd: "#e11d48"
  }
];

const faqs = [
  {
    q: "How is an official Ranthambore safari booked online?",
    a: "Permits are issued on the state OBMS portal by selecting date, shift, and vehicle type, entering traveler details as per ID, and completing payment.",
    category: "Booking",
    icon: Calendar
  },
  {
    q: "Which vehicle should be chosen—Jeep or Canter?",
    a: "Jeep is ideal for small groups and better photography, while Canter is economical for larger groups.",
    category: "Vehicle",
    icon: Users
  },
  {
    q: "What documents are required for booking and entry?",
    a: "A valid government ID (Aadhaar, Passport, Voter ID, or Driving License) is mandatory for all travelers.",
    category: "Documents",
    icon: FileText
  },
  {
    q: "What are the season-wise safari timings?",
    a: "Safari timings vary by season. Morning and afternoon shifts change slightly between summer and winter months.",
    category: "Timing",
    icon: Clock
  },
  {
    q: "Can a confirmed permit be changed or refunded?",
    a: "No, once issued, safari permits are non-transferable and non-refundable as per forest department rules.",
    category: "Policy",
    icon: CheckCircle
  }
];

const OurProcess = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [activeFaq, setActiveFaq] = useState(null);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStep, setHoveredStep] = useState(null);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          if (activeStep < 4) {
            setActiveStep(activeStep + 1);
            return 0;
          }
          return 100;
        }
        return prev + 1.5;
      });
    }, 80);

    return () => clearInterval(timer);
  }, [activeStep]);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div style={styles.container}>
      {/* Animated Background Elements */}
      <div style={styles.bgCircle1}></div>
      <div style={styles.bgCircle2}></div>
      <div style={styles.bgCircle3}></div>

      <div style={styles.wrapper}>
        {/* Header */}
        <div style={{
          ...styles.header,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 1s ease-out'
        }}>
          <div style={styles.badge}>
            <Sparkles size={16} style={styles.badgeIcon} />
            EVERYTHING YOU NEED, IN ONE PLACE
          </div>
          <h2 style={styles.mainTitle}>
            Our <span style={styles.highlight}>Process</span> & Your{" "}
            <span style={styles.highlight}>Questions</span> Answered
          </h2>
          <p style={styles.subtitle}>
            Discover our streamlined process and get answers to your most important questions
          </p>
        </div>

        <div style={styles.grid}>
          {/* LEFT - Process */}
          <div style={{
            ...styles.column,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
            transition: 'all 1s ease-out 0.2s'
          }}>
            <div style={styles.columnHeader}>
              <div style={styles.decorativeLine}></div>
              <h3 style={styles.columnTitle}>
                Our <span style={styles.highlight}>Process</span>
              </h3>
            </div>

            <div style={styles.processContainer}>
              {/* Connection Line */}
              <div style={styles.connectionLine}></div>

              {processSteps.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeStep === item.step;
                const isHovered = hoveredStep === item.step;

                return (
                  <div
                    key={item.step}
                    style={{
                      ...styles.processCard,
                      transform: isActive ? 'scale(1.03)' : isHovered ? 'scale(1.01)' : 'scale(1)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      transitionDelay: `${index * 100}ms`
                    }}
                    onClick={() => {
                      setActiveStep(item.step);
                      setProgress(0);
                    }}
                    onMouseEnter={() => setHoveredStep(item.step)}
                    onMouseLeave={() => setHoveredStep(null)}
                  >
                    <div style={{
                      ...styles.processCardInner,
                      borderColor: isActive ? '#8b0d3a' : isHovered ? '#fecdd3' : '#f3f4f6',
                      boxShadow: isActive 
                        ? '0 20px 60px rgba(139, 13, 58, 0.25), 0 0 0 1px rgba(139, 13, 58, 0.1)' 
                        : isHovered
                        ? '0 10px 30px rgba(0, 0, 0, 0.1)'
                        : '0 4px 12px rgba(0, 0, 0, 0.05)'
                    }}>
                      <div style={styles.processCardContent}>
                        {/* Icon Circle */}
                        <div style={{
                          ...styles.iconCircle,
                          background: isActive 
                            ? `linear-gradient(135deg, ${item.colorStart}, ${item.colorEnd})` 
                            : isHovered
                            ? '#fef2f2'
                            : '#f9fafb',
                          transform: isActive ? 'scale(1.1) rotate(5deg)' : 'scale(1)',
                          boxShadow: isActive ? '0 8px 24px rgba(139, 13, 58, 0.3)' : 'none'
                        }}>
                          <Icon 
                            size={28} 
                            color={isActive ? '#fff' : isHovered ? '#8b0d3a' : '#9ca3af'}
                            strokeWidth={2.5}
                          />
                          {isActive && <div style={styles.pulseRing}></div>}
                        </div>

                        <div style={styles.processTextContainer}>
                          <h4 style={{
                            ...styles.processTitle,
                            color: isActive ? '#8b0d3a' : '#1f2937'
                          }}>
                            {item.title}
                          </h4>
                          
                          <div style={{
                            maxHeight: isActive ? '200px' : '0',
                            opacity: isActive ? 1 : 0,
                            overflow: 'hidden',
                            transition: 'all 0.5s ease-out'
                          }}>
                            <p style={styles.processDesc}>{item.desc}</p>
                          </div>
                        </div>

                        <ChevronRight 
                          size={32}
                          color={isActive ? '#8b0d3a' : '#d1d5db'}
                          style={{
                            transform: isActive ? 'translateX(5px) rotate(90deg)' : 'translateX(0)',
                            transition: 'all 0.3s ease'
                          }}
                        />
                      </div>

                      {/* Progress Bar */}
                      {isActive && (
                        <div style={styles.progressBarContainer}>
                          <div style={{...styles.progressBar, width: `${progress}%`}}></div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT - FAQ */}
          <div style={{
            ...styles.column,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
            transition: 'all 1s ease-out 0.4s'
          }}>
            <div style={styles.columnHeader}>
              <div style={styles.decorativeLine}></div>
              <h3 style={styles.columnTitle}>
                Frequently <span style={styles.highlight}>Asked</span> Questions
              </h3>
            </div>

            <div style={styles.faqContainer}>
              {faqs.map((faq, i) => {
                const Icon = faq.icon;
                const isOpen = activeFaq === i;

                return (
                  <div
                    key={i}
                    style={{
                      ...styles.faqCard,
                      borderColor: isOpen ? '#8b0d3a' : '#f3f4f6',
                      boxShadow: isOpen 
                        ? '0 20px 60px rgba(139, 13, 58, 0.15)' 
                        : '0 4px 12px rgba(0, 0, 0, 0.05)',
                      transition: 'all 0.4s ease',
                      transitionDelay: `${i * 50}ms`
                    }}
                    onClick={() => toggleFaq(i)}
                  >
                    <div style={styles.faqContent}>
                      <div style={styles.faqHeader}>
                        <div style={styles.faqIconWrapper}>
                          <Icon size={20} color="#8b0d3a" strokeWidth={2.5} />
                        </div>
                        <div style={styles.faqTextContainer}>
                          <div style={styles.faqCategory}>{faq.category}</div>
                          <h4 style={styles.faqQuestion}>{faq.q}</h4>
                        </div>
                        <div style={{
                          ...styles.faqToggle,
                          background: isOpen ? '#8b0d3a' : '#f3f4f6',
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0)'
                        }}>
                          {isOpen ? (
                            <ChevronUp size={20} color="#fff" strokeWidth={3} />
                          ) : (
                            <ChevronDown size={20} color="#9ca3af" strokeWidth={3} />
                          )}
                        </div>
                      </div>

                      <div style={{
                        maxHeight: isOpen ? '200px' : '0',
                        opacity: isOpen ? 1 : 0,
                        overflow: 'hidden',
                        transition: 'all 0.5s ease-out'
                      }}>
                        <div style={styles.faqAnswer}>
                          <p style={styles.faqAnswerText}>{faq.a}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Box */}
            <div style={styles.ctaBox}>
              <div style={styles.ctaBgOrb1}></div>
              <div style={styles.ctaBgOrb2}></div>
              
              <div style={styles.ctaContent}>
                <MessageCircle size={40} color="#fff" strokeWidth={2} style={styles.ctaIcon} />
                <h4 style={styles.ctaTitle}>Still have questions?</h4>
                <p style={styles.ctaText}>
                  Get a personalized Ranthambore plan and same-day assistance with official online booking.
                </p>
                <button style={styles.ctaButton}>
                  <span>Contact Us</span>
                  <ChevronRight size={20} strokeWidth={3} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #fff5f7 0%, #ffffff 50%, #fffbeb 100%)',
    padding: '4rem 1.5rem',
    position: 'relative',
    overflow: 'hidden'
  },
  bgCircle1: {
    position: 'absolute',
    width: '600px',
    height: '600px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(139, 13, 58, 0.08) 0%, transparent 70%)',
    top: '-200px',
    right: '-200px',
    animation: 'float 20s ease-in-out infinite',
    pointerEvents: 'none'
  },
  bgCircle2: {
    position: 'absolute',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(251, 191, 36, 0.08) 0%, transparent 70%)',
    bottom: '-100px',
    left: '-100px',
    animation: 'float 15s ease-in-out infinite reverse',
    pointerEvents: 'none'
  },
  bgCircle3: {
    position: 'absolute',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(139, 13, 58, 0.05) 0%, transparent 70%)',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    animation: 'float 25s ease-in-out infinite',
    pointerEvents: 'none'
  },
  wrapper: {
    maxWidth: '1400px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1
  },
  header: {
    textAlign: 'center',
    marginBottom: '4rem'
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 24px',
    background: 'linear-gradient(135deg, #8b0d3a 0%, #be123c 100%)',
    color: '#fff',
    fontSize: '0.75rem',
    fontWeight: '700',
    letterSpacing: '0.15em',
    borderRadius: '9999px',
    boxShadow: '0 10px 30px rgba(139, 13, 58, 0.3)',
    marginBottom: '1.5rem'
  },
  badgeIcon: {
    animation: 'spin 3s linear infinite'
  },
  mainTitle: {
    fontSize: '3.5rem',
    fontWeight: '800',
    marginBottom: '1rem',
    color: '#111827',
    lineHeight: '1.2'
  },
  highlight: {
    background: 'linear-gradient(135deg, #8b0d3a 0%, #be123c 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  subtitle: {
    fontSize: '1.125rem',
    color: '#6b7280',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: '1.7'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
    gap: '3rem'
  },
  column: {
    display: 'flex',
    flexDirection: 'column'
  },
  columnHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '2rem'
  },
  decorativeLine: {
    width: '48px',
    height: '4px',
    background: 'linear-gradient(90deg, #8b0d3a 0%, #be123c 100%)',
    borderRadius: '9999px'
  },
  columnTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#111827'
  },
  processContainer: {
    position: 'relative'
  },
  connectionLine: {
    position: 'absolute',
    left: '23px',
    top: '0',
    bottom: '0',
    width: '2px',
    background: 'linear-gradient(180deg, #fecdd3 0%, #fda4af 50%, #fecdd3 100%)',
    zIndex: 0
  },
  processCard: {
    position: 'relative',
    marginBottom: '1.5rem',
    cursor: 'pointer',
    zIndex: 1
  },
  processCardInner: {
    background: '#fff',
    borderRadius: '20px',
    padding: '1.5rem',
    border: '2px solid',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
  },
  processCardContent: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem'
  },
  iconCircle: {
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    transition: 'all 0.4s ease',
    position: 'relative'
  },
  pulseRing: {
    position: 'absolute',
    inset: '-8px',
    borderRadius: '50%',
    border: '2px solid #8b0d3a',
    opacity: 0.3,
    animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite'
  },
  processTextContainer: {
    flex: 1
  },
  processTitle: {
    fontSize: '1.25rem',
    fontWeight: '700',
    marginBottom: '0.5rem',
    transition: 'color 0.3s ease'
  },
  processDesc: {
    color: '#6b7280',
    lineHeight: '1.7',
    fontSize: '0.95rem',
    marginTop: '0.75rem'
  },
  progressBarContainer: {
    marginTop: '1rem',
    height: '4px',
    background: '#f3f4f6',
    borderRadius: '9999px',
    overflow: 'hidden'
  },
  progressBar: {
    height: '100%',
    background: 'linear-gradient(90deg, #8b0d3a 0%, #be123c 100%)',
    transition: 'width 0.1s linear',
    borderRadius: '9999px'
  },
  faqContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  faqCard: {
    background: '#fff',
    borderRadius: '20px',
    border: '2px solid',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'all 0.4s ease'
  },
  faqContent: {
    padding: '1.5rem'
  },
  faqHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem'
  },
  faqIconWrapper: {
    width: '40px',
    height: '40px',
    borderRadius: '12px',
    background: '#fef2f2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  faqTextContainer: {
    flex: 1
  },
  faqCategory: {
    fontSize: '0.7rem',
    fontWeight: '700',
    color: '#8b0d3a',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    marginBottom: '0.5rem'
  },
  faqQuestion: {
    fontSize: '1.05rem',
    fontWeight: '600',
    color: '#1f2937',
    lineHeight: '1.5'
  },
  faqToggle: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    transition: 'all 0.3s ease'
  },
  faqAnswer: {
    paddingTop: '1rem',
    marginTop: '1rem',
    borderTop: '1px solid #f3f4f6'
  },
  faqAnswerText: {
    color: '#6b7280',
    lineHeight: '1.7',
    fontSize: '0.95rem'
  },
  ctaBox: {
    marginTop: '2rem',
    padding: '2.5rem',
    background: 'linear-gradient(135deg, #8b0d3a 0%, #be123c 50%, #8b0d3a 100%)',
    borderRadius: '24px',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 25px 60px rgba(139, 13, 58, 0.4)'
  },
  ctaBgOrb1: {
    position: 'absolute',
    width: '250px',
    height: '250px',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.1)',
    filter: 'blur(60px)',
    top: '-100px',
    right: '-100px',
    pointerEvents: 'none'
  },
  ctaBgOrb2: {
    position: 'absolute',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.08)',
    filter: 'blur(50px)',
    bottom: '-80px',
    left: '-80px',
    pointerEvents: 'none'
  },
  ctaContent: {
    position: 'relative',
    zIndex: 1
  },
  ctaIcon: {
    marginBottom: '1rem'
  },
  ctaTitle: {
    fontSize: '1.75rem',
    fontWeight: '700',
    color: '#fff',
    marginBottom: '0.75rem'
  },
  ctaText: {
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: '1.7',
    marginBottom: '1.5rem',
    fontSize: '1rem'
  },
  ctaButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '14px 32px',
    background: '#fff',
    color: '#8b0d3a',
    border: 'none',
    borderRadius: '9999px',
    fontSize: '1rem',
    fontWeight: '700',
    cursor: 'pointer',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease'
  }
};

// Add keyframes for animations
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
  }
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  @keyframes ping {
    75%, 100% {
      transform: scale(1.3);
      opacity: 0;
    }
  }
  
  button:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: 1024px) {
    h2 {
      font-size: 2.5rem !important;
    }
  }
  
  @media (max-width: 768px) {
    h2 {
      font-size: 2rem !important;
    }
  }
`;
document.head.appendChild(styleSheet);

export default OurProcess;