"use client"
import { VscChromeClose } from "react-icons/vsc";
import { useEffect, useState } from 'react';

const SidebarMobile = ({ isOpen, setIsOpen }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            {/* Overlay */}
            <div 
                onClick={() => setIsOpen(false)}
                className={`
                    lg:hidden
                    fixed inset-0 bg-black/50 backdrop-blur-sm
                    transition-all duration-700 ease-in-out
                    ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
                    z-40
                `}
            />
            
            {/* Sidebar */}
            <aside 
                className={`
                    lg:hidden
                    fixed top-0 h-full w-[250px] 
                    bg-white dark:bg-gray-800 shadow-xl
                    transition-all duration-700 ease-in-out transform
                    ${mounted ? (isOpen 
                        ? 'right-0 translate-x-0 opacity-100' 
                        : 'right-0 translate-x-full opacity-0'
                    ) : 'right-0 translate-x-full'}
                    z-50
                `}
            >
                <div className="p-4 h-full flex flex-col gap-10 text-slate-900 dark:text-white">
                    <div className="text-2xl font-semibold flex flex-row items-center gap-2">
                        <VscChromeClose onClick={() => setIsOpen(false)} className="text-4xl cursor-pointer" />
                        <div>Menu</div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="text-2xl font-medium cursor-pointer border-b-[1px] border-slate-500 pb-2 ">Inicio</div>
                        <div className="text-2xl font-medium cursor-pointer border-b-[1px] border-slate-500 pb-2 ">Plan</div>
                        <div className="text-2xl font-medium cursor-pointer border-b-[1px] border-slate-500 pb-2 ">Lista de Espera</div>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default SidebarMobile;