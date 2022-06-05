import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./slider.styles.css";
import { Navigation } from "swiper";
function Slider({ images }) {
  // console.log(item);
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper2"
      >
        {images.map((e, i) => (
          <SwiperSlide key={i}>
            <img src={e} alt="im" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Slider;
