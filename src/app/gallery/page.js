import { Image } from "@chakra-ui/next-js"

const { default: ImageGalleryGrid } = require("@/components/grids/ImageGalleryGrid")


const ImageGallery = () => {
    const galleryImageList = [
        { image: '1.jpeg', album: 'Qatar' },
        { image: '2.png', album: 'United Arab Emirates' },
        { image: '3.jpeg', album: 'Oman' },
        { image: '4.jpeg', album: 'Malaysia' },
        { image: '5.jpeg', album: 'Kuwait' },
        { image: '6.jpeg', album: 'Baharian' },
        { image: '7.jpeg', album: 'Qatar' },
        { image: '8.jpeg', album: 'United Arab Emirates' },
        { image: '9.jpeg', album: 'Oman' },
        { image: '10.jpeg', album: 'Malaysia' },
        { image: '11.jpeg', album: 'Kuwait' },
        { image: '12.jpeg', album: 'Baharian' },
        { image: '13.jpeg', album: 'Qatar' },
        { image: '14.jpeg', album: 'United Arab Emirates' },
        { image: '15.jpeg', album: 'Oman' },
        { image: '16.jpeg', album: 'Malaysia' },
        { image: '17.jpeg', album: 'Kuwait' },
        { image: '18.jpeg', album: 'Baharian' },
        { image: '19.jpeg', album: 'Qatar' },
        { image: '20.jpeg', album: 'United Arab Emirates' },
        { image: '21.jpeg', album: 'Oman' },
        { image: '22.jpeg', album: 'Malaysia' },
        { image: '23.jpeg', album: 'Kuwait' },
        { image: '24.jpeg', album: 'Baharian' },
        { image: '25.jpeg', album: 'Qatar' },
        { image: '26.jpeg', album: 'United Arab Emirates' },
        { image: '27.jpeg', album: 'Oman' },
        { image: '28.jpeg', album: 'Malaysia' },
        { image: '29.png', album: 'Kuwait' },
        { image: '30.png', album: 'Baharian' },
        { image: '31.png', album: 'Qatar' },
        { image: '32.jpeg', album: 'United Arab Emirates' },
        { image: '33.jpeg', album: 'Oman' },
        { image: '34.jpeg', album: 'Malaysia' },
        { image: '35.jpeg', album: 'Kuwait' },
        { image: '36.jpeg', album: 'Baharian' },
        { image: '37.jpeg', album: 'Qatar' },
        { image: '38.jpeg', album: 'United Arab Emirates' },
        { image: '39.jpeg', album: 'Oman' },
        { image: '40.jpeg', album: 'Malaysia' },
        { image: '41.jpeg', album: 'Kuwait' },
        { image: '42.jpeg', album: 'Baharian' },
        { image: '43.jpeg', album: 'Qatar' },
        { image: '44.jpeg', album: 'United Arab Emirates' },
        { image: '45.jpeg', album: 'Kathmandu' },
        { image: '46.jpeg', album: 'Malaysia' },
        { image: '47.jpeg', album: 'Kuwait' },
        { image: '48.jpeg', album: 'Baharian' },
        { image: '49.jpeg', album: 'Qatar' },
        { image: '50.jpeg', album: 'United Arab Emirates' },
        { image: '51.jpeg', album: 'Oman' },
        { image: '52.jpeg', album: 'Malaysia' },
        { image: '53.jpeg', album: 'Kuwait' },
        { image: '54.jpeg', album: 'Baharian' },
        { image: '55.jpeg', album: 'Qatar' },
        { image: '56.jpeg', album: 'United Arab Emirates' }
    ]

    return(
        <div  className="mt-[100px]">
        <ImageGalleryGrid data={galleryImageList} imageFolderName="galleryImages" galleryTitle="Photo Gallery" />
        </div>
    )
}

export default ImageGallery