import React, { useState, useEffect } from 'react';

/**
 * PURE CSS STYLES (Injected as a Style Tag for Single-File Deliverable)
 * ------------------------------------------------------------------
 * This section defines a modern, conversion-optimized design system.
 */
const CSS_STYLES = `
  :root {
    --primary: #0ea5e9;
    --primary-dark: #0284c7;
    --secondary: #14b8a6;
    --accent: #f59e0b;
    --background: #f8fafc;
    --card-bg: rgba(255, 255, 255, 0.8);
    --text-main: #0f172a;
    --text-muted: #64748b;
    --shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --glass: backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--background);
    color: var(--text-main);
    line-height: 1.6;
    overflow-x: hidden;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  section {
    padding: 5rem 0;
  }

  /* Sticky Navigation */
  nav {
    position: fixed;
    top: 0;
    width: 100%;
    height: 70px;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    z-index: 1000;
    display: flex;
    align-items: center;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  }

  .nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--primary);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
  }

  .nav-links {
    display: flex;
    gap: 2rem;
  }

  .nav-links a {
    text-decoration: none;
    color: var(--text-main);
    font-weight: 500;
    transition: color 0.3s;
  }

  .nav-links a:hover {
    color: var(--primary);
  }

  /* Hero Section */
  .hero {
    height: 90vh;
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 100%);
    position: relative;
    overflow: hidden;
    margin-top: 70px;
  }

  .hero::after {
    content: '';
    position: absolute;
    bottom: -50px;
    right: -50px;
    width: 300px;
    height: 300px;
    background: var(--primary);
    opacity: 0.05;
    border-radius: 50%;
  }

  .hero-text {
    max-width: 600px;
    z-index: 1;
  }

  .hero-tagline {
    color: var(--primary);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 1rem;
    display: block;
  }

  .hero h1 {
    font-size: 3.5rem;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    color: #0c4a6e;
  }

  .hero p {
    font-size: 1.25rem;
    color: var(--text-muted);
    margin-bottom: 2.5rem;
  }

  .cta-btn {
    background: var(--accent);
    color: white;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 700;
    font-size: 1.1rem;
    box-shadow: 0 10px 15px -3px rgba(245, 158, 11, 0.3);
    transition: transform 0.3s, background 0.3s;
    display: inline-block;
  }

  .cta-btn:hover {
    transform: translateY(-2px);
    background: #d97706;
  }

  /* Services Grid */
  .section-title {
    text-align: center;
    margin-bottom: 3rem;
  }

  .section-title h2 {
    font-size: 2.5rem;
    color: #0c4a6e;
    margin-bottom: 0.5rem;
  }

  .section-title p {
    color: var(--text-muted);
    font-size: 1.1rem;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .service-card {
    background: white;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: var(--shadow);
    transition: transform 0.3s;
    border: 1px solid #f1f5f9;
  }

  .service-card:hover {
    transform: translateY(-5px);
  }

  .service-icon {
    width: 3rem;
    height: 3rem;
    background: #e0f2fe;
    border-radius: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    color: var(--primary);
  }

  .service-card h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  /* Testimonials */
  .testimonials {
    background-color: #f1f5f9;
  }

  .testimonial-carousel {
    display: flex;
    gap: 2rem;
    overflow-x: auto;
    padding: 1rem 0 2rem;
    scroll-snap-type: x mandatory;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .testimonial-carousel::-webkit-scrollbar {
    display: none;
  }

  .testimonial-card {
    flex: 0 0 calc(33.333% - 1.33rem);
    min-width: 300px;
    background: white;
    padding: 2rem;
    border-radius: 1rem;
    scroll-snap-align: start;
    box-shadow: var(--shadow);
  }

  .rating {
    color: var(--accent);
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }

  .testimonial-card p {
    font-style: italic;
    color: var(--text-muted);
    margin-bottom: 1.5rem;
  }

  .author {
    font-weight: 700;
    color: var(--text-main);
  }

  /* Location Info */
  .location-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .map-wrapper {
    width: 100%;
    height: 400px;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: var(--shadow);
  }

  .info-list {
    list-style: none;
  }

  .info-item {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .info-item b {
    color: var(--primary);
    width: 100px;
  }

  /* Contact Form */
  .contact {
    background: white;
  }

  .booking-form {
    max-width: 600px;
    margin: 0 auto;
    background: #f8fafc;
    padding: 2.5rem;
    border-radius: 1.5rem;
    border: 1px solid #e2e8f0;
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: var(--text-main);
  }

  .form-group input, .form-group select, .form-group textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid #cbd5e1;
    border-radius: 0.5rem;
    font-size: 1rem;
    transition: border-color 0.3s, ring 0.3s;
  }

  .form-group input:focus, .form-group select:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1);
  }

  .submit-btn {
    width: 100%;
    background: var(--primary);
    color: white;
    padding: 1rem;
    border: none;
    border-radius: 0.5rem;
    font-weight: 700;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background 0.3s;
  }

  .submit-btn:hover {
    background: var(--primary-dark);
  }

  .error-text {
    color: #ef4444;
    font-size: 0.875rem;
    margin-top: 0.25rem;
  }

  .footer {
    background: #0f172a;
    color: white;
    padding: 3rem 0;
    text-align: center;
  }

  /* Responsive Adjustments */
  @media (max-width: 968px) {
    .testimonial-card {
      flex: 0 0 80%;
    }
    .location-container {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .nav-links {
      display: none;
    }
    .hero h1 {
      font-size: 2.5rem;
    }
    section {
      padding: 3rem 0;
    }
  }

  /* Booking Modal Styles */
  .modal-overlay {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 2000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    backdrop-filter: blur(5px);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
  }

  .modal-overlay.open {
    opacity: 1;
    pointer-events: auto;
  }

  .modal-content {
    background: white;
    border-radius: 1.5rem;
    width: 100%;
    max-width: 900px;
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    overflow: hidden;
    position: relative;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    transform: translateY(20px);
    transition: transform 0.3s ease;
  }

  .modal-overlay.open .modal-content {
    transform: translateY(0);
  }

  .modal-close-icon {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: #f1f5f9;
    border: none;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
    color: var(--text-main);
    transition: background 0.3s;
  }

  .modal-close-icon:hover {
    background: #e2e8f0;
  }

  .modal-contact {
    background: #0f172a;
    color: white;
    padding: 2.5rem;
  }

  .modal-contact h3 {
    margin-bottom: 2rem;
    font-size: 1.5rem;
  }

  .modal-info-item {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .modal-info-icon {
    color: var(--primary);
    width: 1.5rem;
    height: 1.5rem;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(14, 165, 233, 0.1);
    border-radius: 50%;
    padding: 0.5rem;
    box-sizing: content-box;
  }

  .modal-info-content h4 {
    font-size: 0.9rem;
    margin-bottom: 0.25rem;
    color: white;
  }

  .modal-info-content p {
    font-size: 0.9rem;
    color: #cbd5e1;
    margin: 0;
    line-height: 1.4;
  }

  .modal-map {
    margin-top: 2rem;
    height: 150px;
    border-radius: 0.75rem;
    overflow: hidden;
    position: relative;
  }

  .modal-map-link {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    background: white;
    color: var(--primary);
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    border-radius: 0.25rem;
    text-decoration: none;
    font-weight: 600;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    display: flex;
    align-items: center;
    gap: 0.25rem;
    z-index: 5;
  }

  .modal-form-area {
    padding: 2.5rem;
    background: white;
  }

  .modal-form-area h2 {
    font-size: 2rem;
    color: #0f172a;
    margin-bottom: 0.5rem;
  }

  .modal-form-area > p {
    color: var(--text-muted);
    margin-bottom: 2rem;
  }

  .modal-form-area .form-group input, 
  .modal-form-area .form-group select {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
  }

  .modal-form-area .submit-btn {
    background: #0f172a;
  }
  .modal-form-area .submit-btn:hover {
    background: #1e293b;
  }

  @media (max-width: 768px) {
    .modal-content {
      grid-template-columns: 1fr;
      max-height: 90vh;
      overflow-y: auto;
    }
  }
`;

