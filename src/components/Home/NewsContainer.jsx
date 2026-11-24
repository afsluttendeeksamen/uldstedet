"use client";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const NewsContainer = () => {
  return (
    <div>
      <h1>Nyheder</h1>
      <Swiper modules={[Navigation, Pagination]} spaceBetween={50} slidesPerView={3} navigation pagination={{ clickable: true }} onSwiper={(swiper) => console.log(swiper)} onSlideChange={() => console.log("slide change")}>
        <SwiperSlide>
          <Image src="/assets/test.png" width={1000} height={1000} alt="Logo" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/assets/test.png" width={1000} height={1000} alt="Logo" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/assets/test.png" width={1000} height={1000} alt="Logo" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/assets/test.png" width={1000} height={1000} alt="Logo" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default NewsContainer;
