import React, { useRef, useState } from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import Card from "./Card";

export default function App() {
  return (
    <>
      <div className="flex justify-center">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="flex flex-col items-center ">
            <h2 className="text-3xl">Gatau</h2>
            <Card Content={<img src="/zoom.png" width={800} />} />
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center ">
            <h2 className="text-3xl">Gatau</h2>
            <Card Content={<img src="/zoom.png" width={800} />} />
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center ">
            <h2 className="text-3xl">Gatau</h2>
            <Card Content={<img src="/zoom.png" width={800} />} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
