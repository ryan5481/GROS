"use client"
import { useState } from 'react';
import Image from 'next/image'


const ImageGrid = ({ data, imageFolderName, galleryTitle }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
        document.getElementById('default-modal').classList.remove('hidden');
    };

    const closeModal = () => {
        setSelectedImage(null);
        document.getElementById('default-modal').classList.add('hidden');
    };

    return (
        <>
            <div className='w-full bg-blue-500 p-5' >
                <div className="flex fontweight-bold font-bold justify-center text-white text-[30px] py-5">
                    {galleryTitle}
                </div>
                <div className="grid grid-cols-3 gap-5 p-10" >
                    {data.map((item, index) =>
                    (
                        <div
                            class="mx-auto px-5"
                            key={index}
                        >
                            <div class="relative h-[400px] w-[350px] overflow-hidden items-center justify-center cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md"
                                onClick={() => openModal(item.image)}
                            >
                                <Image
                                    src={`/uploads/${imageFolderName}/${item.image}`}
                                    alt={item.title}
                                    height="5000"
                                    width="5000"
                                    className='absolute w-full h-full rounded-md object-cover'
                                    data-modal-target="default-modal" data-modal-toggle="default-modal"
                                    type="button"
                                />
                                <p class="my-4 pl-4 font-bold text-gray-500">{item?.title}</p>
                            </div>
                        </div>

                    ))}
                </div>
                {/* MODAL */}
                <div id="default-modal" tabIndex="-1" aria-hidden="true" className={`hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen bg-gray-800 bg-opacity-50`} onClick={closeModal}>
                    <div className="relative p-4 max-w-screen-lg max-h-screen">
                        <div className="relative bg-white rounded-lg h-[600px] shadow dark:bg-gray-700">
                            {selectedImage && (
                                <Image
                                    src={`/uploads/${imageFolderName}/${selectedImage}`}
                                    alt="Selected Image"
                                    width={500}
                                    height={500}
                                    className="w-full h-full rounded-lg object-cover object-center"
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageGrid