"use client"

import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import SidebarMobile from "../Sidebar/SidebarMobile";
import ThemeChange from "../ThemeChange/ThemeChange";
import Image from "next/image";
import logo from "../../assets/logo-sin-fondo.png";

const HeaderMobile = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="lg:hidden w-full h-16 flex justify-between items-center px-5 shadow-md shadow-gray-300 bg-gray-100 dark:bg-gray-900 ">
                <div className="">
                    <Image className="w-[50px] h-[50px]" src={logo} alt="logo" />
                </div>
                <div className="flex flex-row items-center gap-4">
                    <div className="w-[60px]">
                        <ThemeChange />
                    </div>
                    <div className="px-4 h-10 flex justify-center items-center cursor-pointer select-none bg-gray-400 rounded-2xl hover:bg-gray-500 transition-all duration-300">
                        Descargar
                    </div>
                    <IoMenu onClick={() => setIsOpen(!isOpen)} className="text-4xl cursor-pointer text-gray-500 dark:text-gray-300" />
                </div>
            </div>
            {isOpen && <SidebarMobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </>
    )
}

export default HeaderMobile;
