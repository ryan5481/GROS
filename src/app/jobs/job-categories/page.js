const { default: JobCategories } = require("@/components/homePageElements/jobCategories")

const JobCategoriesList = () => {
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
        },
    ]

    return (
        <div className="mt-[100px]">
        <JobCategories data={data} />
        </div>
    )
}

export default JobCategoriesList