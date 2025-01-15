const CornerBorder = ({ children }) => {
    return (
        <div className="relative w-full overflow-hidden">
        {/* Esquina superior derecha */}
        <div className="absolute top-0 right-0 w-[200px] h-[200px]">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white via-gray-100 to-transparent transform rotate-[-10deg] translate-x-20 translate-y-[-100px]" />
        </div>
      
        {/* Esquina inferior izquierda */}
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px]">
                <div className="absolute bottom-0 left-0 w-full h-full bg-gray-500 dark:bg-gray-200 transform rotate-[-10deg] translate-x-[-80px] translate-y-[100px]" />
            </div>

            {/* Tu contenido actual */}
            <div className="relative z-10">
                {/* Contenido */}
                {children}
            </div>
        </div>
    );
};

export default CornerBorder;