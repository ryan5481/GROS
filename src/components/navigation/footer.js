import Image from 'next/image'
import { FaFacebook, FaTwitter, FaViber, FaWhatsapp, FaPhoneSquareAlt } from 'react-icons/fa';
import { TbMailFilled } from 'react-icons/tb';



const Footer = () => {

    return (
        <>
            <div className="flex flex-row items-center justify-center gap-10 text-white text-22 h-[250px] py-20 px-40 bg-slate-900">
                {/* LOGO */}
                <div className={`flex flex-col w-full gap-10 text-[16px]`}>
                    <div className={`flex flex-row w-full gap-5 text-[16px]`} >
                        <div className="relative justify-center items-center w-[60px] h-[60px]">
                            <Image
                                src={`/uploads/logo/gros-logo.png`}
                                width={"250"}
                                height={"250"}
                                alt="logo"
                                className='absolute'
                            />
                        </div>
                        <div className="flex flex-col gap-0 font-bold justify-between group" >
                            <a>Global Reliable</a>
                            <a>Overseas Services Pvt Ltd</a>
                        </div>

                    </div>
                    <div className="flex flex-col gap-0 justify-between group" >
                        <a>PO Box:21845 Samakhusi-29, Kathmandu, Nepal</a>
                    </div>
                </div>
                {/* CONTACT */}
                <div className='flex flex-col gap-5 w-full'>

                    <div>
                        <div className='font-bold mb-5' >Contact Us</div>

                        <div className='flex flex-row gap-1 hover:text-blue-400 cursor-pointer' href="https://linkedin.com">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className=" hover:text-blue-700">
                                <FaPhoneSquareAlt size={24} />
                            </a>
                            <a>+977 01 4360523 / 4357731</a>
                        </div>

                        <div className='flex flex-row gap-1 hover:text-blue-400 cursor-pointer' href="https://linkedin.com">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className=" hover:text-blue-400">
                                <TbMailFilled size={24} />
                            </a>
                            <a>greliance010@gmail.com</a>
                        </div>
                    </div>

                    <div className="flex space-x-4">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className=" hover:text-blue-400">
                            <FaFacebook size={24} />
                        </a>

                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className=" hover:text-blue-400">
                            <FaTwitter size={24} />
                        </a>

                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                            <FaViber size={24} />
                        </a>

                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                            <FaWhatsapp size={24} />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col text-[16px] w-full">
                    <a href="https://linkedin.com" className=" hover:text-blue-400">About Us</a>
                    <a href="https://linkedin.com" className=" hover:text-blue-400">Company Certificates</a>
                    <a href="https://linkedin.com" className=" hover:text-blue-400">Jobs</a>
                    <a href="https://linkedin.com" className=" hover:text-blue-400">Recruitment Proceduew</a>
                    <a href="https://linkedin.com" className=" hover:text-blue-400">Documents Required</a>
                    <a href="https://linkedin.com" className=" hover:text-blue-400">Certificates</a>
                </div>
                <div >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.5194952990173!2d85.3408142!3d27.701242299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1983ee163391%3A0x8cbc1871ad79125f!2sSKYWAY%20MANAGEMENT%20PVT.%20LTD.!5e0!3m2!1sen!2snp!4v1695806262831!5m2!1sen!2snp"
                        width="full"
                        height="200"
                        style={{ border: 0, borderRadius: "5px" }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </>
    )
}

export default Footer