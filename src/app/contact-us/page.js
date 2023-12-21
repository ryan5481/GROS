import { FaFacebook, FaTwitter, FaViber, FaWhatsapp, FaPhoneSquareAlt } from 'react-icons/fa';
import { FaLocationDot, FaFilePdf } from "react-icons/fa6";
import { TbMailFilled } from 'react-icons/tb';

const AboutUs = () => {


    return (
        <>
            <div className="flex flex-center w-full p-20 mt-[100px] bg-white text-white items-center justify-center" >
                {/* ADDRESS AND SOCIALS */}
                <div className="grid grid-cols-3 items-center justify-center w-[1200px] h-full rounded-md gap-5">
                    <div className='flex flex-col w-full h-full p-10 bg-blue-500 rounded-md shadow-xl'>
                        <div className='flex font-bold pb-5 text-[20px] items-center justify-center' >Contact Us</div>

                        <div className='flex flex-row gap-1 mb-5 hover:text-red-500 cursor-pointer' href="https://linkedin.com">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className=" hover:text-blue-700">
                                <FaPhoneSquareAlt size={24} />
                            </a>
                            <a>+977 01 4360523 / 4357731</a>
                        </div>

                        <div className='flex flex-row gap-1 mb-5 hover:text-red-500 cursor-pointer' href="https://linkedin.com">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className=" hover:text-blue-400">
                                <TbMailFilled size={24} />
                            </a>
                            <a>greliance010@gmail.com</a>
                        </div>
                        <div className='flex flex-row gap-1 mb-5 hover:text-red-500 cursor-pointer' href="https://linkedin.com">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className=" hover:text-blue-400">
                                <FaLocationDot size={24} />
                            </a>
                            <a>PO Box:21845 Samakhusi-29, Kathmandu, Nepal</a>
                        </div>
                        <div className='flex flex-row gap-1 mb-5 hover:text-red-500 cursor-pointer' href="https://linkedin.com">
                            <a href="/uploads/brochurePdf/1.pdf" target="_blank" rel="noopener noreferrer" className=" hover:text-blue-400">
                                <FaFilePdf size={24} />
                            </a>
                            <a href="/uploads/brochurePdf/1.pdf" target='_black' rel="noopener noreferrer" >Download Brochure</a>
                        </div>
                        <div className="flex space-x-10 pt-5 items-center justify-center">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className=" hover:text-red-500">
                                <FaFacebook size={24} />
                            </a>

                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className=" hover:text-red-500">
                                <FaTwitter size={24} />
                            </a>

                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
                                <FaViber size={24} />
                            </a>

                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
                                <FaWhatsapp size={24} />
                            </a>
                        </div>
                    </div>
                    <div className='flex flex-col w-full p-10 text-[16px] rounded-md bg-blue-500 text-white shadow-xl'>
                        <div className='flex items-center justify-center font-bold text-[20px] pb-5'>Send a message</div>
                        <div className='flex flex-col space-y-5'>
                            <input
                                className='rounded-md h-10 text-blue-500 px-3'
                                placeholder='Name'
                                required
                            />
                            <input className='rounded-md h-10 text-blue-500 px-3'
                                placeholder='Email'
                                required
                            />
                            <textarea className='rounded-md h-full text-blue-500 p-3'
                                placeholder='Message'
                                required
                            />
                            <button className='bg-white w-full rounded-md h-10 text-blue-500 hover:bg-zinc-100 hover:text-red-500 font-bold'>Submit</button>
                        </div>
                    </div>
                    <div className='flex h-full rounded-md bg-blue-500 items-center justify-center shadow-xl' >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.5194952990173!2d85.3408142!3d27.701242299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1983ee163391%3A0x8cbc1871ad79125f!2sSKYWAY%20MANAGEMENT%20PVT.%20LTD.!5e0!3m2!1sen!2snp!4v1695806262831!5m2!1sen!2snp"
                            width="full"
                            height="full"
                            style={{ border: 0, borderRadius: "5px" }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                            className='h-full w-full'
                        ></iframe>
                    </div>
                </div>


            </div>
        </>
    )
}

export default AboutUs