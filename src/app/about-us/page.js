import TextCard1 from "@/components/card/textCard1"

const AboutUs = () => {
    const companyIntroduction = {
        image: "stock.jpeg",
        title: "Global Reliance Overseas Pvt. Ltd.",
        text: "Global Reliance Overseas Services  Pvt.Ltd. is the leading government approved recruitment agency (License No. 832/066/067) in Nepal. Since our establishment, we have been recognized as the premier recruitment agency and have developed excellent working relationship with major international and national companies in theMiddle-East and South East Asia. For our high level of professional services we have been internationally certified. We maintain a huge data bank of different profession's candidates CVs and keep continuous link with the best available personnel through regional representatives, media ads, various technical institutions, Universities and Colleges. We undertake different tests and interviews on each candidate's qualification, work experience and capabilities. Those who are well qualified and meet the job descriptions are considered for recommendation to the clients. We operate with fully equipped business center with qualified and experienced management team to provide professional, efficient and reliable services to our clients. We pride ourselves on the quality level of services that we provide to both candidates and clients.",
    }
    return <>
        <div className="mt-[100px]">
        <TextCard1 data={companyIntroduction} imageFolderName="companyIntroductionImage" />
        </div>
    </>
}

export default AboutUs