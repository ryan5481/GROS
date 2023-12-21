import Image from 'next/image'
const TextCard1 = ({data, imageFolderName}) => {


    return (
        <div className="flex flex-col bg-blue-500 text-white pb-[50px] items-center justify-center">
            {data && data.image && 
            <div className='w-full' >
                <Image
                    src={`/uploads/${imageFolderName}/${data.image}`}
                    alt={data?.title}
                    height="400"
                    width="400"
                    className='w-full h-96 object-cover'
                />
            </div>}
            <div className='flex flex-col items-center justify-center px-[200px]'>

                <div
                    data-aos="flip-up"
                    data-aos-once="true"
                    data-aos-duration="1500"
                    data-aos-delay="100"
                    className="font-bold text-[30px] py-5 ">
                    {data.title}
                </div>
                <div
                    data-aos="fade-right"
                    data-aos-once="true"
                    data-aos-duration="1500"
                    data-aos-delay="200"
                    className="text-[16px]">
                    {data.text}
                </div>
            </div>
        </div>
    )
}

export default TextCard1