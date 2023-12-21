
const RecruitmentProcedure = () => {

    const data = [
        {
            title: "Information Desk",
            text: "Global Reliance Overseas Pvt.Ltd.Offers Its sercice for its main information Service Desk from where any relevant information can be obtained.Moreover, the main registration is also carried out and the databank is maintained as well. This serves as a good information system for the company which helps in updating the jobseekers record on a regular basis."
        },
        {
            title: "Advertisement in Newspaper",
            text: "The recruitment company applies with Department of lobour Nepal for Authorisation, The Department of labour will grant the permission on being satisfied about the credibility of the demand and attesting that terms and conditions offered are conformity with the Government Regulation."
        },
        {
            title: "Advertisement in Newspaper",
            text: "In all case we send all the visa endorsements, passports to the concerned airlines, to confirm the schedule flight from Nepal to the nearest airport of the working side. PTA may be send to any airlines operating from Kathmandu under intimation to us."
        },
        {
            title: "Medical Check Up",
            text: "Only selected candidates will be sent to an authorized hospital or clinic for a full medical examination. The candidate, who is fit medically and physically for employment will be eligible to sign the employment contract."
        },
        {
            title: "Trade Test",
            text: "Practical Trade test will be taken at the technical training institute, if the company wants to choose the employee directly by an oral interview and practical test, the trade test will be taken at office where our selection committee observes the workers directly to their respective job."
        },
        {
            title: "Orientation",
            text: "Prior to the departure of workers the orientation briefing is organized to make all workers fully aware of the employment company. Countries laws and orders, Labour laws immigration policy and maintain understanding and cordiality among them self and aim of the particular activity of the individual."
        },
        {
            title: "Selection of Candidates",
            text: "The company Maintains an up to date data bank of potential candidates with full information on his skill, trade qualification and experience and advertising allows other to compete for the post too.The final interview for sort listed candidates after pre screening can be conducted by the employer or his representative or by this company on their behalf."
        },
    ]

    return (
        <div>
            <div className="flex fontweight-bold font-bold justify-center text-red-500 bg-white text-[40px] py-5">
                Recruitment Procedure
            </div>
            <div class="flex h-full items-center justify-center bg-white p-10 md:px-60">
                <div class="space-y-6 border-l-2 border-dashed border-blue-500">
                    {data.map((item, index) => (
                        <div class="relative w-full"
                        key={index}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="absolute -top-0.5 z-5 -ml-3.5 h-7 w-7 rounded-full text-red-500 bg-white">
                                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                            </svg>
                            <div class="ml-6">
                                <h4 class="font-bold text-red-500">{item.title}</h4>
                                <p class="mt-2 max-w-screen-sm text-sm text-gray-500">{item.text}</p>
                                {/* <span class="mt-1 block text-sm font-semibold text-blue-500">2007</span> */}
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </div >
    )
}

export default RecruitmentProcedure