import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

const NavBar = () => {

    return (
        <header>
            
            <nav class="bg-black">
            <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div class="relative flex items-center justify-between h-16">
                    <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        
                        <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>

                            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <Link to= '/' class="flex-shrink-0 flex items-center">
                            <img class="block lg:hidden h-8 w-auto" src="https://uploads.turbologo.com/uploads/design/hq_preview_image/705328/draw_svg20210629-14837-onadff.svg.png" alt="Workflow"/>
                                <img class="hidden lg:block h-12 w-auto rounded-full" src="https://uploads.turbologo.com/uploads/design/hq_preview_image/705328/draw_svg20210629-14837-onadff.svg.png" alt="Workflow"/>
                        </Link>
                                <div class="hidden sm:block sm:ml-6">
                                    <div class="flex space-x-4">
                                        <Link to='/' class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Inicio</Link>

                                        <Link to={`/category/:id`} class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Nosotros</Link>  

                                        <Link to='/' class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Puntos de Venta</Link>

                                        <Link to='/' class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contacto</Link>
                                    </div>
                                </div>
                        </div>
                        <CartWidget></CartWidget>
                        
                    </div>
                </div>
                

                <div class="sm:hidden" id="mobile-menu">
                    <div class="px-2 pt-2 pb-3 space-y-1">
                        <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Inicio</a>

                        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Nosotros</a>

                        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Puntos de Venta</a>

                        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contacto</a>
                        
                    </div>
                </div>
                </nav>
                
                
        </header>
        

            )
}
export default NavBar