import React from 'react';
import './section5.css';

const HeroVideoSection = () => {
  return (
    <section className="hero-video-section">
      <iframe
        className="bg-video"
        src="https://www.youtube.com/embed/_-AS5DtDeqs?autoplay=1&mute=1&loop=1&playlist=_-AS5DtDeqs&start=12"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="iPhone 17 Pro Max Video"
      ></iframe>
      <div className="hero-content">
        <h1>iPhone 17 Pro Max</h1>
        <p>Titanium. So strong. So light. So Pro Max.</p>
        <div className="btn-group">
          <button>Learn more</button>
          <button>Buy</button>
        </div>
      </div>
    </section>
  );
};

export default HeroVideoSection;
