import ThemeChange from "../ThemeChange/ThemeChange";
import Image from "next/image";
import logo from "../../assets/logo-sin-fondo.png";

const Header = () => {
    return (
        <div className="hidden lg:flex h-16 w-full justify-between items-center px-4 bg-gray-100 dark:bg-gray-800">
            <div className="">
                <Image className="w-[50px] h-[50px]" src={logo} alt="logo" />
            </div>
            <div className="text-md font-semibold flex flex-row gap-16 text-gray-900 dark:text-gray-300">
                <div className="cursor-pointer">Inicio</div>
                <div className="cursor-pointer">Plan</div>
                <div className="cursor-pointer">Lista de Espera</div>
            </div>
            <div className="flex flex-row items-center gap-4">
                <div className="w-[60px]">
                    <ThemeChange />
                </div>
                <div className="px-4 h-10 flex justify-center items-center cursor-pointer bg-gray-400 rounded-2xl">
                    Descargar
                </div>
                
            </div>
        </div>
    )
}

export default Header;

