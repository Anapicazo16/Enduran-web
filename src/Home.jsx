import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import VideoBackground from './VideoBackground';
import FooterEnduran from './FooterEnduran';
import HeroSlider from './HeroSlider';
import UserLoginModal from './UserLoginModal';
import logoEnduran from './assets/logo-enduran.jpg';
import alfaRomeoLogo from './assets/brands/logo_alfaromeo.png';
import audiLogo from './assets/brands/logo_audi.png';
import bmwLogo from './assets/brands/logo_bmw.png';
import citroenLogo from './assets/brands/logo_citroen.png';
import cupraLogo from './assets/brands/logo_cupra.png';
import fiatLogo from './assets/brands/logo_fiat.png';
import fordLogo from './assets/brands/logo_ford.png';
import hyundaiLogo from './assets/brands/logo_hyundai.png';
import jaecooLogo from './assets/brands/logo_jaecoo.png';
import jeepLogo from './assets/brands/logo_jeep.png';
import kiaLogo from './assets/brands/logo_kia.png';
import lexusLogo from './assets/brands/logo_lexus.png';
import mercedesLogo from './assets/brands/logo_mercedes.png';
import mitsubishiLogo from './assets/brands/logo_mitsubishi.png';
import nissanLogo from './assets/brands/logo_nissan.png';
import opelLogo from './assets/brands/logo_opel.png';
import peugeotLogo from './assets/brands/logo_peugeot.png';
import renaultLogo from './assets/brands/logo_renault.png';
import skodaLogo from './assets/brands/logo_skoda.png';
import toyotaLogo from './assets/brands/logo_toyota.png';
import volkswagenLogo from './assets/brands/logo_volkswagen.png';
import volvoLogo from './assets/brands/logo_volvo.png';
import omodaLogo from './assets/brands/logo_omoda.png';
import bydLogo from './assets/brands/logo_byd.png';

