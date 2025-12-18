
import NuestrosVehiculosGrid from './NuestrosVehiculosGrid';
import FiltrosVehiculos from './FiltrosVehiculos';

import React, { useState } from 'react';
import FooterEnduran from './FooterEnduran';
import UserLoginModal from './UserLoginModal';
import logoEnduran from './assets/logo-enduran.jpg';
import { Link } from 'react-router-dom';
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

export default function NuestrosCoches() {
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
        <main style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', paddingTop: 120 }}>
          <h1 style={{ fontSize: 36, color: '#2d3b3a', fontWeight: 700, marginBottom: 32 }}>Nuestras Marcas</h1>
          <div className="brands-grid" style={{background:'transparent', boxShadow:'none', borderRadius:0, marginBottom:40}}>
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
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', width: '100%', justifyContent: 'center', gap: 64, marginBottom: 64 }}>
            <FiltrosVehiculos />
            <div style={{ flex: 1, minWidth: 0 }}>
              <NuestrosVehiculosGrid />
            </div>
          </div>
        </main>
      </div>
      <FooterEnduran />
    </>
  );
}
