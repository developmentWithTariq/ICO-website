import React, { useRef, useState } from "react";
import billBoard1 from './img/board1.jpg'
import billBoard2 from './img/board2.jpg'
import billBoard3 from './img/board3.jpg'
import billBoard4 from './img/board4.jpg'
import billBoard5 from './img/board5.jpg'
import billBoard6 from './img/board6.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./billBoards.css";

// import required modules
import { Pagination } from "swiper";

export default function BillBoards() {
  return (
    <>
      <Swiper id="billboards"
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src = {billBoard4} alt="bill board"/></SwiperSlide>
        <SwiperSlide><img src={billBoard2} alt="bill board"/></SwiperSlide>
        <SwiperSlide><img src={billBoard3} alt="bill board"/></SwiperSlide>
        <SwiperSlide><img src={billBoard4} alt="bill board"/></SwiperSlide>
        <SwiperSlide><img src={billBoard5} alt="bill board"/></SwiperSlide>
        <SwiperSlide><img src={billBoard6} alt="bill board"/></SwiperSlide>
        <SwiperSlide><img src={billBoard3} alt="bill board"/></SwiperSlide>
        <SwiperSlide><img src={billBoard2} alt="bill board"/></SwiperSlide>
        <SwiperSlide><img src={billBoard4} alt="bill board"/></SwiperSlide>
      </Swiper>
    </>
  );
}
