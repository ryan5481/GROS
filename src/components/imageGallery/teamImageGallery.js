import Image from 'next/image'

const TeamImageGallery = () => {

    const data = [
        {
            title: "President",
            name: "Rajesh Hamal",
            image: "1.jpeg",
        },
        {
            title: "Founder",
            name: "Nikhil Upreti",
            image: "2.jpeg",
        },
        {
            title: "Co-founder",
            name: "Sujan Chapagain",
            image: "3.jpeg",
        },
        {
            title: "Secretary",
            name: "Ram Kumar Shah",
            image: "4.jpeg",
        },
        {
            title: "Member",
            name: "Pushpa Thapa",
            image: "5.png",
        },
        {
            title: "Member",
            name: "Rita Rimal",
            image: "6.jpeg",
        },
        {
            title: "Member",
            name: "Ram Kumar Magar",
            image: "9.jpeg",
        },
        {
            title: "Member",
            name: "Sudeep Cheetri",
            image: "8.jpeg",
        },
        {
            title: "Member",
            name: "Bikash Moktan",
            image: "7.jpeg",
        }
    ]

    const onlyFirstItemFromDataArray = data.shift()


    const bgPath = "/uploads/teamImages/bg.jpg"

    return (
        <>
            <div className='flex flex-col w-full items-center justify-center p-5'
                style={{
                    backgroundImage: `url(/uploads/teamImages/bg.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: 'full',
                }}
            >
                <div className="flex fontweight-bold font-bold justify-center text-steel-800 text-[30px] pb-5"
                    data-aos="flip-down"
                    data-aos-once="true"
                    data-aos-duration="800"
                >
                    Our Team
                </div>
                <div className='mb-5'>
                    <div
                        className='relative h-60 w-[200px] overflow-hidden'
                        data-aos="flip-right"
                        data-aos-once="true"
                        data-aos-duration="1500"
                    >
                        <Image
                            src={`/uploads/teamImages/${onlyFirstItemFromDataArray.image}`}
                            height="5000"
                            width="5000"
                            alt={onlyFirstItemFromDataArray.title}
                            className='absolute w-full h-full rounded-md object-cover shadow-xl'
                        />
                    </div>
                    <div className='flex flex-col items-center justify-center m-5 text-[18px]'>
                        <a
                            className='font-bold text-red-500'
                            data-aos="fade-up"
                            data-aos-once="true"
                            data-aos-duration="800"
                        >{onlyFirstItemFromDataArray.name}</a>
                        <a
                            className='font-bold text-blue-500'
                            data-aos="fade-up"
                            data-aos-once="true"
                            data-aos-duration="800"
                        >{onlyFirstItemFromDataArray.title}</a>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-x-24 gap-y-5" >
                    {data.map((item, index) => (
                        <div className=' flex flex-col w-full items-center justify-center'
                        key={index}
                        >
                            <div
                                className='relative z-9 h-48 w-[150px] overflow-hidden'
                                data-aos="flip-right"
                                data-aos-once="true"
                                data-aos-duration="1500"
                                data-aos-delay={index * 100}
                            >
                                <Image
                                    src={`/uploads/teamImages/${item.image}`}
                                    height="5000"
                                    width="5000"
                                    alt={item.title}
                                    className='absolute w-full h-full rounded-md object-cover'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center m-5 text-[18px]'>
                                <a className='font-bold text-red-500'
                                    data-aos="fade-up"
                                    data-aos-once="true"
                                    data-aos-duration="1500"
                                    data-aos-delay={index * 130}
                                >{item.name}</a>
                                <a className='font-bold text-blue-500'
                                    data-aos="fade-up"
                                    data-aos-once="true"
                                    data-aos-duration="1500"
                                    data-aos-delay={index * 160}

                                >{item.title}</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default TeamImageGallery