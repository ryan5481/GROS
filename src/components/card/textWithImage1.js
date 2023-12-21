import Image from 'next/image'
import Link from "next/link"

const TextWithImage1 = () => {

    const messageFromDirector = {
        directorImage: "director.jpg",
        title: "Message From Director",
        text: "Global Reliance Overseas Services Pvt.Ltd. is the leading government approved recruitment agency (License No. 832/066/067) in Nepal. Since our establishment, we have been recognized as the premier recruitment agency and have developed excellent working relationship with major international and national companies in theMiddle-East and South East Asia. Global Reliance Overseas Services Pvt.Ltd. is the leading government approved recruitment agency (License No. 832/066/067) in Nepal. Since our establishment, we have been recognized as the premier recruitment agency and have developed excellent working relationship with major international and national companies in theMiddle-East and South East Asia",
    }

    const backgroundImageStyle = {
        backgroundImage: "url(/uploads/backgroundImages/background-1.jpeg)",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div className="grid grid-cols-2 gap-5 px-[200px] py-20 text-white justify-center" style={backgroundImageStyle} >
            <div className='relative h-[300px] w-[500px] '>
                <Image
                data-aos="fade-right"
                data-aos-once="true"
                data-aos-duration="1500"
                // data-aos-delay="200"
                    src={`/uploads/directorImage/director.jpg`}
                    height={200}
                    width={400}
                    alt='Director Image'
                    className='absolute rounded-md w-full h-full object-cover'
                />
            </div>
            <div className="flex flex-col">
                <div 
                data-aos="flip-up"
                data-aos-once="true"
                data-aos-duration="1500"
                data-aos-delay="100"
                className="font-bold text-[30px]"
                >
                    {messageFromDirector.title}
                </div>
                <div 
                data-aos="fade-left"
                data-aos-once="true"
                data-aos-duration="1500"
                data-aos-delay="200"
                className="text-[16px]"
                >
                    {messageFromDirector.text.split(' ').slice(0, 60).join(' ')}
                    <Link href={"/"} > ... Read more</Link>
                </div>
            </div>
        </div>
    )
}

export default TextWithImage1