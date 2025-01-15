"use client"
import { useState, useEffect } from "react";
import { IoIosMoon, IoIosSunny } from "react-icons/io";

// Script que se ejecuta inmediatamente
const initializeTheme = () => {
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
    }
  }
};

// Ejecutar antes de que se monte el componente
initializeTheme();

const ThemeChange = () => {
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            return savedTheme === 'dark' || (!savedTheme && prefersDark);
        }
        return false;
    });

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');  
        }
    }, [darkMode]);

    // Evitar la hidratación incorrecta
    if (!mounted) {
        return null;
    }

    return (
        <div 
            onClick={() => setDarkMode(!darkMode)} 
            className={`bg-gray-700 dark:bg-yellow-500 w-[60px] h-8 flex relative rounded-full cursor-pointer transition-colors duration-300 `} >
            <div className={` w-6 h-6 bg-gray-100 rounded-full  absolute top-1 transition-all duration-300 ease-in-out ${!darkMode ? "left-1" : "right-1"} `} ></div>
            <div className={` w-6 h-6 rounded-full  absolute top-1 transition-all duration-300 ease-in-out ${darkMode ? "left-1" : "right-1"} `} >
                {
                !darkMode ? ( <IoIosMoon className="text-2xl text-white" /> ) : ( <IoIosSunny className="text-2xl text-white" /> )  
                }
            </div>
        </div>
    );
};

export default ThemeChange;