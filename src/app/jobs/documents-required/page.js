import {
    PiNumberCircleOneFill,
    PiNumberCircleTwoFill,
    PiNumberCircleThreeFill,
    PiNumberCircleFourFill,
    PiNumberCircleFiveFill,
    PiNumberCircleSixFill,
    PiNumberCircleSevenFill,
    PiNumberCircleEightFill,
    PiNumberCircleNineFill
} from "react-icons/pi";


const DocumentsRequired = () => {

    const data = [
        {
            title: "Demand Letters",
            text: "A formal letter issued by the employer addressing Global Reliance Overseas Pvt. Ltd. with full detail of the job categories, number of workers, monthly salary, contract period, working hours and all other facilities like food, accommodation medical and air passage.",
            note: "To be attested by Chamber of Commerce & Nepalese Embassy."
        },
        {
            title: "Power of Attorney",
            text: "A letter issued by the emplyer authorizing Global Reliance Overseas Pvt. Ltd. to act on behalf of the employer in recruiting number of workers and to carry out all necessary formalities related with the respective Embassy and the related agencies of the government of Nepal.",
            note: "To be attested by Chamber of Commerce & Nepalese Embassy."
        },
        {
            title: "Employment Contract",
            text: "This agreement is made between the company (Employer) and the Employee on the company's letterhead stating clearly and precisely all terms and conditions regarding manpower supply from Nepal."
        },
        {
            title: "Consular Letter",
            text: "This letter is issued by the employer addressing the the Consulate General of the respective Embassy intimating him of appointment of Global Reliance Overseas Pvt. Ltd., as the lawful agent of the employers their authorization to act on behalf of the employers and to carry out all Visa formalities with the Embassy with particular Visa. The Consular letter is applicable in case of issue of original Visa by the employer and in most cases it is applicable for recruitment of Royal Kingdom of Saudi Arabia."
        },
        {
            title: "Guarantee Letter",
            text: "A formal letter addressing to Director General, Ministry of Labour & Transport Management, Department of Labour, New Baneshwor, Kathmandu Nepal. Promising that the workers will work in the country which is mentioned in the Demand Letter, and they will not be sent to work in any other country."
        },
        {
            title: "Agency Contract Paper",
            text: "This agreement is made between Global Reliance Overseas Pvt. Ltd. and the Employer Company on the Employer Company's letterhead stating clearly and precisely all terms and conditions regarding recruitment of manpower from Nepal.",
            note: "Demand letter and power of attroney should be attested by the chamber of commerce of Nepalese Embassy of the concerned country. For Oman, demand letter."
        }
    ]

    const PiNumberComponents = [
        PiNumberCircleOneFill,
        PiNumberCircleTwoFill,
        PiNumberCircleThreeFill,
        PiNumberCircleFourFill,
        PiNumberCircleFiveFill,
        PiNumberCircleSixFill,
        PiNumberCircleSevenFill,
        PiNumberCircleEightFill,
        PiNumberCircleNineFill,
    ];

    return (
        <div className="mt-[100px]">
            <div className="flex fontweight-bold font-bold justify-center text-red-500 bg-white text-[40px] py-5">
                Documents Required
            </div>
            <div class="flex h-full items-center justify-center bg-white p-10 md:px-60">
                <div>
                    {data.map((item, index) => {
                        const PiNumberComponent = PiNumberComponents[index];
                        return (
                            <>
                                <div class="flex flex-row w-full mb-5" key={index}>
                                    <PiNumberComponent size={30} className="text-red-500" />
                                    <div class="ml-6">
                                        <h4 class="font-bold text-red-500">{item.title}</h4>
                                        <p class="mt-2 max-w-screen-sm text-sm text-gray-500">
                                            {item.text}
                                        </p>
                                        {item.note &&
                                            <div className="flex flex-row text-sm items-start gap-1">
                                                <p className=" text-red-500" >Note: </p>
                                                <p class="max-w-screen-sm text-gray-500">
                                                     {item?.note}
                                                </p>
                                            </div>}
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default DocumentsRequired