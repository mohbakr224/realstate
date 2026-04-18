import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../index.css";
export default function SliderCards({ data }) {
  return (
    <Swiper spaceBetween={10} slidesPerView={3.2}>
      {data.map((card) => (
        <SwiperSlide key={card.id}>
          <img
            src={card.imageSource}
            alt={card.altText}
            className="w-[442px] h h-[259px] object-cover rounded-[16px] shadow-[0px_4px_4px_0px_#00000040] "
          />
          <h1 className="text-start font-bold mt-2">{card.title}</h1>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}