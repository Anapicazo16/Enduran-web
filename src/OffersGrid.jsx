import React from 'react';
import './OffersGrid.css';

export const offers = [
  {
    title: 'Peugeot 208',
    price: '296€/mes',
    oldPrice: '362€',
    year: '2025',
    fuel: 'gasoline',
    transmission: 'manual',
    image: 'https://cdn.pixabay.com/photo/2017/01/06/19/15/bmw-1957037_1280.jpg',
    badge: 'OFERTÓN FIESTAS',
    gift: true,
  },
  {
    title: 'Opel Corsa',
    price: '304€/mes',
    oldPrice: '366€',
    year: '2024',
    fuel: 'gasoline',
    transmission: 'manual',
    image: 'https://cdn.pixabay.com/photo/2016/12/27/15/57/toyota-1934258_1280.jpg',
    badge: 'OFERTÓN FIESTAS',
    gift: true,
  },
  {
    title: 'Renault Captur',
    price: '340€/mes',
    oldPrice: '375€',
    year: '2025',
    fuel: 'gasoline',
    transmission: 'manual',
    image: 'https://cdn.pixabay.com/photo/2013/07/13/12/46/lexus-146429_1280.png',
    badge: 'OFERTÓN FIESTAS',
    gift: true,
  },
  {
    title: 'Kia XCeed',
    price: '382€/mes',
    oldPrice: '410€',
    year: '2025',
    fuel: 'gasoline',
    transmission: 'manual',
    image: 'https://cdn.pixabay.com/photo/2017/01/06/19/15/bmw-1957037_1280.jpg',
    badge: 'OFERTÓN FIESTAS',
    gift: true,
  },
  {
    title: 'Opel Mokka',
    price: '388€/mes',
    oldPrice: '460€',
    year: '2025',
    fuel: 'hybrid',
    transmission: 'automatic',
    image: 'https://cdn.pixabay.com/photo/2016/12/27/15/57/toyota-1934258_1280.jpg',
    badge: 'OFERTÓN FIESTAS',
    gift: true,
  },
  {
    title: 'Opel Frontera',
    price: '396€/mes',
    oldPrice: '425€',
    year: '2025',
    fuel: 'hybrid',
    transmission: 'automatic',
    image: 'https://cdn.pixabay.com/photo/2013/07/13/12/46/lexus-146429_1280.png',
    badge: 'OFERTÓN FIESTAS',
    gift: true,
  },
  {
    title: 'Mazda CX-5',
    price: '415€/mes',
    oldPrice: '480€',
    year: '2025',
    fuel: 'diesel',
    transmission: 'manual',
    image: 'https://cdn.pixabay.com/photo/2017/03/27/14/56/mazda-2178602_1280.jpg',
    badge: 'OFERTÓN FIESTAS',
    gift: true,
  },
  {
    title: 'Seat León',
    price: '299€/mes',
    oldPrice: '350€',
    year: '2024',
    fuel: 'gasoline',
    transmission: 'automatic',
    image: 'https://cdn.pixabay.com/photo/2016/11/29/09/32/auto-1868726_1281.jpg',
    badge: 'OFERTÓN FIESTAS',
    gift: true,
  },
];

export default function OffersGrid() {
  return (
    <section className="offers-section">
      <h2 className="offers-title">¡ESTAS FIESTAS, TU ENDURAN VIENE CON REGALO!</h2>
      <div className="offers-grid">
        {offers.map((offer, idx) => (
          <div className="offer-card" key={idx}>
            <div className="offer-card-badges">
              <span className="offer-badge">{offer.badge}</span>
              {offer.gift && <span className="offer-gift">REGALO 🎁</span>}
            </div>
            <img className="offer-img" src={offer.image} alt={offer.title} />
            <div className="offer-card-info">
              <span className="offer-new">Nuevo a estrenar</span>
              <div className="offer-model">{offer.title}</div>
              <div className="offer-details">{offer.transmission} · {offer.fuel} · {offer.year}</div>
              <div className="offer-price">
                <span>{offer.price}</span>
                <span className="offer-old">Antes {offer.oldPrice}</span>
              </div>
              <button className="offer-btn">¡Lo quiero!</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
