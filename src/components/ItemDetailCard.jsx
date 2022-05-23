import React, { useState } from 'react'
import { Link } from "react-router-dom"
import ItemCount from './ItemCount'

const ItemDetailCard = ({name, price, category, img, stock, description, id}) => {
    const [terminar, setTerminar] = useState(false)

    const onAdd = (count) => { //función recibe el contador
        setTerminar(true)
        
    }
  return (
      
    <section class="text-gray-700 body-font overflow-hidden bg-yellow-50">
                <div class="container px-5 py-5 mx-auto">
                    <nav aria-label="Breadcrumb" class="py-6">
                        <ol role="list" class="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
                            <li>
                                <div class="flex items-center">
                                    <a href="/" class="mr-2 text-sm font-medium text-gray-900"> Cervezas Artesanales </a>
                                    <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="w-4 h-5 text-gray-300">
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>

                            <li class="text-sm">
                                <a href="" aria-current="page" class="font-medium text-gray-500 hover:text-gray-600"> {name} </a>
                            </li>
                        </ol>
                    </nav>
                    <div class="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt={`${category}, ${name}`} class="lg:w-1/2 w-full object-cover object-center rounded-lg border border-gray-200" src={img} />
                        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 class="text-sm title-font text-gray-500 tracking-widest">Pide Tu Pola</h2>
                            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1 mt-2">{name}</h1>
                            <p class="leading-relaxed mt-6">{description} </p>

                            <div class="flex justify-center mt-6">
                                <p class="title-font font-medium text-2xl text-center text-gray-900">${price}k </p>
                            </div>
                            {terminar ? (
                                <div class="flex items-center justify-center">
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
            </section>

  )
}

export default ItemDetailCard