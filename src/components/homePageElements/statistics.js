import React, { useEffect, useState } from 'react';
import { useInView } from 'react-hook-inview';
import CountUp from 'react-countup';

const Statistics = () => {
    const [isCounting, setIsCounting] = useState(false);
    const [inViewRef, inView] = useInView();

    const data =[
        {
            title: "Employed",
            count: "4692"
        },
        {
            title: "Countries",
            count: "23"
        },
        {
            title: "Clients",
            count: "256"
        },
    ]

    useEffect(() => {
        if (inView) {
            setIsCounting(true);
        }
    }, [inView]);

    return (
        <>
            <div className='mx-auto'>
                <div className={'flex item-center justify-center p-10 pt-5 text-black font-bold text-[30px]'} >
                    Our Achievments
                </div>

                <div className="flex justify-center items-center">
                <div ref={inViewRef} className="grid grid-cols-3 gap-4 items-center justify-center h-300px pb-20">
                {data.map((card, index) => (
                    <div className="flex flex-col p-5 border-2 border-zinc-700 rounded-lg shadow-lg items-center justify-center w-[300px]"
                        key={index}
                    >
                        {isCounting && (
                            <CountUp end={card.count} duration={4} style={{ color: "black", color: "red", fontSize: "70px", fontWeight: "bold", textAlign: "center" }} />
                        )}
                        <div className={'text-[30px] text-blue-500 items-center justify-center'}>
                            {card.title}
                        </div>
                    </div>
                ))}
            </div>
            </div>
            </div>
        </>
    );
}

export default Statistics;
