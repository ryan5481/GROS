import Image from 'next/image'
import { ImCheckmark } from "react-icons/im";



const ImageTextList = ({ data }) => {


    //Take the value of key value pairs that has "text" as keys to create an array for mapping
    const bulletPoints = Object.keys(data)
        .filter(key => key.includes('text'))
        .map(key => data[key]);


    return (
        <>
            <div className="flex flex-col bg-blue-500">
                <div className='w-full' >
                    <Image
                        src={`/uploads/aboutUsImages/stock.jpeg`}
                        alt={data?.title}
                        height="400"
                        width="400"
                        className='w-full h-96 object-cover'
                    />
                </div>

                <div className='px-40 py-10 items-start'>
                    <div className="flex flex-col text-[40px] font-bold text-white py-[20px] px-[100px] items-center justify-center">
                        {data?.title}
                    </div>
                    <div className="flex flex-col text-[18px] text-white py-[20px] px-[100px] items-center justify-center">
                        {data?.paragraph}
                    </div>
                    <div className='flex flex-col ' >
                        {
                            bulletPoints.map((item, index) => (
                                <div
                                key={index}
                                 className="flex flex-row items-start justify-start gap-2 ">
                                    <div className='flex items-center justify-center' >
                                        <ImCheckmark className='text-green-400 text-[25px]' />
                                    </div>
                                    <a className='text-white py-[10px] px-[5px] align-left'>{item}</a>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex flex-col text-[40px] font-bold text-white py-[20px] px-[100px] items-center justify-center">
                        {data?.title2}
                    </div>
                    <div className="flex flex-col text-[18px] text-white py-[20px] px-[100px] items-center justify-center">
                        {data?.paragraph2}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageTextList