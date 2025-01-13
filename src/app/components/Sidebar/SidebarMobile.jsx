"use client"
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
                    fixed inset-0 bg-black/50 backdrop-blur-sm
                    transition-all duration-700 ease-in-out
                    ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
                    z-40
                `}
            />
            
            {/* Sidebar */}
            <aside 
                className={`
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
                <div className="p-4 h-full">
                    <div className="">Sidebar</div>
                </div>
            </aside>
        </>
    )
}

export default SidebarMobile;