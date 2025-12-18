import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './HeroSlider.css';

const offers = [
  {
    title: 'BMW X3',
    price: '875€/mes',
    oldPrice: '995€',
    description: '¡El más premium!',
    image: 'https://cdn.pixabay.com/photo/2017/01/06/19/15/bmw-1957037_1280.jpg',
    bg: 'linear-gradient(90deg, #0f3c5c 0%, #1ec6d9 100%)',
  },
  {
    title: 'Toyota C-HR',
    price: '495€/mes',
    oldPrice: '592€',
    description: '¡El SUV de Moda!',
    image: 'https://cdn.pixabay.com/photo/2016/12/27/15/57/toyota-1934258_1280.jpg',
    bg: 'linear-gradient(90deg, #0f3c5c 0%, #1ec6d9 100%)',
  },
  {
    title: 'Lexus LBX',
    price: '512€/mes',
    oldPrice: '596€',
    description: 'Oferta Navidad',
    image: 'https://cdn.pixabay.com/photo/2013/07/13/12/46/lexus-146429_1280.png',
    bg: 'linear-gradient(90deg, #0f3c5c 0%, #1ec6d9 100%)',
  },
];

export default function HeroSlider() {
  return (
    <section className="hero-slider-section">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="hero-swiper"
      >
        {offers.map((offer, idx) => (
          <SwiperSlide key={idx}>
            <div className="hero-slider-bg" style={{ background: offer.bg }}>
              <div className="hero-slider-content">
                <h2 className="hero-slider-title">TU ENDURAN CON REGALO</h2>
                <div className="hero-offer-card">
                  <div className="hero-offer-desc">🎁 {offer.description} 🎁</div>
                  <div className="hero-offer-model">{offer.title}</div>
                  <div className="hero-offer-price">
                    <span>{offer.price}</span>
                    <span className="hero-offer-old">Antes {offer.oldPrice}</span>
                  </div>
                  <button className="hero-offer-btn">¡Lo quiero!</button>
                </div>
                <img className="hero-offer-img" src={offer.image} alt={offer.title} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
