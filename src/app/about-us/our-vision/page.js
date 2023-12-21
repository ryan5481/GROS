import ImageTextList from "@/components/card/imageTextList"

const data = {
    image: "mission.jpeg",
    title: "Our Vision",
    paragraph: "The vision of Global Reliance  Overseas Pvt.Ltd. is to be a recognized and well known leader in the region by fulfilling the dream of clients.i.e.foreign companies.via providing manpower recruiting services to foreign companied.This will assist to strenghten the finanical condition of the country as well as the employers.It will further assist to achieve rapid profitable growth that pur clients needs are satisfoed in an efficient and cost effective mannner.",
    text1: "Employment opportunity for skilled, semi skilled, unskilled, trained and professional manpower.",
    text2: "Finds and recruit rigth person for the right job as per the demand of our valued customers.",
    text3: "Global Reliance Overseas provides aesthetic service blended with quality management.",
    text4: "Provides aesthetic service blended with quality management.",
    text5: "Not dependent on third parties to source workforce",
    text6: "Use of information kept in the computerized data bank",
    text7: "Own department to facilitate for advertising,trade tests,training and travel arrangement",
    text8: "Reliable expertise for medical check ups and attitiude tests.",
    text1: "Employment opportunity for skilled, semi skilled, unskilled, trained and professional manpower.",
    text2: "Finds and recruit rigth person for the right job as per the demand of our valued customers.",
    text3: "Global Reliance Overseas provides aesthetic service blended with quality management.",
    text4: "Provides aesthetic service blended with quality management.",
    text5: "Not dependent on third parties to source workforce",
    text6: "Use of information kept in the computerized data bank",
    text7: "Own department to facilitate for advertising,trade tests,training and travel arrangement",
    text8: "Reliable expertise for medical check ups and attitiude tests.",
    title2: "Our Mission",
    paragraph2: "The mission of Global Reliance  Overseas Pvt.Ltd. is to be a recognized and well known leader in the region by fulfilling the dream of clients.i.e.foreign companies.via providing manpower recruiting services to foreign companied.This will assist to strenghten the finanical condition of the country as well as the employers.It will further assist to achieve rapid profitable growth that pur clients needs are satisfoed in an efficient and cost effective mannner.",
}

const OurVision = () => {

    return(
        <>
        <div className="mt-[100px]">
            <ImageTextList data={data} />
        </div>
        </>
    )
}

export default OurVision