'use client'
import Image from 'next/image'
import React, { useState } from 'react';

const ImageGalleryGrid = ({ data, imageFolderName, galleryTitle }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const openModal = (image) => {
        setSelectedImage(image);
        document.getElementById('default-modal').classList.remove('hidden');
    };

    const closeModal = () => {
        setSelectedImage(null);
        document.getElementById('default-modal').classList.add('hidden');
    };

    //Create an array for each unique 'album' key
    const uniqueAlbums = [...new Set(data.map(item => item.album))];
    const albumArrays = {};
    // const sectionRefs = {};

    uniqueAlbums.forEach(album => {
        const key = album.toLowerCase();
        albumArrays[key] = data.filter(item => item.album === album);
        // sectionRefs[key] = useRef();
    });

    // const scrollToAlbum = (key) => {
    //     sectionRefs[key].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // };

    return (<>
        <div className='flex flex-col w-full pb-10 bg-white items-center justify-center'>
            {galleryTitle && <div className="flex fontweight-bold font-bold justify-center text-black bg-white text-[40px] py-5">
                {galleryTitle}
            </div>}
            {/* <div className="flex flex-row gap-10 text-blue-500 bg-white text-[16px] py-5">
                {Object.keys(albumArrays).map(key => (
                    <button
                        className='hover:text-red-500 hover:bg-zinc-100 p-1 px-3 rounded-md cursor-pointer'
                        onClick={() => scrollToAlbum(key)}
                        key={key}
                    >
                        {key.replace(/\b\w/g, match => match.toUpperCase())}
                    </button>
                ))}
            </div> */}
            {Object.keys(albumArrays).map(key => (
                <div
                    className='mb-10'
                    key={key}
                >
                    <div className="flex font-bold justify-center text-red-500 bg-white text-[24px] py-5"
                        // ref={sectionRefs[key]}
                    >
                        {key.replace(/\b\w/g, match => match.toUpperCase())}
                    </div>
                    <div className='grid grid-cols-5 w-full gap-5 items-center justify-center'>
                        {albumArrays[key].map((item, index) => (
                            <div class="relative w-[250px] h-[200px] text-black shadow-lg rounded-md"
                                key={item.image}
                                onClick={() => openModal(item)}
                                className='font-bold text-blue-500'
                                data-aos="fade-up"
                                data-aos-once="true"
                                data-aos-duration="800"
                                data-aos-delay={index}
                            >
                                <Image
                                    src={`/uploads/${imageFolderName}/${item.image}`}
                                    height="5000"
                                    width="5000"
                                    alt={`${item.album} Image`}
                                    className='absolute w-full h-full rounded-md object-cover top-0'
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        {/* MODAL IMAGE */}
        <div id="default-modal" tabIndex="-1" aria-hidden="true" className={`hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen bg-gray-800 bg-opacity-50`} onClick={closeModal}>
            <div className="relative p-4 max-w-screen-lg max-h-screen">
                {selectedImage && selectedImage.image && (
                    <div className="relative bg-white h-[600px] rounded-lg shadow dark:bg-gray-700">
                        <Image
                            src={`/uploads/${imageFolderName}/${selectedImage.image}`}
                            alt={`${selectedImage.album} Image`}
                            width={500}
                            height={500}
                            className="w-full h-full rounded-lg object-cover object-center"
                        />
                    </div>)}
            </div>
        </div>
    </>
    );
}

export default ImageGalleryGrid