/**
 * UTILITY: SVG ICONS
 */
const Icons = {
  Tooth: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 12c.5 0 1 .5 1 1v1c0 1 1 2 2 2h4c1 0 2-1 2-2v-1c0-.5.5-1 1-1" />
      <path d="M15 12h.01" />
      <path d="M9 12h.01" />
      <path d="M12 21c-5 0-9-1.5-9-5V7c0-1.5 1-3 3-3s3 1 3 3v2c0 1 1 2 3 2s3-1 3-2V7c0-2 1-3 3-3s3 1.5 3 3v9c0 3.5-4 5-9 5Z" />
    </svg>
  ),
  Sparkles: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" /><path d="M3 5h4" /><path d="M21 17v4" /><path d="M19 19h4" />
    </svg>
  ),
  Activity: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  Calendar: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  MapPin: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Phone: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  Mail: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  X: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
};

/**
 * COMPONENTS
 */

const Navbar = ({ onBookClick }) => (
  <nav>
    <div className="container nav-content">
      <a href="#" className="logo">
        <Icons.Tooth />
        <span>Srinivasan Toothz Care</span>
      </a>
      <div className="nav-links">
        <a href="#services">Services</a>
        <a href="#testimonials">Testimonials</a>
        <button onClick={onBookClick} className="cta-btn" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', border: 'none', cursor: 'pointer' }}>Book Now</button>
      </div>
    </div>
  </nav>
);