export default function Home() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <UserLoginModal open={loginOpen} onClose={() => setLoginOpen(false)} logo={logoEnduran} />
      <div className="main-bg snap-container">
        <header className="header-enduran">
          <Link to="/" className="logo-enduran-text" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>ENDURAN</Link>
          {/* Botón hamburguesa solo visible en móvil */}
          <button className="menu-toggle" onClick={() => setMenuOpen(m => !m)} aria-label="Abrir menú">
            <span style={{fontSize:'2rem',lineHeight:1}}>☰</span>
          </button>
          <nav className={`nav-enduran${menuOpen ? ' open' : ''}`}>
            <ul onClick={() => setMenuOpen(false)}>
              <li className="nav-item nav-dropdown">
                <Link to="/nuestroscoches">Nuestros coches</Link>
                <div className="dropdown-menu">
                  <div className="brands-grid">
                    <div className="brand-item"><img src={alfaRomeoLogo} alt="Alfa Romeo" className="brand-logo"/>Alfa Romeo</div>
                    <div className="brand-item"><img src={audiLogo} alt="Audi" className="brand-logo"/>Audi</div>
                    <div className="brand-item"><img src={bydLogo} alt="Byd" className="brand-logo"/>Byd</div>
                    <div className="brand-item"><img src={bmwLogo} alt="BMW" className="brand-logo"/>BMW</div>
                    <div className="brand-item"><img src={citroenLogo} alt="Citroën" className="brand-logo"/>Citroën</div>
                    <div className="brand-item"><img src={cupraLogo} alt="CUPRA" className="brand-logo"/>CUPRA</div>
                    <div className="brand-item"><img src={fiatLogo} alt="Fiat" className="brand-logo"/>Fiat</div>
                    <div className="brand-item"><img src={fordLogo} alt="Ford" className="brand-logo"/>Ford</div>
                    <div className="brand-item"><img src={hyundaiLogo} alt="Hyundai" className="brand-logo"/>Hyundai</div>
                    <div className="brand-item"><img src={jaecooLogo} alt="Jaecoo" className="brand-logo"/>Jaecoo</div>
                    <div className="brand-item"><img src={jeepLogo} alt="Jeep" className="brand-logo"/>Jeep</div>
                    <div className="brand-item"><img src={kiaLogo} alt="Kia" className="brand-logo"/>Kia</div>
                    <div className="brand-item"><span className="brand-logo" style={{display:'flex',alignItems:'center',justifyContent:'center'}}><svg width="32" height="32" viewBox="0 0 32 32"><text x="0" y="22" fontSize="20" fill="#bbb">KGM</text></svg></span>KGM</div>
                    <div className="brand-item"><img src={lexusLogo} alt="Lexus" className="brand-logo"/>Lexus</div>
                    <div className="brand-item"><img src={mercedesLogo} alt="Mercedes" className="brand-logo"/>Mercedes</div>
                    <div className="brand-item"><img src={mitsubishiLogo} alt="Mitsubishi" className="brand-logo"/>Mitsubishi</div>
                    <div className="brand-item"><img src={nissanLogo} alt="Nissan" className="brand-logo"/>Nissan</div>
                    <div className="brand-item"><img src={omodaLogo} alt="Omoda" className="brand-logo"/>Omoda</div>
                    <div className="brand-item"><img src={opelLogo} alt="Opel" className="brand-logo"/>Opel</div>
                    <div className="brand-item"><img src={peugeotLogo} alt="Peugeot" className="brand-logo"/>Peugeot</div>
                    <div className="brand-item"><img src={renaultLogo} alt="Renault" className="brand-logo"/>Renault</div>
                    <div className="brand-item"><img src={skodaLogo} alt="Skoda" className="brand-logo"/>Skoda</div>
                    <div className="brand-item"><img src={toyotaLogo} alt="Toyota" className="brand-logo"/>Toyota</div>
                    <div className="brand-item"><img src={volkswagenLogo} alt="Volkswagen" className="brand-logo"/>Volkswagen</div>
                    <div className="brand-item"><img src={volvoLogo} alt="Volvo" className="brand-logo"/>Volvo</div>
                  </div>
                  <div className="dropdown-footer">
                    <Link to="/nuestroscoches">
                      <button className="see-all-btn">Ver todos los coches ›</button>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/ofertas">Ofertas</Link>
              </li>
              <li className="nav-item">Cómo funciona</li>
              <li className="nav-item">Nuestra App</li>
              <li className="nav-item">¿Dudas?</li>
            </ul>
            <div className="header-icons">
              <a href="mailto:info@enduran.com" className="header-icon" title="Email">✉️</a>
              <a href="tel:+34123456789" className="header-icon" title="Teléfono">📞</a>
              <span className="header-icon" title="Usuario" style={{cursor:'pointer'}} onClick={e => {e.stopPropagation(); setLoginOpen(true);}}>👤</span>
            </div>
          </nav>
        </header>
        {/* 1. Video + Bienvenida */}
        <section className="snap-section welcome-section" style={{ position: 'relative', overflow: 'hidden' }}>
          <VideoBackground />
          <main style={{ position: 'relative', zIndex: 1, width: '100%' }}>
            <h1 className="hero-title">Bienvenido a ENDURAN Renting</h1>
            <p className="hero-subtitle">Tu renting flexible, fácil y digital</p>
          </main>
        </section>
        {/* 2. Slider */}
        <section className="snap-section hero-slider-section">
          <HeroSlider />
        </section>
        {/* 3. Fichas de renting */}
        <section className="snap-section renting-cards-section">
          <div
            style={{
              display: 'flex',
              gap: '2.5rem',
              justifyContent: 'center',
              alignItems: 'stretch',
              marginTop: '3.5rem',
              flexWrap: 'wrap',
            }}
          >
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(135deg, #0a2342 80%, #3a7bd5 100%)',
                borderRadius: '2.5rem',
                boxShadow: '0 4px 32px #0a234222',
                flex: '1 1 480px',
                maxWidth: 540,
                minWidth: 340,
                padding: '3.5rem 2.8rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: 'none',
                color: '#fff',
                fontSize: '1.18rem',
              }}
            >
              <div style={{ color: '#8ad0e6', fontWeight: 700, fontSize: '1.55rem', marginBottom: '1.2rem' }}>El mejor precio</div>
              <div style={{ fontSize: '3.3rem', color: '#8ad0e6', marginBottom: '1.2rem' }}>🚗</div>
              <div style={{ fontSize: '1.75rem', fontWeight: 700, color: '#fff', marginBottom: '0.7rem' }}>Renting 36 meses</div>
              <div style={{ color: '#e6f7fa', fontSize: '1.18rem', marginBottom: '2.1rem', textAlign: 'center' }}>La cuota más competitiva con un compromiso de tiempo razonable</div>
              <button style={{ background: '#1e90ff', color: '#fff', border: 'none', borderRadius: '0.9rem', fontWeight: 700, fontSize: '1.18rem', padding: '1.2rem 0', width: '100%', marginTop: 'auto', cursor: 'pointer', boxShadow: '0 2px 12px #0a234222' }}>Quiero un renting a 36 meses ›</button>
            </motion.div>
            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(135deg, #3a7bd5 80%, #8ad0e6 100%)',
                borderRadius: '2.5rem',
                boxShadow: '0 4px 32px #3a7bd522',
                flex: '1 1 480px',
                maxWidth: 540,
                minWidth: 340,
                padding: '3.5rem 2.8rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: 'none',
                color: '#fff',
                fontSize: '1.18rem',
              }}
            >
              <div style={{ color: '#fff', fontWeight: 700, fontSize: '1.55rem', marginBottom: '1.2rem' }}>Equilibrio</div>
              <div style={{ fontSize: '3.3rem', color: '#fff', marginBottom: '1.2rem' }}>🚘</div>
              <div style={{ fontSize: '1.75rem', fontWeight: 700, color: '#fff', marginBottom: '0.7rem' }}>Renting 24 meses</div>
              <div style={{ color: '#e6f7fa', fontSize: '1.18rem', marginBottom: '2.1rem', textAlign: 'center' }}>Flexibilidad y precio ajustado en un compromiso intermedio</div>
              <button style={{ background: '#8ad0e6', color: '#0a2342', border: 'none', borderRadius: '0.9rem', fontWeight: 700, fontSize: '1.18rem', padding: '1.2rem 0', width: '100%', marginTop: 'auto', cursor: 'pointer', boxShadow: '0 2px 12px #3a7bd522' }}>Quiero un renting a 24 meses ›</button>
            </motion.div>
            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(135deg, #8ad0e6 80%, #e6f7fa 100%)',
                borderRadius: '2.5rem',
                boxShadow: '0 4px 32px #8ad0e622',
                flex: '1 1 480px',
                maxWidth: 540,
                minWidth: 340,
                padding: '3.5rem 2.8rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: 'none',
                color: '#0a2342',
                fontSize: '1.18rem',
              }}
            >
              <div style={{ color: '#0a2342', fontWeight: 700, fontSize: '1.55rem', marginBottom: '1.2rem' }}>Más flexibilidad</div>
              <div style={{ fontSize: '3.3rem', color: '#0a2342', marginBottom: '1.2rem' }}>🚙</div>
              <div style={{ fontSize: '1.75rem', fontWeight: 700, color: '#0a2342', marginBottom: '0.7rem' }}>Renting 12 meses</div>
              <div style={{ color: '#0a2342', fontSize: '1.18rem', marginBottom: '2.1rem', textAlign: 'center' }}>Después podrás continuar con tu REVEL mes a mes sin compromiso</div>
              <button style={{ background: '#0a2342', color: '#fff', border: 'none', borderRadius: '0.9rem', fontWeight: 700, fontSize: '1.18rem', padding: '1.2rem 0', width: '100%', marginTop: 'auto', cursor: 'pointer', boxShadow: '0 2px 12px #8ad0e622' }}>Quiero un renting a 12 meses ›</button>
            </motion.div>
          </div>
        </section>

        {/* Separate section for 'Todo Incluido en la Cuota' roadmap */}
        <section className="roadmap-section" style={{ margin: '80px 0 120px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'none' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, letterSpacing: 2, color: '#222', marginBottom: 48, fontSize: 22, textTransform: 'uppercase' }}>
            TODO INCLUIDO EN LA CUOTA
          </h2>
          <div
            style={{
              position: 'relative',
              width: '100vw',
              maxWidth: '100vw',
              minWidth: 320,
              margin: '0 auto',
              height: window.innerWidth <= 700 ? 1200 : 900,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg
              width={window.innerWidth <= 700 ? window.innerWidth : 900}
              height={window.innerWidth <= 700 ? 1200 : 900}
              viewBox={`0 0 ${window.innerWidth <= 700 ? window.innerWidth : 900} ${window.innerWidth <= 700 ? 1200 : 900}`}
              style={{ position: 'absolute', left: 0, top: 0, zIndex: 1, pointerEvents: 'none' }}
            >
              <defs>
                <linearGradient id="road" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#444" />
                  <stop offset="100%" stopColor="#888" />
                </linearGradient>
              </defs>
              {(() => {
                const roadmapTexts = [
                      'Coche nuevo a estrenar',
                      'Seguro a todo riesgo',
                      'Asistencia en la carretera',
                      '15.000 km al año + 1.000 km de regalo',
                      'Coche de sustitución',
                      'Impuestos',
                      'Neumáticos',
                      'Averías y reparaciones',
                      'Entrega a domicilio gratis',
                      'Mantenimiento',
                      'Conductor adicional gratis',
                    ];
                    const n = roadmapTexts.length;
                    const isMobile = window.innerWidth <= 700;
                    const svgWidth = isMobile ? window.innerWidth : 900;
                    const svgHeight = isMobile ? 1200 : 900;
                    const centerX = svgWidth / 2;
                    const spread = isMobile ? 0 : 260;
                    const points = Array.from({ length: n }, (_, i) => {
                      const y = 80 + i * ((svgHeight - 160) / (n - 1));
                      const x = centerX + (isMobile ? 0 : (i % 2 === 0 ? -spread : spread));
                      return [x, y];
                    });
                    // Línea central animada
                    let path = '';
                    if (points.length > 1) {
                      path = `M${points[0][0]},${points[0][1]}`;
                      for (let i = 1; i < points.length; i++) {
                        const [x1, y1] = points[i - 1];
                        const [x2, y2] = points[i];
                        const mx = (x1 + x2) / 2;
                        const my = (y1 + y2) / 2;
                        path += ` Q${x1},${my} ${x2},${y2}`;
                      }
                    }
                    return (
                      <>
                        <path d={path} stroke="url(#road)" strokeWidth="28" fill="none" strokeLinecap="round" opacity="0.18">
                          <animate attributeName="stroke-dashoffset" from="900" to="0" dur="2.5s" repeatCount="indefinite" />
                        </path>
                        <path d={path} stroke="#1e90ff" strokeWidth="7" fill="none" strokeLinecap="round" />
                        {/* Puntos animados */}
                        {points.map(([x, y], i) => (
                          <g key={i}>
                            <circle cx={x} cy={y} r="0">
                              <animate attributeName="r" from="0" to="26" dur="0.5s" begin={`${i * 0.13 + 0.2}s`} fill="freeze" />
                            return roadmapTexts.map((text, i) => {
                              const isMobile = window.innerWidth <= 700;
                              const svgWidth = isMobile ? window.innerWidth : 900;
                              const svgHeight = isMobile ? 1200 : 900;
                              const centerX = svgWidth / 2;
                              const y = 80 + i * ((svgHeight - 160) / (n - 1));
                              const x = centerX;
                              return (
                                <motion.div
                                  key={text}
                                  initial={{ opacity: 0, x: 0 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.7, delay: i * 0.13 + 0.2 }}
                                  viewport={{ once: true }}
                                  style={{
                                    position: 'absolute',
                                    left: x - (isMobile ? window.innerWidth * 0.4 : 130),
                                    top: y + (isMobile ? 30 : -18),
                                    zIndex: 2,
                                    minWidth: isMobile ? '80vw' : 210,
                                    maxWidth: isMobile ? '90vw' : 260,
                                    color: '#0a2342',
                                    fontWeight: 600,
                                    fontSize: 18,
                                    textAlign: 'center',
                                    background: 'linear-gradient(120deg, #fafdff 60%, #e6f7fa 100%)',
                                    borderRadius: 18,
                                    padding: '0.9em 1.3em',
                                    boxShadow: '0 4px 24px #1e90ff22',
                                    border: '1.5px solid #b6e0f7',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 12,
                                    letterSpacing: 0.2,
                                    fontFamily: 'Segoe UI',
                                  }}
                                >
                                  <span style={{ fontSize: 22, marginRight: 8, color: '#1e90ff', opacity: 0.8 }}>✔️</span>
                                  <span>{text}</span>
                                </motion.div>
                              );
                            });
                          top: y - 18,
                          zIndex: 2,
                          minWidth,
                          maxWidth,
                          color: '#0a2342',
                          fontWeight: 600,
                          fontSize: 18,
                          textAlign,
                          background: 'linear-gradient(120deg, #fafdff 60%, #e6f7fa 100%)',
                          borderRadius: 18,
                          padding: '0.9em 1.3em',
                          boxShadow: '0 4px 24px #1e90ff22',
                          border: '1.5px solid #b6e0f7',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 12,
                          letterSpacing: 0.2,
                          fontFamily: 'Segoe UI',
                        }}
                      >
                        <span style={{ fontSize: 22, marginRight: 8, color: '#1e90ff', opacity: 0.8 }}>✔️</span>
                        <span>{text}</span>
                      </motion.div>
                    );
                  });
                })()}
              </div>
            </section>
      </div>
      <FooterEnduran />
    </>
  );
}
