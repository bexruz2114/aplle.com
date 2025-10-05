import React from 'react';
import './section4.css';

const leftCards = [
  {
    title: 'Education',
    subtitle: 'Uplifting teachers uplifts us all.',
    button: 'Learn more',
    image: 'https://jooinn.com/images/education-61.png',
  },
  {
    title: 'Trade In',
    subtitle: 'Get up to $200–$700 in credit when you trade in iPhone 13 or higher.',
    button: 'Get your estimate',
    image: 'https://www.apple.com/v/home/bf/images/promos/iphone-tradein/iphone_tradein_promo__d5au3rkw5kuq_large.jpg',
  }
];

const rightCards = [
  {
    title: 'MacBook Air',
    subtitle: 'Sky blue color. Sky high performance with M4.',
    buttons: ['Learn more', 'Buy'],
    image: 'https://avatars.mds.yandex.net/i?id=4bb1bf945635ac14c35c1383d68199fa_l-9051244-images-thumbs&n=13',
  },
  {
    title: 'Apple Card',
    subtitle: 'Get up to 3% Daily Cash back with every purchase.',
    buttons: ['Learn more', 'Apply now'],
    image: 'https://www.apple.com/v/home/bf/images/promos/apple-card/tile__cauwwcyyn9hy_large.jpg',
  }
];

const AppleSection = () => {
  return (
    <div className="apple-section">
      <div className="column">
        {leftCards.map((card, index) => (
          <div
            key={index}
            className="card"
            style={{ backgroundImage: `url(${card.image})` }}
          >
            <div className="overlay">
              <h2>{card.title}</h2>
              <p>{card.subtitle}</p>
              <div className="buttons">
                {card.buttons ? (
                  card.buttons.map((btn, i) => <button key={i}>{btn}</button>)
                ) : (
                  <button>{card.button}</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="column">
        {rightCards.map((card, index) => (
          <div
            key={index}
            className="card"
            style={{ backgroundImage: `url(${card.image})` }}
          >
            <div className="overlay">
              <h2>{card.title}</h2>
              <p>{card.subtitle}</p>
              <div className="buttons">
                {card.buttons ? (
                  card.buttons.map((btn, i) => <button key={i}>{btn}</button>)
                ) : (
                  <button>{card.button}</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppleSection;
