"use client"
import { useState } from "react";
import { IoIosMoon, IoIosSunny } from "react-icons/io";

const ThemeChange = () => {
    const [isDark, setIsDark] = useState(false);
    return (
        <div onClick={() => setIsDark(!isDark)} className={`${isDark ? "bg-gray-700" : "bg-yellow-500"} w-[60px] h-8 flex relative rounded-full cursor-pointer`}>
            <div className={`${isDark ? "left-1" : "right-1"} w-6 h-6 bg-gray-100 rounded-full absolute top-1`}></div>
            <div className={`${!isDark ? "left-1" : "right-1"} w-6 h-6  rounded-full absolute top-1`}>
                {
                    isDark ? <IoIosMoon className="text-2xl text-white" /> : <IoIosSunny className="text-2xl text-white" />
                }
            </div>
        </div>
    )
}

export default ThemeChange;