import React, { useState, useEffect } from 'react';

/**
 * PURE CSS STYLES (Injected as a Style Tag for Single-File Deliverable)
 * ------------------------------------------------------------------
 * This section defines the new premium Dentica-inspired design system.
 */
const CSS_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

  :root {
    --primary: #0F172A; /* Deep Navy */
    --primary-light: #1E293B;
    --secondary: #0ea5e9; /* Sky Blue accent */
    --secondary-hover: #0284c7;
    --accent: #FDE047; /* Soft yellow/gold accent */
    --background: #F8FAFC;
    --surface: #FFFFFF;
    --surface-off: #F1F5F9;
    --text-main: #0F172A;
    --text-muted: #64748B;
    --border: #E2E8F0;
    
    --radius-sm: 0.5rem;
    --radius-md: 1rem;
    --radius-lg: 1.5rem;
    --radius-xl: 2.5rem;
    --radius-pill: 9999px;
    
    --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    
    --font-heading: 'Outfit', sans-serif;
    --font-body: 'Plus Jakarta Sans', sans-serif;
    
    --glass-bg: rgba(255, 255, 255, 0.85);
    --glass-border: rgba(255, 255, 255, 0.4);
    --glass-filter: blur(12px);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 100px;
  }

  body {
    background-color: var(--background);
    color: var(--text-main);
    font-family: var(--font-body);
    line-height: 1.6;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }

  body, html {
    cursor: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSczMicgaGVpZ2h0PSczMicgdmlld0JveD0nMCAwIDMyIDMyJz48cGF0aCBkPSdNOCwgOEM4LDQgMTIsNCAxNiw2QzIwLDQgMjQsNCAyNCw4TDI0LDE2QzI0LDIyIDIwLDI2IDE4LDMwTDE0LDMwQzEyLDI2IDgsMjIgOCwxNlovJyBmaWxsPSd3aGl0ZScgc3Ryb2tlPScjMEVBNUU5JyBzdHJva2Utd2lkdGg9JzInLz48L3N2Zz4=") 16 16, auto !important;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    color: var(--primary);
    line-height: 1.2;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  p {
    color: var(--text-muted);
  }

  .container {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  section {
    padding: 6rem 0;
  }

  /* --- BUTTONS & BADGES --- */
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.875rem 1.75rem;
    border-radius: var(--radius-pill);
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    text-decoration: none;
    border: none;
    cursor: pointer;
  }

  .btn-primary {
    background-color: var(--primary);
    color: white;
    box-shadow: var(--shadow-md);
  }

  .btn-primary:hover {
    background-color: var(--primary-light);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }

  .btn-secondary {
    background-color: var(--secondary);
    color: white;
    box-shadow: var(--shadow-md);
  }

  .btn-secondary:hover {
    background-color: var(--secondary-hover);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
  
  .btn-outline {
    background-color: transparent;
    color: var(--primary);
    border: 1px solid var(--border);
  }
  
  .btn-outline:hover {
    background-color: var(--surface-off);
    border-color: var(--primary);
  }

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: rgba(14, 165, 233, 0.1);
    color: var(--secondary);
    border-radius: var(--radius-pill);
    font-size: 0.875rem;
    font-weight: 600;
    font-family: var(--font-heading);
    letter-spacing: 0.05em;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
  }

  /* --- NAVBAR (Floating Pill) --- */
  .navbar-wrapper {
    position: fixed;
    top: 1.5rem;
    left: 0;
    width: 100%;
    z-index: 1000;
    padding: 0 1.5rem;
    display: flex;
    justify-content: center;
  }

  nav {
    background: var(--glass-bg);
    backdrop-filter: var(--glass-filter);
    -webkit-backdrop-filter: var(--glass-filter);
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-pill);
    padding: 0.75rem 1rem 0.75rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1100px;
    box-shadow: var(--shadow-lg);
    transition: all 0.3s ease;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: 800;
    font-family: var(--font-heading);
    color: var(--primary);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    letter-spacing: -0.03em;
  }
  
  .logo svg {
    color: var(--secondary);
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .nav-links a {
    text-decoration: none;
    color: var(--primary);
    font-weight: 500;
    font-size: 0.95rem;
    transition: color 0.2s;
  }

  .nav-links a:hover {
    color: var(--secondary);
  }

  .nav-toggle {
    display: none;
    background: none;
    border: none;
    color: var(--primary);
    cursor: pointer;
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    .nav-toggle {
      display: block;
      order: 3;
    }
    .nav-links {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background: var(--glass-bg);
      backdrop-filter: var(--glass-filter);
      flex-direction: column;
      padding: 1.5rem;
      border-radius: var(--radius-lg);
      margin-top: 1rem;
      border: 1px solid var(--glass-border);
      box-shadow: var(--shadow-xl);
    }
    .nav-links.active {
      display: flex;
    }
    .hero-actions {
      flex-direction: column;
      width: 100%;
    }
    .hero-actions .btn {
      width: 100%;
    }
    nav {
      padding: 0.5rem 0.75rem 0.5rem 1rem;
    }
    .logo {
      font-size: 1.2rem;
    }
    nav .btn-primary {
      padding: 0.5rem 0.75rem !important;
      font-size: 0.8rem !important;
    }
  }

  .booking-title {
    font-size: clamp(1.5rem, 5vw, 2.5rem);
    line-height: 1.1;
    margin-bottom: 1rem;
    color: var(--primary);
  }

  /* --- HERO SECTION --- */
  .hero {
    min-height: 100vh;
    padding-top: 8rem;
    display: flex;
    align-items: center;
    position: relative;
    background: radial-gradient(circle at top right, #E0F2FE 0%, transparent 60%),
                radial-gradient(circle at bottom left, #FEF3C7 0%, transparent 50%);
  }

  .hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .hero-text {
    max-width: 600px;
  }

  .hero h1 {
    font-size: clamp(3rem, 5vw, 4.5rem);
    line-height: 1.05;
    margin-bottom: 1.5rem;
  }
  
  .hero h1 span {
    color: var(--secondary);
    position: relative;
    display: inline-block;
  }
  
  .hero h1 span::after {
    content: '';
    position: absolute;
    bottom: 0.1em;
    left: 0;
    width: 100%;
    height: 0.3em;
    background-color: var(--accent);
    z-index: -1;
    border-radius: var(--radius-sm);
    opacity: 0.6;
  }

  .hero p {
    font-size: 1.125rem;
    margin-bottom: 2.5rem;
    max-width: 500px;
  }
  
  .hero-actions {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  
  .hero-image-wrapper {
    position: relative;
    border-radius: var(--radius-xl);
    overflow: hidden;
    box-shadow: var(--shadow-xl);
    aspect-ratio: 4/5;
  }
  
  .hero-image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .floating-card {
    position: absolute;
    bottom: -2rem;
    left: -2rem;
    background: var(--surface);
    padding: 1.5rem;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-xl);
    display: flex;
    align-items: center;
    gap: 1rem;
    animation: float 6s ease-in-out infinite;
  }
  
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0px); }
  }

  /* --- SECTION HEADERS --- */
  .section-header {
    text-align: center;
    margin-bottom: 4rem;
    max-width: 700px;
    margin-inline: auto;
  }

  .section-header h2 {
    font-size: clamp(2.5rem, 4vw, 3.5rem);
    margin-bottom: 1rem;
  }

  .section-header p {
    font-size: 1.125rem;
  }

  /* --- SERVICES (Dentica Style Cards) --- */
  .services {
    background-color: var(--surface);
    position: relative;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  .service-card {
    background: var(--surface-off);
    padding: 2.5rem 2rem;
    border-radius: var(--radius-xl);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    border: 1px solid transparent;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .service-card.compact {
    padding: 1.5rem;
  }

  .service-card.highlighted {
    background: white;
    border-color: var(--secondary);
    box-shadow: var(--shadow-xl);
  }

  .service-card.highlighted::after {
    content: 'Specialised';
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: var(--secondary);
    color: white;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 0.25rem 0.75rem;
    border-radius: var(--radius-pill);
    z-index: 2;
  }

  .service-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(14,165,233,0.1) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.4s;
  }

  .service-card:hover {
    transform: translateY(-8px);
    background: var(--surface);
    border-color: var(--border);
    box-shadow: var(--shadow-xl);
  }
  
  .service-card:hover::before {
    opacity: 1;
  }

  .service-icon {
    width: 4rem;
    height: 4rem;
    background: white;
    border-radius: var(--radius-pill);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    color: var(--secondary);
    box-shadow: var(--shadow-md);
    position: relative;
    z-index: 1;
  }

  .service-card h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    position: relative;
    z-index: 1;
  }

  .service-card p {
    position: relative;
    z-index: 1;
  }

  /* --- STATS / APPOINTMENT STRIP --- */
  .cta-strip {
    background-color: var(--primary);
    color: white;
    padding: 4rem 0;
    margin: 4rem 0;
    border-radius: var(--radius-xl);
    position: relative;
    overflow: hidden;
  }
  
  .cta-strip::after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 50%;
    height: 100%;
    background: url('data:image/svg+xml;utf8,<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="20"/></svg>') calc(100% + 100px) center / cover no-repeat;
  }

  .cta-strip .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 1;
  }
  
  .cta-strip h2 {
    color: white;
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
  
  .cta-strip p {
    color: #94A3B8;
  }

  /* --- EXPERT TEAM --- */
  .team {
    background-color: var(--surface-off);
    border-radius: var(--radius-xl) var(--radius-xl) 0 0;
    padding-bottom: 8rem;
  }
  
  .team-grid {
    display: flex;
    justify-content: center;
  }

  .doctor-card {
    background: var(--surface);
    border-radius: var(--radius-xl);
    overflow: hidden;
    box-shadow: var(--shadow-lg);
    max-width: 400px;
    width: 100%;
    transition: transform 0.3s;
  }
  
  .doctor-card:hover {
    transform: translateY(-8px);
  }

  .doctor-img {
    height: 400px;
    background-color: #E2E8F0;
    background-image: url('doctorphoto.webp');
    background-size: cover;
    background-position: center;
  }

  .doctor-info {
    padding: 2rem;
    text-align: center;
  }

  .doctor-info h3 {
    font-size: 1.5rem;
    margin-bottom: 0.25rem;
  }

  .doctor-info span {
    color: var(--secondary);
    font-weight: 600;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  /* --- BOOKING SECTION & LOCATION --- */
  .booking-section {
    background: var(--surface);
    position: relative;
    margin-top: -4rem; /* Overlap team section */
    z-index: 10;
    padding-top: 0;
  }
  
  .booking-container {
    background: white;
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-xl);
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;
  }
  
  .booking-info {
    background-color: var(--primary);
    color: white;
    padding: 4rem;
  }
  
  .booking-info h3 {
    color: white;
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .contact-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 3rem;
  }
  
  .contact-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .contact-icon {
    width: 2.5rem;
    height: 2.5rem;
    background: rgba(255,255,255,0.1);
    border-radius: var(--radius-pill);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--secondary);
    flex-shrink: 0;
  }
  
  .contact-text p {
    color: #94A3B8;
  }
  
  .booking-form {
    padding: 4rem;
    background: var(--surface);
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--primary);
  }

  .form-control {
    width: 100%;
    padding: 1rem 1.25rem;
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    font-size: 1rem;
    font-family: var(--font-body);
    transition: all 0.2s;
    background-color: var(--surface-off);
  }

  .form-control:focus {
    outline: none;
    border-color: var(--secondary);
    background-color: white;
    box-shadow: 0 0 0 4px rgba(14, 165, 233, 0.1);
  }

  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  /* --- FOOTER --- */
  .footer {
    background: var(--primary);
    color: white;
    padding: 5rem 0 2rem;
  }
  
  .footer-top {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 4rem;
    margin-bottom: 4rem;
    padding-bottom: 4rem;
    border-bottom: 1px solid rgba(255,255,255,0.1);
  }
  
  .footer-brand p {
    color: #94A3B8;
    max-width: 300px;
    margin-top: 1rem;
  }
  
  .footer-title {
    color: white;
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
  }
  
  .footer-links {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .footer-links a {
    color: #94A3B8;
    text-decoration: none;
    transition: color 0.2s;
  }
  
  .footer-links a:hover {
    color: var(--secondary);
  }
  
  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #94A3B8;
    font-size: 0.875rem;
  }

  /* --- TESTIMONIALS --- */
  .testimonials {
    background-color: var(--background);
    overflow: hidden;
  }
  
  .testimonial-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .testimonials-wrapper {
    width: 100%;
    overflow: hidden;
    position: relative;
    padding: 2rem 0 4rem;
  }

  .testimonials-wrapper::before,
  .testimonials-wrapper::after {
    content: '';
    position: absolute;
    top: 0;
    width: 10vw;
    height: 100%;
    z-index: 2;
    pointer-events: none;
  }

  .testimonials-wrapper::before {
    left: 0;
    background: linear-gradient(to right, var(--background) 0%, transparent 100%);
  }

  .testimonials-wrapper::after {
    right: 0;
    background: linear-gradient(to left, var(--background) 0%, transparent 100%);
  }

  .testimonial-carousel {
    display: flex;
    gap: 2rem;
    width: max-content;
    animation: scroll-x 40s linear infinite;
  }

  .testimonial-carousel:hover {
    animation-play-state: paused;
  }

  @keyframes scroll-x {
    0% { transform: translateX(0); }
    100% { transform: translateX(calc(-50% - 1rem)); } 
  }

  .testimonial-card-v2 {
    width: 350px;
    flex-shrink: 0;
    background: var(--surface);
    padding: 2.5rem 2rem;
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-md);
    border: 1px solid var(--border);
    transition: transform 0.3s, box-shadow 0.3s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .testimonial-card-v2:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }

  .stars {
    display: flex;
    gap: 0.25rem;
    color: var(--accent);
    margin-bottom: 1.5rem;
  }
  
  .stars svg {
    width: 20px;
    height: 20px;
  }

  .testimonial-text {
    font-size: 1.125rem;
    color: var(--text-main);
    font-style: italic;
    margin-bottom: 2rem;
    line-height: 1.7;
  }

  .testimonial-author {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .author-avatar {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background: var(--primary-light);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-family: var(--font-heading);
  }

  .author-info h4 {
    margin: 0;
    font-size: 1.1rem;
    color: var(--primary);
  }
  
  .author-info span {
    font-size: 0.875rem;
    color: var(--text-muted);
  }

  @media (max-width: 768px) {
    .testimonial-card-v2 {
      width: 300px;
    }
  }

  /* --- MEDIA QUERIES --- */
  @media (max-width: 1024px) {
    .hero-content, .booking-container {
      grid-template-columns: 1fr;
    }
    .hero {
      padding-top: 10rem;
      text-align: center;
    }
    .hero-text {
      max-width: 100%;
    }
    .hero-actions {
      justify-content: center;
    }
    .floating-card {
      position: relative;
      bottom: auto;
      left: auto;
      margin: 2rem auto 0;
      width: fit-content;
      animation: none;
    }
    .hero-image-wrapper {
      max-height: 500px;
    }
    .cta-strip .container {
      flex-direction: column;
      text-align: center;
      gap: 2rem;
    }
    .footer-top {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }

  @media (max-width: 768px) {
    .nav-links {
      display: none;
    }
    section {
      padding: 4rem 0;
    }
    .booking-info, .booking-form {
      padding: 2.5rem;
    }
    .grid-2 {
      grid-template-columns: 1fr;
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
  CheckCircle: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  MapPin: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  Star: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
};

/**
 * COMPONENTS
 */

const Hero = () => (
  <section className="hero">
    <div className="container hero-content">
      <div className="hero-text">
        <div className="badge">
          <Icons.Sparkles /> Specialised Dental Clinic
        </div>
        <h1>Brighten Your <span>Smile</span> Every Day</h1>
        <p>Experience world-class dental services in a comfortable, modern environment. Led by Dr. T.Renuka Devy, MDS. (Periodontist, Implantologist & laser Specialist), we prioritize your health and confidence.</p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">Book an Appointment</a>
          <a href="#services" className="btn btn-outline">Explore Services</a>
        </div>
        <p style={{ marginTop: '2rem', fontStyle: 'italic', color: 'var(--secondary)', fontWeight: 600, fontSize: '1.1rem' }}>
          "Dentistry isn’t expensive, Only your neglect is"
        </p>
      </div>
      <div style={{ position: 'relative' }}>
        <div className="hero-image-wrapper">
          <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800" alt="Modern Dental Clinic" />
        </div>
        <div className="floating-card">
          <Icons.CheckCircle />
          <div>
            <div style={{ fontWeight: 800, fontSize: '1.25rem', color: 'var(--primary)', lineHeight: 1 }}>250+</div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Happy Patients</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    { title: "Dental Scaling", desc: "Professional plaque and tartar removal.", icon: <Icons.Activity /> },
    { title: "Deep Cleaning", desc: "Advanced gum health treatment.", icon: <Icons.CheckCircle /> },
    { title: "Tooth Filling", desc: "Restore decayed teeth efficiently.", icon: <Icons.Sparkles /> },
    { title: "Root Canal Treatment", desc: "Painless pulp therapy with Post & Core.", icon: <Icons.Activity /> },
    { title: "Laser Surgery", desc: "Bloodless and painless advanced surgery.", icon: <Icons.Sparkles />, highlighted: true },
    { title: "Flap Surgery", desc: "Specialised periodontal care.", icon: <Icons.Activity /> },
    { title: "Esthetic Gum Surgery", desc: "Surgical gum line enhancement.", icon: <Icons.Sparkles />, highlighted: true },
    { title: "Smile Designing", desc: "Complete cosmetic transformation.", icon: <Icons.Sparkles />, highlighted: true },
    { title: "Tooth Jewelry", desc: "Add a sparkle to your beautiful smile.", icon: <Icons.Sparkles />, highlighted: true },
    { title: "Orthodontic Treatment", desc: "Expert teeth alignment solutions.", icon: <Icons.Activity /> },
    { title: "Partial Denture", desc: "Removable tooth replacement solutions.", icon: <Icons.Tooth /> },
    { title: "Complete Denture", desc: "Full arch restoration for comfort.", icon: <Icons.Tooth /> },
    { title: "Dental Crowns", desc: "Basic to advanced crown restorations.", icon: <Icons.Tooth /> },
    { title: "Child Care Dentistry", desc: "Gentle dental care for the little ones.", icon: <Icons.Tooth /> },
    { title: "Extraction", desc: "Safe and comfortable tooth removal.", icon: <Icons.CheckCircle /> },
    { title: "Impaction", desc: "Expert surgical removal of impacted teeth.", icon: <Icons.Activity /> },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <div className="badge">Our Services</div>
          <h2>Comprehensive Dental Care</h2>
          <p>We offer a wide range of specialised services to ensure your dental health is in the best possible condition.</p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className={`service-card compact ${s.highlighted ? 'highlighted' : ''}`}>
              <div className="service-icon" style={{ width: '3rem', height: '3rem', marginBottom: '1rem' }}>{s.icon}</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{s.title}</h3>
              <p style={{ fontSize: '0.85rem' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CtaStrip = () => (
  <div className="container">
    <div className="cta-strip">
      <div className="container">
        <div>
          <h2>Need urgent dental care?</h2>
          <p>Our emergency dentists are ready to help you.</p>
        </div>
        <a href="#contact" className="btn btn-secondary" style={{ backgroundColor: 'white', color: 'var(--primary)' }}>
          Contact Us Now
        </a>
      </div>
    </div>
  </div>
);

const Team = () => (
  <section id="team" className="team">
    <div className="container">
      <div className="section-header">
        <div className="badge">Our Expert</div>
        <h2>Meet Specialized Dentist</h2>
        <p>Passionate about giving you the best smile possible.</p>
      </div>
      <div className="team-grid">
        <div className="doctor-card">
          {/* Using a placeholder for the doctor image - replace the URL if you have a real image */}
          <div className="doctor-img"></div>
          <div className="doctor-info">
            <p>Dr. T.Renuka Devy, MDS.</p>
            <span>Periodontist, Implantologist & laser Specialist</span>
            <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>Dedicated to providing advanced periodontal care and state-of-the-art dental implants.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => {
  const reviews = [
    { name: "Dr Shanmugapriya", rating: 5, date: "10 months ago", text: "Very talented and kind doctor… treatment provided with affordable price…comfortable to visit in all weekends…Thank you so much Dr. Renuka Devi ❤️…" },
    { name: "Suppriya Ayyappan", rating: 5, date: "11 months ago", text: "Best clinic and treatment provided is very good...👍🏻" },
    { name: "ganesh manikandan", rating: 5, date: "a year ago", text: "Treatment was very good, excellent service, Good patient care 👍 👍" },
    { name: "ajith karan", rating: 5, date: "a year ago", text: "Treatment was very good, homely environment excellent service and painless treatment experience" },
    { name: "Abdur Rahman", rating: 5, date: "a year ago", text: "She was very intersting and geniune in way she explain the treatment protocol to the patient" },
    { name: "naren dran", rating: 5, date: "a year ago", text: "Affordable dental clinic, patient friendly doctor, had a positive vibe" }
  ];

  const scrollItems = [...reviews, ...reviews]; // Duplicate for seamless infinite scroll

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="testimonial-header">
          <div className="badge">Testimonials</div>
          <h2>What Our Patients Say</h2>
          <p style={{ maxWidth: '600px', margin: '1rem auto 0' }}>Don't just take our word for it. Here is some feedback from our wonderful patients.</p>
        </div>
      </div>

      {/* Full width container for the horizontal scroll */}
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <div className="testimonials-wrapper">
          <div className="testimonial-carousel">
            {scrollItems.map((r, i) => (
              <div key={i} className="testimonial-card-v2">
                <div>
                  <div className="stars">
                    {[...Array(r.rating)].map((_, idx) => <Icons.Star key={idx} />)}
                  </div>
                  <p className="testimonial-text">"{r.text}"</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {r.name.charAt(0)}
                  </div>
                  <div className="author-info">
                    <h4>{r.name}</h4>
                    <span>{r.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const BookingAndLocation = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', service: 'General' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="booking-section">
      <div className="container">
        <div className="booking-container">

          {/* Left Side: Info & Map */}
          <div className="booking-info">
            <h3>Contact Details</h3>
            <ul className="contact-list">
              <li className="contact-item">
                <div className="contact-icon"><Icons.MapPin /></div>
                <div className="contact-text">
                  <h4 style={{ color: 'white', marginBottom: '0.25rem' }}>Location</h4>
                  <p>No: 5, PETTAI ROAD,<br />THIRUNALLAR, PETTAI,<br />PUDUCHERRY - 609 607</p>
                </div>
              </li>
              <li className="contact-item">
                <div className="contact-icon"><Icons.Phone /></div>
                <div className="contact-text">
                  <h4 style={{ color: 'white', marginBottom: '0.25rem' }}>Phone</h4>
                  <p>+91 95666 01261<br />+91 87781 44471</p>
                </div>
              </li>
              <li className="contact-item">
                <div className="contact-icon"><Icons.Mail /></div>
                <div className="contact-text">
                  <h4 style={{ color: 'white', marginBottom: '0.25rem' }}>Email</h4>
                  <p>srinivasantooothzcare@gmail.com</p>
                </div>
              </li>
            </ul>

            <div style={{ borderRadius: '1rem', overflow: 'hidden', height: '200px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d244.84429997376668!2d79.7884546!3d10.924886!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a551700063aa563%3A0x883030681f8526d3!2sSRINIVASAN%20TOOTHZ%20CARE!5e0!3m2!1sen!2sin!4v1772122205890!5m2!1sen!2sin"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="booking-form">
            <h3 className="booking-title">Book an Appointment</h3>
            <p style={{ marginBottom: '2rem' }}>We will get back to you to confirm your appointment details.</p>

            {submitted ? (
              <div style={{ padding: '2rem', background: 'rgba(14, 165, 233, 0.1)', borderRadius: '1rem', textAlign: 'center' }}>
                <div style={{ color: 'var(--secondary)', display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}><Icons.CheckCircle /></div>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Request Received!</h4>
                <p>Thank you, {formData.name}. We will call you at {formData.phone} shortly.</p>
                <button className="btn btn-outline" style={{ marginTop: '1.5rem' }} onClick={() => setSubmitted(false)}>Book Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" className="form-control" placeholder="John Doe" required
                    value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" className="form-control" placeholder="+91 00000 00000" required
                    value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                </div>
                <div className="form-group">
                  <label>Service Required</label>
                  <select className="form-control" value={formData.service} onChange={e => setFormData({ ...formData, service: e.target.value })}>
                    <option>General Checkup</option>
                    <option>Teeth Whitening</option>
                    <option>Implants</option>
                    <option>Urgent Care</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', padding: '1rem' }}>
                  Submit Request
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-top">
        <div className="footer-brand">
          <a href="#" className="logo" style={{ color: 'white' }}>
            <Icons.Tooth />
            <span style={{ color: 'white' }}>Srinivasan Toothz Care</span>
          </a>
          <p>Committed to dental excellence. Providing advanced, painless, and highly specialised dental treatments.</p>
        </div>
        <div>
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#services">Our Services</a></li>
            <li><a href="#team">Our Expert</a></li>
            <li><a href="#contact">Book Appointment</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Srinivasan Toothz Care. All Rights Reserved.</p>
        <p>Dr. T.Renuka Devy, MDS.</p>
      </div>
    </div>
  </footer>
);

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="navbar-wrapper">
      <nav>
        <a href="#" className="logo">
          <Icons.Tooth />
          <span>Srinivasan Toothz Care</span>
        </a>
        <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? "✕" : "☰"}
        </button>
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#team" onClick={() => setIsOpen(false)}>Our Team</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
        <div style={{ order: 4 }}>
          <a href="#contact" className="btn btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.9rem' }}>
            Book now
          </a>
        </div>
      </nav>
    </header>
  );
};

export default function App() {
  // Inject CSS on Mount
  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = CSS_STYLES;
    document.head.appendChild(styleTag);
    return () => document.head.removeChild(styleTag);
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <CtaStrip />
      <Team />
      <Testimonials />
      <BookingAndLocation />
      <Footer />
    </div>
  );
}
