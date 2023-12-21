'use client'
import { useState } from "react"
import Image from 'next/image'
import Link from "next/link"
const { usePathname, useSearchParams } = require("next/navigation")
const siteRoutes = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "About Us",
        href: "/about-us",
        children: [
            {
                label: "Why-us",
                href: "/about-us/why-us",
            },
            {
                label: "Company Certificates",
                href: "/about-us/company-certificates",
            },
            {
                label: "Our Vision & Mission",
                href: "/about-us/our-vision",
            },
            {
                label: "About Nepal",
                href: "/about-us/about-nepal",
            }
        ]
    },
    {
        label: "Jobs",
        href: "/jobs",
        children: [
            {
                label: "Job Categories",
                href: "/jobs/job-categories",
            },
            {
                label: "Recruitment Procedure",
                href: "/jobs/recruitment-procedure",
            },

            {
                label: "Documents Required",
                href: "/jobs/documents-required",
            }
        ]
    },
    {
        label: "Clients",
        href: "/clients"
    },
    {
        label: "Gallery",
        href: "/gallery"
    },
    {
        label: "Contact Us",
        href: "/contact-us"
    }
]



const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const pathname = usePathname()

    const handleMouseEnter = (index) => {
        setActiveDropdown(index)
    }

    const handleMouseLeave = () => {
        setActiveDropdown(null)
    }

    console.log(activeDropdown)

    return (
        <nav className="fixed top-0 left-0 w-full h-[100px] flex bg-white shadow-lg px-5 z-30">
            <div className="flex w-full items-center justify-between group">
                <div className={`flex flex-row gap-5 font-bold text-xl text-blue-500`} >
                    <div className="relative w-[60px] h-[60px]">
                        <Image
                            src={`/uploads/logo/gros-logo.png`}
                            width={"200"}
                            height={"200"}
                            alt="logo"
                            className='absolute'
                        />
                    </div>
                    <div className="flex flex-col justify-between group" >
                        <a>Global Reliable</a>
                        <a>Overseas Services Pvt Ltd</a>
                    </div>
                </div>
                <ul className="flex text-[16px] cursor-pointer">
                    {siteRoutes.map((siteRoute, index) => (
                        <li key={siteRoute.href} >
                            <a
                                href={siteRoute?.href}
                                className={`relative 
                                text-zinc-400 
                                font-bold 
                                px-5 
                                py-8
                                hover:text-red-500
                                transition ${pathname === siteRoute.href ?
                                        "text-red-500" : 'text-zinc-800'
                                    }`}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={() => handleMouseLeave(null)}
                            >
                                {siteRoute.label}
                                {activeDropdown === index && siteRoute.children && (
                                    <ul className="absolute top-[80px] left-0 flex flex-col gap-2 whitespace-nowrap bg-white text-zinc-800 text-[16px] font-bold">
                                        {siteRoute.children.map((child) => (
                                            <a
                                                className={" text-zinc-800 font-bold p-3 border-b hover:bg-zinc-100 hover:text-red-500"}
                                                key={child.href}
                                                href={child.href}
                                            >
                                                {child.label}
                                            </a>
                                        ))}
                                    </ul>
                                )}
                            </a>
                        </li>
                    ))}
                </ul>

            </div>
        </nav>
    )
}

export default Navbar