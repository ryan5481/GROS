import ImageGrid from "@/components/grids/imageGrid"

const CompanyCertificates = () => {
    const CompanyCertificatesList = [
        {
            title: "Company Registration",
            image: "1.png"
        },
        {
            title: "Company Certificate",
            image: "2.png"
        },
        {
            title: "Ownership Certificate",
            image: "4.jpeg"
        },
        {
            title: "PAN Registration",
            image: "4.jpeg"
        },
        {
            title: "Achievment Certificate",
            image: "5.png"
        },
    ]

    return <>
        <div className="mt-[100px]" >
        <ImageGrid data={CompanyCertificatesList} imageFolderName="companyCertificateImages" galleryTitle="Company Certificates" />
        </div>
    </>
}

export default CompanyCertificates