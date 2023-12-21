import Image from 'next/image'


const JobCategories = ({data}) => {



    return (
        <div className='bg-white'>
            <div className='mx-auto'>
                <div className="flex fontweight-bold font-bold justify-center text-black text-[30px] py-10">
                    Job Categories
                </div>
                <div className='grid grid-cols-3 gap-5 px-[200px] py-10' >
                    {
                        data.map((category, index) => (
                            <div className='relative flex flex-col shadow-lg items-center justify-center w-full h-60 cursor-pointer'
                                key={index}
                            >
                                <div
                                    data-aos="zoom-out"
                                    data-aos-once="true"
                                    data-aos-duration="800"
                                    data-aos-delay={index * 200}
                                    className="absolute inset-0 w-full h-full group inline-block group transition-brightness duration-300 ease-in-out transform hover:brightness-75">
                                    <Image
                                        src={`/uploads/jobcategoryImages/${category.image}`}
                                        height={200}
                                        width={600}
                                        className="rounded-md w-full h-full"
                                        alt='Job category'
                                    />
                                </div>
                                {/* <h1 className='bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10 text-3xl font-bold cursor-default'>Hello</h1> */}
                                <h1 
                                className='absolute  text-white z-10 text-3xl font-bold cursor-pointer'
                                data-aos="flip-up"
                                data-aos-once="true"
                                data-aos-duration="500"
                                data-aos-delay={index * 300}
                                >{category.title}</h1>
                                
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default JobCategories