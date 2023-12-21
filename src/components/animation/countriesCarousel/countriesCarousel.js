"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';


export default function CountriesCarousel() {

  const images = [
    {
      carouselImage: "japan.png"
    },
    {
      carouselImage: "malaysia.jpg"
    },
    {
      carouselImage: "oman.jpg"
    },
    {
      carouselImage: "qatar.jpg"
    },
    {
      carouselImage: "uae.jpg"
    },
    {
      carouselImage: "korea.jpg"
    }
  ];
  return (
    <div className='p-20 px-30 bg-slate-900' >
      <div className={'flex item-center justify-center p-10 text-slate-50 font-bold text-[30px]'} >
        Countries We Serve
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={50}
        speed={1500}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className={"mySwiper"}
      >
        {images.map((photo, index) => (
          <SwiperSlide 
            key={index}
            className='relative w-[300px] h-[150px]'
            >
              {/* <div className={`absolute w-full h-full object-fill`} > */}
              <Image
                src={`/uploads/countryFlags/${photo.carouselImage}`}
                height="5000"
                width="5000"
                // objectFit='cover'
                alt={photo.alternativeText}
                // style={{ width: "full" }}
                className='absoulte w-full h-full object-fill '
              />
              {/* </div> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
