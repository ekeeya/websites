const Header = () => {
    return (
        <header className="fixed top-3 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] lg:top-0 lg:left-0 lg:translate-x-0 lg:w-full bg-white/90 lg:bg-white backdrop-blur-sm lg:backdrop-blur-0 shadow-lg lg:shadow-md z-50 rounded-xl lg:rounded-none flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 lg:py-5">
            <div className="flex items-center justify-center lg:justify-start space-x-2 sm:space-x-3 md:space-x-4 mx-auto lg:mx-30">
                <div className="flex items-center">
                    <img src="/src/assets/ministy_of_panchayati.png" alt="Ministry of Panchayati Raj" className="h-8 sm:h-10 md:h-12 lg:h-16" />
                </div>
                <div className="border-l border-gray-300 h-6 sm:h-8 md:h-12 lg:h-15"></div>
                <div className="flex items-center">
                    <img src="/src/assets/panchayati-raj.png" alt="Panchayati Raj" className="h-8 sm:h-10 md:h-12 lg:h-16" />
                </div>
                <div className="border-l border-gray-300 h-6 sm:h-8 md:h-12 lg:h-15"></div>
                <div className="flex items-center">
                    <img src="/src/assets/unicef-every-child.png" alt="UNICEF" className="h-8 sm:h-10 md:h-12 lg:h-16" />
                </div>
            </div>
            <nav className="hidden lg:flex space-x-6 mx-30">
                <a href="#" className="text-green-600 hover:text-green-800 font-medium">Home</a>
                <a href="#" className="text-gray-800 hover:text-gray-600 font-medium">About</a>
                <a href="#" className="text-gray-800 hover:text-gray-600 font-medium">Dashboard</a>
                <a href="#" className="text-gray-800 hover:text-gray-600 font-medium">Login</a>
            </nav>
        </header>
    )
}

export default Header