const Hero = ({ onBookClick }) => (
  <section className="hero">
    <div className="container">
      <div className="hero-text">
        <span className="hero-tagline" style={{ lineHeight: '1.5' }}>
          Dr. T.Renuka Devy, MDS. | Periodontist & Implantologist<br />
          Dental Implants Specialist<br />
          Full mouth rehabilitation
        </span>
        <h1>Srinivasan Toothz Care</h1>
        <p>Experience world-class dental services in a comfortable, modern environment. We prioritize your health and confidence.</p>
        <button onClick={onBookClick} className="cta-btn" style={{ border: 'none', cursor: 'pointer' }}>Book Your Appointment</button>
      </div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    { title: "General Dentistry", desc: "Routine checkups, cleanings, and preventative care for all ages.", icon: <Icons.Tooth /> },
    { title: "Teeth Whitening", desc: "Professional brightening treatments for a radiant, confident smile.", icon: <Icons.Sparkles /> },
    { title: "Orthodontics", desc: "Modern alignment solutions including Invisalign and traditional braces.", icon: <Icons.Activity /> },
    { title: "Dental Implants", desc: "Specialized permanent, natural-looking tooth replacements with high-tech precision.", icon: <Icons.Tooth /> },
    { title: "Full Mouth Rehabilitation", desc: "Comprehensive restorative treatments to rebuild and restore your entire smile.", icon: <Icons.Activity /> },
    { title: "Emergency Care", desc: "Same-day urgent treatment for dental pain, accidents, or injuries.", icon: <Icons.Calendar /> }
  ];

  return (
    <section id="services">
      <div className="container">
        <div className="section-title">
          <h2>Our Excellence</h2>
          <p>Comprehensive dental solutions tailored to your unique needs.</p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="service-card">
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "Dr Shanmugapriya", rating: 5, text: "Very talented and kind doctor… treatment provided with affordable price…comfortable to visit in all weekends…Thank you so much Dr. Renuka Devi ❤️…" },
    { name: "Suppriya Ayyappan", rating: 5, text: "Best clinic and treatment provided is very good...👍🏻" },
    { name: "Bhumiga Srinivasan", rating: 5, text: "Best dental clinic with good and spacious infrastructure. Dentist is highly skilled and updated with new trends. Patient friendly and highly recommended in Thirunallar." },
    { name: "Saravanan SP", rating: 5, text: "Great experience! The dentist was very gentle and the staff was friendly. Highly recommend" },
    { name: "lakshmi prabha", rating: 5, text: "This is a good clinic with great service, newly started the treatment is very satisfying. I did tooth filling." },
    { name: "Krishnan S", rating: 5, text: "Best treatment and great output experienced doctor on the whole very great work done" },
    { name: "ganesh manikandan", rating: 5, text: "Treatment was very good, excellent service, Good patient care 👍 👍 …" },
    { name: "ajith karan", rating: 5, text: "Treatment was very good, homely environment excellent service and painless treatment experience" },
    { name: "Abdur Rahman", rating: 5, text: "She was very intersting and geniune in way she explain the treatment protocol to the patient" },
    { name: "naren dran", rating: 5, text: "Affordable dental clinic, patient friendly doctor, had a positive vibe" },
    { name: "Laugh And Smile Dental Clinic", rating: 5, text: "Dr.Renuga takes atmost care of the patients and treat her patients very kindly." },
    { name: "Anusiya Anusiya", rating: 5, text: "Cozy and friendly environment with superb service and the hygienist was extremely personable and very gentle" },
    { name: "jawahar babu", rating: 5, text: "Best in town!!! Treated well . Explained the procedure next and clean. Well equipped." },
    { name: "gousalya sitharthan", rating: 5, text: "wow friendly in nature.." },
    { name: "A.Saranya", rating: 5, text: "Patient friendly doctor with affordable dental Clinic. Clinic is spacious, clean and also washroom facilities." },
    { name: "Pradheep Selvapandian", rating: 5, text: "good thoot care clinic in thirunallar" }
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-title">
          <h2>Patient Stories</h2>
          <p>Hear what our wonderful patients have to say about their care.</p>
        </div>
        <div className="testimonial-carousel">
          {reviews.map((r, i) => (
            <div key={i} className="testimonial-card">
              <div className="rating">{"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}</div>
              <p>"{r.text}"</p>
              <div className="author">— {r.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BookingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    sex: '',
    address: '',
    contact_no: '',
    complaint: '',
    medical_history: '',
    dental_history: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setFormData({
        name: '',
        age: '',
        sex: '',
        address: '',
        contact_no: '',
        complaint: '',
        medical_history: '',
        dental_history: ''
      });
      setErrors({});
    }
  }, [isOpen]);

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.contact_no) newErrors.contact_no = 'Contact number is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);

      // --- GOOGLE SHEETS INTEGRATION ---
      // 1. Replace this URL with the one you get from Google Apps Script after deploying
      const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxPhjvKQDhFYOCMJtnrTI2oyfnaZ12oCZVJMdlg3wRE35sG92rl2x7Aw4IBiCGz98x5/exec";

      if (SCRIPT_URL !== "YOUR_GOOGLE_SCRIPT_URL_HERE") {
        try {
          const formParams = new FormData();
          Object.keys(formData).forEach(key => formParams.append(key, formData[key]));
          formParams.append("timestamp", new Date().toISOString());

          await fetch(SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors', // no-cors is used to bypass CORS restrictions when we don't need to read the response
            body: formParams
          });
        } catch (err) {
          console.error("Failed to save to Google Sheets:", err);
        }
      }

      setSubmitted(true);
      setIsSubmitting(false);

      // Since WhatsApp Web encoding causes severe corruption globally during the Vite build,
      // we are switching to 100% foolproof ASCII formatting. WhatsApp natively converts text wrapped in * to bold.
      const message = `*New Patient Details*\n- Name: ${formData.name}\n- Age: ${formData.age}\n- Sex: ${formData.sex}\n- Address: ${formData.address}\n- Contact no: ${formData.contact_no}\n- Complaint: ${formData.complaint}\n- Medical History: ${formData.medical_history || 'None'}\n- Dental History: ${formData.dental_history || 'None'}`;

      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/918344090472?text=${encodedMessage}`, '_blank');
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close-icon" onClick={onClose} aria-label="Close modal">
          <Icons.X />
        </button>

        <div className="modal-contact">
          <h3>Contact Details</h3>

          <div className="modal-info-item">
            <div className="modal-info-icon"><Icons.MapPin /></div>
            <div className="modal-info-content">
              <h4>Location</h4>
              <p>No: 5, PETTAI ROAD,<br />THIRUNALLAR, PETTAI,<br />PUDUCHERRY - 609 607</p>
            </div>
          </div>

          <div className="modal-info-item">
            <div className="modal-info-icon"><Icons.Phone /></div>
            <div className="modal-info-content">
              <h4>Phone</h4>
              <p>+91 95666 01261<br />+91 87781 44471</p>
            </div>
          </div>

          <div className="modal-info-item">
            <div className="modal-info-icon"><Icons.Mail /></div>
            <div className="modal-info-content">
              <h4>Email</h4>
              <p>srinivasantooothzcare@gmail.com</p>
            </div>
          </div>

          <div className="modal-map">
            <a href="https://maps.google.com/?q=10.9472305,79.7915525" target="_blank" rel="noreferrer" className="modal-map-link">
              Open in Maps <span style={{ fontSize: '10px' }}>↗</span>
            </a>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15664.836855111162!2d79.7915525!3d10.9472305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a553fa6b5107051%3A0xc3bbaebe1afb8807!2sThirunallar%2C%20Puducherry!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy">
            </iframe>
          </div>
        </div>

        <div className="modal-form-area" style={{ maxHeight: '100%', overflowY: 'auto' }}>
          <h2 style={{ fontSize: '1.75rem' }}>Patient Details Form</h2>
          <p style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}>Please provide your details below for a quick and accurate consultation.</p>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <h3 style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>Details Submitted!</h3>
              <p>Thank you, {formData.name}. We have received your information.</p>
              <button className="cta-btn" onClick={() => setSubmitted(false)} style={{ marginTop: '2rem', border: 'none', width: '100%', cursor: 'pointer' }}>Fill Another Form</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label>Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    required
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>

                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label>Contact no:</label>
                  <input
                    type="tel"
                    value={formData.contact_no}
                    onChange={(e) => setFormData({ ...formData, contact_no: e.target.value })}
                    placeholder="+91 00000 00000"
                    required
                  />
                  {errors.contact_no && <span className="error-text">{errors.contact_no}</span>}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label>Age</label>
                  <input
                    type="number"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    placeholder="30"
                    required
                  />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label>Sex</label>
                  <select required value={formData.sex} onChange={(e) => setFormData({ ...formData, sex: e.target.value })}>
                    <option value="" disabled>Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label>Address</label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="123 Street, City"
                  required
                />
              </div>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label>Complaint</label>
                <input
                  type="text"
                  value={formData.complaint}
                  onChange={(e) => setFormData({ ...formData, complaint: e.target.value })}
                  placeholder="What brings you in today?"
                  required
                />
              </div>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label>Previous Medical History</label>
                <input
                  type="text"
                  value={formData.medical_history}
                  onChange={(e) => setFormData({ ...formData, medical_history: e.target.value })}
                  placeholder="(e.g., Diabetes, Hypertension)"
                />
              </div>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label>Previous Dental History</label>
                <input
                  type="text"
                  value={formData.dental_history}
                  onChange={(e) => setFormData({ ...formData, dental_history: e.target.value })}
                  placeholder="(e.g., Braces, Root Canal)"
                />
              </div>

              <button type="submit" disabled={isSubmitting} className="submit-btn" style={{ marginTop: '0.5rem', width: '100%', cursor: isSubmitting ? 'not-allowed' : 'pointer', padding: '1rem', border: 'none', borderRadius: '0.5rem', fontWeight: '700', fontSize: '1.1rem', color: 'white', opacity: isSubmitting ? 0.7 : 1 }}>
                {isSubmitting ? 'Saving Details...' : 'Submit Details'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="logo" style={{ color: 'white', justifyContent: 'center', marginBottom: '1.5rem' }}>
        <Icons.Tooth />
        <span>SRINIVASAN TOOTHZ CARE</span>
      </div>
      <p>&copy; {new Date().getFullYear()} Srinivasan Toothz Care. All Rights Reserved.</p>
    </div>
  </footer>
);

export default function DentalApp() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Inject CSS on Mount
  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = CSS_STYLES;
    document.head.appendChild(styleTag);
    return () => document.head.removeChild(styleTag);
  }, []);

  return (
    <div className="app-wrapper">
      <Navbar onBookClick={() => setIsBookingOpen(true)} />
      <Hero onBookClick={() => setIsBookingOpen(true)} />
      <Services />
      <Testimonials />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <Footer />
    </div>
  );
}
