"use client"
import { useEffect } from 'react'
import CarouselSlider from '@/components/animation/carousel/carouselSlider'
import Aos from 'aos';
import 'aos/dist/aos.css';
import TextCard1 from '@/components/card/textCard1';
import TextWithImage1 from '@/components/card/textWithImage1';
import CountriesCarousel from '@/components/animation/countriesCarousel/countriesCarousel';
import JobCategories from '@/components/homePageElements/jobCategories';
import ClientsCoverflow from '@/components/animation/clientsCarousel/clientsCarousel';
import Statistics from '@/components/homePageElements/statistics'
import TestimonyCarousel from '@/components/animation/testimonyCarousel/testimonyCarousel';
import TeamImageGallery from '@/components/imageGallery/teamImageGallery';
import ImageGrid from '@/components/grids/imageGrid';

export default function Home() {
  useEffect(() => {
    Aos.init({
    });
  }, []);

  const jobCategories = [
    {
        image: "construction.jpg",
        title: "Construction"
    },
    {
        image: "hotel.jpg",
        title: "Hotel"
    },
    {
        image: "oil.jpg",
        title: "Oil & Refinery"
    },
    {
        image: "security.jpg",
        title: "Security"
    },
    {
        image: "supermarket.png",
        title: "Supermarket"
    },
    {
        image: "supplier.jpg",
        title: "Transportation"
    },
    {
        image: "construction.jpg",
        title: "Construction"
    },
    {
        image: "hotel.jpg",
        title: "Hotel"
    },
    {
        image: "oil.jpg",
        title: "Oil & Refinery"
    },
    {
        image: "security.jpg",
        title: "Security"
    },
    {
        image: "supermarket.png",
        title: "Supermarket"
    },
    {
        image: "supplier.jpg",
        title: "Transportation"
    }
]

const newspaperAdsList = [
    {
        image: "1.jpeg",
    },
    {
        image: "2.jpeg",
    },
    {
        image: "3.png",
    }
]

const clientsList = [
    {
      image: "1.jpeg",
      name: "ABC Corp",
      album: "United Arab Emirates"
    },
    {
      image: "2.jpeg",
      name: "ABC Corp",
      album: "Qatar"
    },
    {
      image: "3.jpeg",
      name: "ABC Corp",
      album: "Oman"
    },
    {
      image: "4.jpeg",
      name: "ABC Corp",
      album: "Kuwait"
    },
    {
      image: "5.jpeg",
      name: "ABC Corp",
      album: "Qatar"
    },
    {
      image: "6.jpeg",
      name: "ABC Corp",
      album: "Oman"
    },
    {
      image: "7.jpeg",
      name: "ABC Corp",
      album: "United Arab Emirates"
    },
    {
      image: "8.jpeg",
      name: "ABC Corp",
      album: "Qatar"
    },
    {
      image: "9.jpeg",
      name: "ABC Corp",
      album: "Kuwait"
    },
    {
      image: "10.jpeg",
      name: "ABC Corp",
      album: "Oman"
    },
    {
      image: "11.jpeg",
      name: "ABC Corp",
      album: "Qatar"
    },
    {
      image: "12.jpeg",
      name: "ABC Corp",
      album: "Baharian"
    }
  ]

  const companyIntroduction = {
    title: "Global Reliance Overseas Pvt. Ltd.",
    text: "Global Reliance Overseas Services  Pvt.Ltd. is the leading government approved recruitment agency (License No. 832/066/067) in Nepal. Since our establishment, we have been recognized as the premier recruitment agency and have developed excellent working relationship with major international and national companies in theMiddle-East and South East Asia. For our high level of professional services we have been internationally certified. We maintain a huge data bank of different profession's candidates CVs and keep continuous link with the best available personnel through regional representatives, media ads, various technical institutions, Universities and Colleges. We undertake different tests and interviews on each candidate's qualification, work experience and capabilities. Those who are well qualified and meet the job descriptions are considered for recommendation to the clients. We operate with fully equipped business center with qualified and experienced management team to provide professional, efficient and reliable services to our clients. We pride ourselves on the quality level of services that we provide to both candidates and clients.",
}

  return (
    <main>
      <CarouselSlider />
      <TextCard1 data={companyIntroduction} />
      <TextWithImage1 />
      <TeamImageGallery />
      <CountriesCarousel />
      <JobCategories data={jobCategories.slice(0,6)} location='homePage'  />
      <ImageGrid data={newspaperAdsList} imageFolderName="newspaperAdImages" galleryTitle="Newspaper Ads" />
      <TestimonyCarousel />
      <ClientsCoverflow data={clientsList} />
      <Statistics />
    </main>
  )
}
