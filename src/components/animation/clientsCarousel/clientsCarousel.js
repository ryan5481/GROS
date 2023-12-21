import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules

import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import Link from 'next/link';

export default function ClientsCoverflow({ data }) {


  return (
    <>
      <div className={'flex item-center justify-center px-10 pt-5 text-white bg-slate-900 font-bold text-[30px]'} >
        Our Clients
      </div>
      <div className='px-[300px] bg-slate-900' >
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'3'}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false
          }}
          pagination={false}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper px-300px"
        >
          {
            data.map((item, index) => (
              <SwiperSlide key={index} >
                <Image
                  src={`/uploads/clientImages/${item.image}`}
                  height="5000"
                  width="5000"
                  alt={item.alternativeText}
                  className='absolute w-full h-full object-fill '
                />
              </SwiperSlide>
            ))
          }

        </Swiper>
        {/* <div className='flex itens-center justify-center p-5 bg-slate-900'>
          <Link 
          className=' text-blue-500 bg-white hover:bg-blue-500 hover:text-white font-bold p-1 px-3 rounded-md h-10' 
          href="/clients"
          >View All Clients</Link>
        </div> */}
      </div>
    </>
  );
}
