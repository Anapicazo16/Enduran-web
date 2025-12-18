import React, { useState } from 'react';

import FooterEnduran from './FooterEnduran';
import UserLoginModal from './UserLoginModal';
import logoEnduran from './assets/logo-enduran.jpg';
import { Link } from 'react-router-dom';
import HeroSlider from './HeroSlider';
import OffersGrid from './OffersGrid';
import './App.css';

export default function Ofertas() {
  const [loginOpen, setLoginOpen] = useState(false);
  return (
    <>
      <UserLoginModal open={loginOpen} onClose={() => setLoginOpen(false)} logo={logoEnduran} />
      <div className="main-bg snap-container">
        <header className="header-enduran">
          <Link to="/" className="logo-enduran-text" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>ENDURAN</Link>
          <nav className="nav-enduran">
            <ul>
              <li className="nav-item nav-dropdown">
                <Link to="/nuestroscoches">Nuestros coches</Link>
              </li>
              <li className="nav-item">
                <Link to="/ofertas">Ofertas</Link>
              </li>
              <li className="nav-item">
                <Link to="/">Cómo funciona</Link>
              </li>
              <li className="nav-item">Nuestra App</li>
              <li className="nav-item">¿Dudas?</li>
            </ul>
            <div className="header-icons">
              <a href="mailto:info@enduran.com" className="header-icon" title="Email">✉️</a>
              <a href="tel:+34123456789" className="header-icon" title="Teléfono">📞</a>
              <span className="header-icon" title="Usuario" style={{cursor:'pointer'}} onClick={() => setLoginOpen(true)}>👤</span>
            </div>
          </nav>
        </header>
        {/* Slider section */}
        <div style={{ width: '100vw', maxWidth: '100vw', overflow: 'hidden' }}>
          <HeroSlider />
        </div>
        {/* Offers grid section */}
        <div style={{ width: '100vw', maxWidth: '100vw', background: '#f7fafd', padding: '0 0 2rem 0' }}>
          <OffersGrid />
        </div>
      </div>
      <FooterEnduran />
    </>
  );
}
