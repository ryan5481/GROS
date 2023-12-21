"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';


export default function CarouselSlider() {

  const images = [
    {
      carouselImage: "1.jpeg",
      title: "Find your dearm job."
    },
    {
      carouselImage: "2.jpg",
      title: "Work in 50 + fields."
    },
    {
      carouselImage: "3.jpg",
      title: "Apply with ease."
    }
  ];
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      speed={1500}
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className={"mySwiper relative mt-[100px]"}
    >
      {images.map((photo, index) => (
        <SwiperSlide
          key={index}>
          <div className={`relative w-full h-[600px]`} >
            <Image
              src={`/uploads/topCarouselImages/${photo.carouselImage}`}
              height="500"
              width="700"
              alt={photo.alternativeText}
              // style={{ width: "full" }}
              className='absolute w-full h-full object-cover'
              style={{ filter: 'brightness(0.7)' }}
            />
            <div
              className={`absolute maW-50% text-left z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[50px]`}
            >
              <h1
                data-aos="zoom-out"
                data-aos-once="true"
                data-aos-duration="800"
              >
                {photo.title}
              </h1>
            </div>

          </div>

        </SwiperSlide>
      ))}
    </Swiper>
  );
}
