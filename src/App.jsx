import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Ofertas from './Ofertas';
import NuestrosCoches from './NuestrosCoches';
import CookieBanner from './CookieBanner';
import { useState } from 'react';

function App() {
  // Estado para saber si el splash está activo
  const [splashActive, setSplashActive] = useState(() => {
    const cookiesAccepted = localStorage.getItem('enduranCookiesAccepted');
    return !cookiesAccepted;
  });

  // Callback para que CookieBanner avise cuando termina el splash
  const handleSplashEnd = () => setSplashActive(false);

  return (
    <Router>
      {/* Splash y banner cookies gestionados dentro de CookieBanner */}
      <CookieBanner onSplashEnd={handleSplashEnd} />
      <div style={splashActive ? { filter: 'blur(8px)', transition: 'filter 0.5s' } : { filter: 'none', transition: 'filter 0.5s' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/nuestroscoches" element={<NuestrosCoches />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;