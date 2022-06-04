import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

const NavBar = () => {
    
    return (
        
        <header className="h-full w-full">
            <nav className="bg-black">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 bg-black">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"

                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18 18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start ">
                            <Link to='/' className="flex-shrink-0 flex items-center">
                                <img className="block lg:hidden h-8 w-auto" src="https://uploads.turbologo.com/uploads/design/hq_preview_image/705328/draw_svg20210629-14837-onadff.svg.png" alt="Workflow" />
                                <img className="hidden lg:block h-12 w-auto rounded-full" src="https://uploads.turbologo.com/uploads/design/hq_preview_image/705328/draw_svg20210629-14837-onadff.svg.png" alt="Workflow" />
                            </Link>
                            <div className="hidden sm:block sm:ml-6">
                                <div className="flex space-x-4">
                                    <Link to='/' className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Inicio</Link>

                                    <Link to='/category/Ale' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Ales</Link>

                                    <Link to='/category/Lager' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Lager</Link>

                                </div>
                            </div>
                        </div>
                        <CartWidget></CartWidget>

                    </div>
                </div>


                <div className="sm:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link to='/' className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Inicio</Link>

                        <Link to='/category/Ale' className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Ales</Link>

                        <Link to='/category/Lager' className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Lager</Link>

                    </div>
                </div>
            </nav>
            <div className='h-full bg-black '>
                <marquee direction="left" bgcolor="black" scrollamount="10" className="text-white">¡Compra tu pola artesanal ya!</marquee>
            </div>


        </header>


    )
}
export default NavBar