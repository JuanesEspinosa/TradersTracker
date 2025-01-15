import { CgArrowLongRight } from "react-icons/cg";

const Section2 = () => {
    return (
        <div className="relative w-full flex flex-col gap-4 py-3  bg-gray-300 dark:bg-gray-900">
            <div className="flex flex-col text-center lg:gap-4 px-10 z-10">
                <div className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-gray-900 dark:text-gray-200">Se de los primeros en obtener la APP</div>
                <div className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-yellow-500">En nuestro LANZAMIENTO.</div>
            </div>
            <div className="flex flex-row justify-center items-center gap-4 2xl:py-8 z-10">
                <div className="flex flex-col items-center">
                    <div className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 dark:text-gray-200">31</div>
                    <div className="text-md lg:text-lg xl:text-xl 2xl:text-2xl font-bold text-yellow-500">Dias</div>
                </div>
                <div className="bg-gray-900 dark:bg-gray-200 w-[2px] h-14 lg:h-16 xl:h-18 2xl:h-24"></div>
                <div className="flex flex-col items-center px-2">
                    <div className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 dark:text-gray-200">33</div>
                    <div className="text-md lg:text-lg xl:text-xl 2xl:text-2xl font-bold text-yellow-500">Horas</div>
                </div>
                <div className="bg-gray-900 dark:bg-gray-200 w-[2px] h-14 lg:h-16 xl:h-18 2xl:h-24"></div>
                <div className="flex flex-col items-center">
                    <div className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 dark:text-gray-200">12</div>
                    <div className="text-md lg:text-lg xl:text-xl 2xl:text-2xl font-bold text-yellow-500">Minutos</div>
                </div>
                <div className="bg-gray-900 dark:bg-gray-200 w-[2px] h-14 lg:h-16 xl:h-18 2xl:h-24"></div>
                <div className="flex flex-col items-center">
                    <div className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 dark:text-gray-200">56</div>
                    <div className="text-md lg:text-lg xl:text-xl 2xl:text-2xl font-bold text-yellow-500">Segundos</div>
                </div>
            </div>
            <div className="flex flex-col justify-center px-8 gap-3 z-10">
                <div className="flex flex-row justify-center items-center gap-4 lg:pb-2">
                    <input type="text" placeholder="Correo Electronico" className="w-full max-w-md p-2 rounded-lg border text-lg font-semibold outline-none  shadow-md shadow-gray-600 " />
                    <button className="bg-yellow-500 text-white px-4 py-2 rounded-full flex flex-row justify-center items-center gap-2 ">
                        <div className="text-lg font-semibold text-gray-900 dark:text-gray-200">
                            Enviar
                        </div>
                        <CgArrowLongRight className="text-white text-xl" />
                    </button>
                </div>
                <div className="text-center text-md leading-5 font-semibold text-gray-900 dark:text-gray-200">
                    Registrate para desbloquear Features de la App
                </div>
            </div>
        </div>
    )
}

export default Section2;
