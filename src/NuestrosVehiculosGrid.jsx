import React from 'react';
import './OffersGrid.css';

// Puedes personalizar los vehículos aquí si lo deseas, por ahora se usa el mismo array
import { offers } from './OffersGrid';

export default function NuestrosVehiculosGrid() {
  return (
    <div className="offers-grid-container">
      <h2 className="offers-grid-title">Nuestros Vehículos</h2>
      <div className="offers-grid">
        {offers.map((offer, idx) => (
          <div className="offer-card" key={idx}>
            {offer.badge && <div className="offer-badge">{offer.badge}</div>}
            <img src={offer.image} alt={offer.title} className="offer-image" />
            <div className="offer-info">
              <h3 className="offer-title">{offer.title}</h3>
              <div className="offer-prices">
                <span className="offer-price">{offer.price}</span>
                <span className="offer-old-price">{offer.oldPrice}</span>
              </div>
              <div className="offer-details">
                <span>{offer.year}</span> · <span>{offer.fuel}</span> · <span>{offer.transmission}</span>
              </div>
              {offer.gift && <div className="offer-gift">🎁 Regalo seguro</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
