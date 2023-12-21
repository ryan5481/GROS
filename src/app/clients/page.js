"use client"
import ClientsCarousel from "@/components/animation/clientsCarousel/clientsCarousel"
import ImageGalleryGrid from "@/components/grids/ImageGalleryGrid"

const Clients = () => {

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

    return (
        <>
        <div  className="mt-[100px]">
        <ClientsCarousel data={clientsList} />
        <ImageGalleryGrid data={clientsList} imageFolderName="clientImages" />
        </div>
        </>
    )
}

export default Clients