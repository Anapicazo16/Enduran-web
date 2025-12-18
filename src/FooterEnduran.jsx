import React from 'react';
import './FooterEnduran.css';

export default function FooterEnduran() {
  return (
    <footer className="footer-enduran">
      <div className="footer-main">
        <div className="footer-cols">
          <div className="footer-col">
            <div className="footer-col-title">RENTING PARA PARTICULARES</div>
            <a href="#">¿Qué es renting para particulares?</a>
            <a href="#">Renting de coches eléctricos</a>
            <a href="#">Renting de coches etiqueta CERO</a>
            <a href="#">Renting de coches familiares</a>
            <a href="#">Renting de coches urbanos</a>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">COMPAÑÍA</div>
            <a href="#">Sobre nosotros</a>
            <a href="#">Blog</a>
            <a href="#">Prensa</a>
            <a href="#">Afiliados</a>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">SERVICIO</div>
            <a href="#">¿Cómo funciona?</a>
            <a href="#">Opiniones</a>
            <a href="#">App ENDURAN</a>
            <a href="#">Invita a un amigo</a>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">DÓNDE ESTAMOS</div>
            <a href="#">Madrid</a>
            <a href="#">Barcelona</a>
            <a href="#">Bilbao</a>
            <a href="#">Valencia</a>
            <a href="#">Sevilla</a>
            <a href="#">Málaga</a>
            <a href="#">Zaragoza</a>
            <a href="#">Ver todos &rsaquo;</a>
          </div>
        </div>
        <div className="footer-cta">
          <div className="footer-cta-title">Tu nuevo coche con ENDURAN.</div>
          <div className="footer-cta-desc">Contrátalo online en unos minutos.</div>
          <button className="footer-cta-btn">Encuentra tu coche &rsaquo;</button>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-links">
          <a href="#">Política de cookies</a>
          <a href="#">Política de privacidad</a>
          <a href="#">Términos de uso</a>
          <a href="#">Aviso legal</a>
        </div>
        <div className="footer-bottom-apps">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg" alt="App Store" className="footer-app-icon" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="footer-app-icon" />
        </div>
        <div className="footer-bottom-social">
          <a href="#" aria-label="Instagram">📷</a>
          <a href="#" aria-label="Facebook">👍</a>
          <a href="#" aria-label="LinkedIn">💼</a>
          <a href="#" aria-label="Email">✉️</a>
          <span className="footer-bottom-phone">+34 911 673 361</span>
          <span className="footer-bottom-email">ventas@enduran.com</span>
        </div>
        <div className="footer-bottom-copy">© 2025 Enduran Renting S.L.</div>
      </div>
    </footer>
  );
}
