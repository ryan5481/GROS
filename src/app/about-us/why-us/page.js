import ImageTextList from "@/components/card/imageTextList"

const WhyChooseUS = () => {
    const data = {
        image: "stock.jpeg",
        title: "Why Choose Us",
        text1: "Employment opportunity for skilled, semi skilled, unskilled, trained and professional manpower.",
        text2: "Finds and recruit rigth person for the right job as per the demand of our valued customers.",
        text3: "Global Reliance Overseas provides aesthetic service blended with quality management.",
        text4: "Provides aesthetic service blended with quality management.",
        text5: "Not dependent on third parties to source workforce",
        text6: "Use of information kept in the computerized data bank",
        text7: "Own department to facilitate for advertising,trade tests,training and travel arrangement",
        text8: "Reliable expertise for medical check ups and attitiude tests.",
        // text9: "text",
        // text10: "text",
    }
    return(
        <div  className="mt-[100px]">
        <ImageTextList data={data}/>
        </div>
    )
}

export default WhyChooseUS