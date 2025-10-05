import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";

const products = [
  {
    name: "iPhone 17 Pro Max",
    desc: "Titanium frame, 6.7-inch OLED display, A18 Bionic chip.",
    image:
      "https://avatars.mds.yandex.net/i?id=2f787f2601e110d3012622a618ee9b22_l-16430162-images-thumbs&n=13",
  },
  {
    name: "iPhone 17 Air",
    desc: "Aluminum frame, 6.1-inch OLED display, A18 Bionic chip.",
    image:
      "https://avatars.mds.yandex.net/i?id=f77e95cdcb721820f26e6ea9ca89bd1e_l-16312836-images-thumbs&n=13",
  },
  {
    name: "iPhone 16 Pro",
    desc: "Stainless steel frame, 6.1-inch OLED display, A17 Bionic chip.",
    image:
      "https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/09/apple-iphone-16-pro-titanium-color-finishes.jpg",
  },
  {
    name: "iPhone SE",
    desc: "Compact design, 4.7-inch Retina display, A15 Bionic chip.",
    image:
      "https://img.ixbt.site/live/topics/preview/00/07/67/26/67e23e30c1.png",
  },
];

const Slider = () => {
  return (
    <section className="slider-section">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="mySwiper"
      >
        {products.map(({ name, desc, image }, index) => (
          <SwiperSlide
            key={index}
            style={{ backgroundImage: `url(${image})` }}
            className="slide"
          >
            <div className="slide-content">
              <h1>{name}</h1>
              <p>{desc}</p>
              <button>Buy Now</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
