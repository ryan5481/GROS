import React, { useRef, useState } from 'react';
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectFade, Autoplay } from 'swiper/modules';

export default function App() {

    const data = [
        {
            name: "Ram Thapa",
            text: "Different types of testimonials will vary in length. Good content marketing professionals will use a selection of quotes, videos, blogs, and case study testimonials to build up a story of success.",
            image: "1.jpeg",
            position: "Chef",
            country: "Qatar"
        },
        {
            name: "Gita Thakuri",
            text: "However, if someone isn’t happy with you using their full name, they might consent to their initials being used. ",
            image: "2.jpeg",
            position: "Driver",
            country: "UAE"
        },
        {
            name: "Aviraj malla",
            text: "While most brands and websites offer a ‘customer testimonials’ page (perhaps with some variation on the title), this definitely should not be the only place you quote testimonials! ",
            image: "3.jpeg",
            position: "Project manager",
            country: "Oman"
        },
        {
            name: "Sita Hamal",
            text: "People expect testimonial pages to be little more than a sales pitch. And while everyone wants to see what previous customers think of your services, they don’t want to feel force-fed something that might not be as authentic as you think it is.",
            image: "4.jpeg",
            position: "Caretaker",
            country: "Malaysia"
        },
        {
            name: "Bikram Shrestha",
            text: "The very best testimonials should also take pride of place on your homepage and About-Us page, ready to catch the eyes of all your potential customers right from the offset.",
            image: "5.jpeg",
            position: "Waiter",
            country: "Qatar"
        },
        {
            name: "Raju lama",
            text: "If your customer is a business, it can be highly persuasive to offer to link back to their own website, which will also help boost their Google ranking.",
            image: "6.jpeg",
            position: "Health Assistant",
            country: "Japan"
        },
        {
            name: "Shyam Lal",
            text: "You would be forgiven to think that testimonials are all quotes or written reviews. However, there are loads of different types of testimonials you can use in your marketing.",
            image: "7.jpeg",
            position: "Receptopnist",
            country: "Saudi Arabia"
        },
        {
            name: "Sakar Ranjit",
            text: "These short stories are powerful, credible, and highly effective. Particularly when you add the customer’s name, company, and image. ",
            image: "8.jpeg",
            position: "Chef",
            country: "Qatar"
        }
    ]
    return (
        <>
            <div className='bg-white'>
                <div className='flex font-bold text-[30px] text-zinc-800 items-center justify-center pt-10' >What Others Say</div>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    spaceBetween={30}
                    effect={'fade'}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false
                    }}
                    modules={[EffectFade, Autoplay]}
                >
                    {data.map((item, index) => (
                        <SwiperSlide 
                        key={index}
                         >
                            <div className='relative flex flex-row items-start w-40 h-40'>
                                <Image
                                    src={`/uploads/testimonyImages/${item.image}`}
                                    height="5000"
                                    width="5000"
                                    alt={item.title}
                                    className='absolute w-full h-full rounded-md top-0'
                                />
                            </div>
                            <div className='flex flex-col items-start px-5 text-blue-500'>
                                <a className='font-bold text-[24px]' >{item.name}</a>
                                <a className='w-[600px] text-left text-blue-500'>{item.text}</a>
                                <div className='flex flex-row items-start gap-2 pt-1 text-red-500 font-bold text-[18px]'>
                                    <a >{item.position}</a>
                                    <a>|</a>
                                    <a >{item.country}</a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}
