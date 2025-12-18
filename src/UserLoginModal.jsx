import React, { useState } from 'react';
import './UserLoginModal.css';

import UserRegisterModal from './UserRegisterModal';

export default function UserLoginModal({ open, onClose, logo }) {
  const [registerOpen, setRegisterOpen] = useState(false);
  if (!open && !registerOpen) return null;
  return (
    <>
      <UserRegisterModal open={registerOpen} onClose={() => setRegisterOpen(false)} />
      {open && !registerOpen && (
        <div className="user-modal-overlay" onClick={onClose}>
          <div className="user-modal" onClick={e => e.stopPropagation()}>
            <button className="user-modal-close" onClick={onClose}>×</button>
            <div className="user-modal-content">
              <div className="user-modal-left">
                <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'1.2rem',width:'100%'}}>
                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://enduran.com" alt="QR Enduran" className="user-modal-qr-img" style={{width:'90px',height:'90px',borderRadius:'12px',background:'#fff',boxShadow:'0 2px 8px rgba(44,73,86,0.13)'}} />
                </div>
                <div className="user-modal-app-info">
                  <div className="user-modal-app-title">ENDURAN</div>
                  <div className="user-modal-app-desc">Tus favoritos, tus búsquedas y tus reservas donde quieras.<br/>Descarga nuestra APP y ten todo al alcance de tu mano</div>
                </div>
              </div>
              <div className="user-modal-right">
                <h2 className="user-modal-title">Inicia sesión</h2>
                <form className="user-modal-form">
                  <label className="user-modal-label">
                    <span>Email</span>
                    <input type="email" placeholder="Email *" required />
                  </label>
                  <label className="user-modal-label">
                    <span>Contraseña</span>
                    <input type="password" placeholder="Contraseña *" required />
                  </label>
                  <div className="user-modal-options">
                    <label className="user-modal-checkbox">
                      <input type="checkbox" /> No cerrar sesión
                    </label>
                  </div>
                  <button type="submit" className="user-modal-login-btn">Inicia sesión</button>
                </form>
                <button className="user-modal-secondary-btn" onClick={() => { setRegisterOpen(true); }}>¿Aún no tienes cuenta?</button>
                <button className="user-modal-link-btn">¿Has olvidado tu contraseña?</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
