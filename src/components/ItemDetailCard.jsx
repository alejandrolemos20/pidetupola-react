import React, { useState } from 'react'
import { Link } from "react-router-dom"
import ItemCount from './ItemCount'
import '../styles/button.css';

const ItemDetailCard = ({name, price, category, img, stock, description, id}) => {
    const [terminar, setTerminar] = useState(false)

    const onAdd = () => { 
        setTerminar(true)
        
    }
  return (
      
    <div className=" flex max-w-5xl h-screen mt-0 mr-auto text-gray-700 overflow-scroll bg-yellow-50">
                <div className="h-full container px-5 py-5 mx-auto">
                    <nav aria-label="Breadcrumb" className="py-6">
                        <ol className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
                            <li>
                                <div className="flex items-center">
                                    <Link to= '/' className="mr-2 text-sm font-medium text-gray-900"> Cervezas Artesanales </Link>
                                    <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-4 h-5 text-gray-300">
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>

                            <li className="text-sm">
                                <p className="font-medium text-gray-500 hover:text-gray-600"> {name} </p>
                            </li>
                        </ol>
                    </nav>
                    <div className="lg:w-4/5 mx-auto md:flex flex flex-wrap">
                        <div className="md:shrink-0 items-center mx-auto">
                        <img alt={`${category}, ${name}`} className="h-48 w-full object-cover md:h-5/6  md:w-96 rounded border border-gray-200" src={img} />
                        </div>
                        <div className="p-2 lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">Pide Tu Pola</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 mt-2">{name}</h1>
                            <p className="leading-relaxed text-justify mt-4">{description} </p>

                                <p className="title-font font-medium text-2xl text-center text-gray-900">${price}k </p>
                            
                            {terminar ? (
                                <div className="flex items-center justify-center">
								<Link
									to="/cart"
									className="text-center text-base mt-5 ml-auto mr-auto w-44 h-8 bg-blue-500 hover:bg-blue-400 text-white font-bold pt-1 pb-4 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" 
								>
									Terminar Compra
								</Link>
                                </div>
							) : (
								<ItemCount stock={stock} onAdd={onAdd} id={id} initial={1} />
							)}
                        </div>
                    </div>
                </div>
            </div>

  )
}

export default ItemDetailCard