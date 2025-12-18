
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


export default function CookieBanner({ onSplashEnd }) {
  const [showSplash, setShowSplash] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // SIEMPRE mostrar splash y banner al entrar o recargar (modo desarrollo/pruebas)
    setShowSplash(true);
    setShowBanner(true);
    // Si quieres volver al modo "solo si no aceptó/rechazó", descomenta abajo:
    // const cookiesAccepted = localStorage.getItem('enduranCookiesAccepted');
    // if (!cookiesAccepted) {
    //   setShowSplash(true);
    //   setShowBanner(true);
    // }
  }, []);

  const closeAllAndGoHome = () => {
    setShowSplash(false);
    setShowBanner(false);
    setTimeout(() => {
      if (onSplashEnd) onSplashEnd();
      navigate('/');
    }, 400); // Espera animación
  };

  const handleAccept = () => {
    localStorage.setItem('enduranCookiesAccepted', 'true');
    closeAllAndGoHome();
  };
  const handleReject = () => {
    localStorage.setItem('enduranCookiesAccepted', 'rejected');
    closeAllAndGoHome();
    // Aquí podrías añadir lógica para bloquear cookies
  };
  const handleConfig = () => setShowConfig(true);

  // Si ya aceptó/rechazó, no mostrar nada
  if (!showSplash && !showBanner) return null;

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.7 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(255,255,255,0.85)',
              zIndex: 10000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1.5 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              {/* SVG del logo Enduran Renting (solo letras y estrella, sin fondo) */}
              <svg width="400" height="180" viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Estrella más arriba */}
                <polygon points="200,0 204,14 218,14 206,22 210,36 200,27 190,36 194,22 182,14 196,14" fill="#3CA6A6" />
                <text x="50%" y="45%" textAnchor="middle" fontFamily="'Montserrat', Arial, sans-serif" fontWeight="bold" fontSize="56" fill="#23405A" letterSpacing="2">ENDURAN</text>
                <text x="50%" y="70%" textAnchor="middle" fontFamily="'Montserrat', Arial, sans-serif" fontWeight="500" fontSize="28" fill="#3CA6A6" letterSpacing="6">RENTING</text>
              </svg>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showBanner && (
          <motion.div
            key="banner"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="cookie-banner"
            style={{
              zIndex: 10001,
              position: 'fixed',
              left: 0,
              bottom: 0,
              width: '100vw',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div className="cookie-banner-content cookie-banner-fullcard">
              <h2 className="cookie-title cookie-title-full">Uso de Cookies.</h2>
              <div className="cookie-text cookie-text-full">
                Utilizamos cookies, incluidas de terceros, para fines analíticos y para mostrarle publicidad personalizada en base a un perfil elaborado a partir de sus hábitos de navegación. Al hacer clic en <b>"Aceptar todas"</b>, aceptas el uso de las cookies. Puedes retirar tu consentimiento en cualquier momento al hacer clic en <b>"Rechazar todas"</b>. Para obtener información detallada sobre el uso y la gestión de las cookies o cambiar tus preferencias haz clic en <b>"Personalizar"</b>. Puedes encontrar más información en nuestra <b><a href="#">Política de Cookies.</a></b>
              </div>
              <hr className="cookie-divider" />
              <div className="cookie-btn-group cookie-btn-group-full">
                <button className="cookie-config-btn cookie-btn-full" onClick={handleConfig}>
                  Personalizar
                </button>
                <button className="cookie-reject-btn cookie-btn-full" onClick={handleReject}>
                  Rechazar todas
                </button>
                <button className="cookie-accept-btn cookie-btn-full" onClick={handleAccept}>
                  Aceptar todas
                </button>
              </div>
            </div>
            {showConfig && (
              <div className="cookie-config-modal">
                <div className="cookie-config-content">
                  <h3>Configuración de cookies</h3>
                  <p>Aquí puedes personalizar qué cookies aceptas o rechazas.</p>
                  <button className="cookie-accept-btn" onClick={handleAccept}>Guardar y aceptar</button>
                  <button className="cookie-reject-btn" onClick={handleReject}>Rechazar todas</button>
                  <button className="cookie-config-btn" onClick={() => setShowConfig(false)}>Cancelar</button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
