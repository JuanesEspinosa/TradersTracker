"use client"

import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import SidebarMobile from "../Sidebar/SidebarMobile";
import ThemeChange from "../ThemeChange/ThemeChange";

const HeaderMobile = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className=" w-full h-16 flex justify-between items-center px-5 bg-gray-300">
                <div className="">logo</div>
                <div className="flex flex-row items-center gap-4">
                    <ThemeChange />
                    <div className="px-4 h-10 flex justify-center items-center cursor-pointer bg-gray-400 rounded-2xl">
                        Descargar
                    </div>
                    <IoMenu onClick={() => setIsOpen(!isOpen)} className="text-4xl cursor-pointer" />
                </div>
            </div>
            {isOpen && <SidebarMobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </>
    )
}

export default HeaderMobile;
