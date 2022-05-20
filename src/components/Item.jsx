import React from 'react'
import { Link } from "react-router-dom"
import '../styles/Item.css';

const Item = ({name, price, img, id}) => { //Item recibe el producto que viene de ItemList, se desestructura y se crea la card
    
    //En el link nos vamos a /item/productoId
    return (

        <div class="max-w-sm bg-yellow-50 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <figure>
                <img class="object-cover p-2 rounded-t-lg imagenproductos" width="200" src={img} alt="product" />
            </figure>
            <div class="px-5 pb-5">
                <a href="#">
                    <h5 class="text-xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                </a>

                <div class="flex justify-center items-center text-center">
                    <span class="text-3xl font-bold text-gray-900 dark:text-white">${price}k</span>
                </div>
                <div class="flex justify-center items-center text-center">
                    <Link to={`/item/${id}`} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        Ver más
                    </Link>
                </div>
            </div>
        </div>

        /* <article class="bg-white w-72 h-full shadow-md rounded m-3">
            <div class="h-3/4 w-full">
                <img class="object-cover rounded-t" src={thumbnail} alt="" width="500" height="600"
                />
            </div>
            <div class="w-full h-1/4 p-3">
                <a href="#" class=" hover:text-yellow-600 text-gray-700">
                    <span class="text-lg font-semibold uppercase tracking-wide ">{name}</span>
                </a>
                <p class="text-gray-600 text-sm leading-5 mt-1">${price}</p>
                <ItemCount stock={stock} onAdd={onAdd} initial={1} />
            </div>
        </article> */




    )
}

export default Item