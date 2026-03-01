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
  )
};

/**
 * COMPONENTS
 */

const Navbar = () => (
  <nav>
    <div className="container nav-content">
      <a href="#" className="logo">
        <Icons.Tooth />
        <span>Srinivasan Toothz Care</span>
      </a>
      <div className="nav-links">
        <a href="#services">Services</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#location">Find Us</a>
        <a href="#contact" className="cta-btn" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Book Now</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
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
        <a href="#contact" className="cta-btn">Book Your Appointment</a>
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
    { name: "Sarah Johnson", rating: 5, text: "The best dental experience I've ever had. The staff is professional and the office is beautiful!" },
    { name: "Michael Chen", rating: 5, text: "Very gentle and thorough. They explained everything clearly and made me feel at ease." },
    { name: "Emily Rodriguez", rating: 4, text: "Excellent service and results. My teeth have never looked better after the whitening treatment." }
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

const Location = () => (
  <section id="location">
    <div className="container">
      <div className="section-title">
        <h2>Visit Our Clinic</h2>
        <p>Conveniently located in the heart of the city.</p>
      </div>
      <div className="location-container">
        <div className="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215267101155!2d-73.985428!3d40.748817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1625000000000!5m2!1sen!2sus"
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy">
          </iframe>
        </div>
        <div>
          <ul className="info-list">
            <li className="info-item"><b>Address:</b> No: 5, PETTAI ROAD, THIRUNALLAR - 609 607</li>
            <li className="info-item"><b>Phone:</b> +91 95666 01261, +91 87781 44471</li>
            <li className="info-item"><b>Email:</b> srinivasantooothzcare@gmail.com</li>
            <li className="info-item"><b>Hours:</b> Mon-Fri: 8am - 6pm<br />Sat: 9am - 2pm</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const BookingForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', date: '', service: 'General' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Valid email required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.date) newErrors.date = 'Date is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      console.log('Form Submitted:', formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Ready for Your Best Smile?</h2>
          <p>Book your appointment online in seconds.</p>
        </div>
        {submitted ? (
          <div className="booking-form" style={{ textAlign: 'center' }}>
            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Booking Confirmed!</h3>
            <p>Thank you, {formData.name}. We'll contact you shortly at {formData.phone} to confirm your appointment on {formData.date}.</p>
            <button className="cta-btn" onClick={() => setSubmitted(false)} style={{ marginTop: '2rem', border: 'none' }}>Book Another</button>
          </div>
        ) : (
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="(555) 000-0000"
              />
              {errors.phone && <span className="error-text">{errors.phone}</span>}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label>Preferred Date</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
                {errors.date && <span className="error-text">{errors.date}</span>}
              </div>
              <div className="form-group">
                <label>Service Type</label>
                <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })}>
                  <option>General</option>
                  <option>Whitening</option>
                  <option>Orthodontics</option>
                  <option>Implants</option>
                  <option>Rehabilitation</option>
                  <option>Emergency</option>
                </select>
              </div>
            </div>
            <button type="submit" className="submit-btn" style={{ marginTop: '1rem' }}>Confirm Booking</button>
          </form>
        )}
      </div>
    </section>
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
  // Inject CSS on Mount
  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = CSS_STYLES;
    document.head.appendChild(styleTag);
    return () => document.head.removeChild(styleTag);
  }, []);

  return (
    <div className="app-wrapper">
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <Location />
      <BookingForm />
      <Footer />
    </div>
  );
}
