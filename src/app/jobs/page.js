import DocumentsRequired from "./documents-required/page"
import RecruitmentProcedure from "./recruitment-procedure/page"

const { default: JobCategories } = require("@/components/homePageElements/jobCategories")

const Jobs = () => {
    const data = [
        {
            image: "construction.jpg",
            title: "Construction"
        },
        {
            image: "hotel.jpg",
            title: "Hotel"
        },
        {
            image: "oil.jpg",
            title: "Oil & Refinery"
        },
        {
            image: "security.jpg",
            title: "Security"
        },
        {
            image: "supermarket.png",
            title: "Supermarket"
        },
        {
            image: "supplier.jpg",
            title: "Transportation"
        }
    ]

    return (
        <div  className="mt-[100px]">
        <JobCategories data={data} />
        <RecruitmentProcedure />
        <DocumentsRequired />
        </div>
    )
}

export default Jobs