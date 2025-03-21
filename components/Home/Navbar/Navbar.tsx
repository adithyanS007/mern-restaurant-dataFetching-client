"use client";
import Image from "next/image";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { NavbarMenu } from "@/app/constants/ConstData";
import Link from "next/link";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav>
                <div className="bg-[#121618] h-[100px] w-full fixed top-0 left-0 z-[1000] flex items-center px-6 lg:px-[168px] justify-center lg:justify-between">
                    {/* Logo and Text */}
                    <div className=" pt-[100px] flex items-center justify-center lg:justify-start">
                        {/* Logo for all screen sizes */}
                        <Image
                            src="/images/deepnetsoft.png"
                            alt="Logo"
                            width={86}
                            height={76}
                            className="lg:mr-4 md:w-[100px] md:h-[100px]"
                        />
                        {/* Text for large screens only */}
                        <div className="hidden lg:block w-[154px] h-[52px]">
                            <h2 className="text-[35px] font-medium ml-[-18] my-[-37px] pt-5 mb-0 text-blue-600">
                                DEEP <span className="text-white">NET</span>
                            </h2>
                            <h2 className="text-[35px] font-medium ml-[-18] my-[-20px] text-[#857878]">SOFT</h2>
                        </div>
                    </div>

                    {/* Navbar Menu for large screens */}
                    <div className="hidden lg:flex items-center space-x-8 pt-10">
                        <ul className="flex gap-5">
                            {NavbarMenu.map((item) => (
                                <li key={item.id}>
                                    <Link
                                        href={item.link}
                                        className="text-[#F5F5F5] text-base px-3 xl:text-base hover:text-[#0063ff] transition-all duration-300 font-semibold"
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Hamburger Menu for mobile screens */}
                    <div className="lg:hidden cursor-pointer absolute right-10 pt-10" onClick={() => setIsOpen(!isOpen)}>
                        <MdMenu className="text-4xl text-white" />
                    </div>
                </div>
            </nav>

            {/* Mobile Side Bar */}
            <ResponsiveMenu isOpen={isOpen} />
        </>
    );
};

export default Navbar;
