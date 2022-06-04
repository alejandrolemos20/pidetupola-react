import React from 'react'
import { Link } from "react-router-dom"
import '../styles/Item.css';

const Item = ({ name, price, img, id }) => { //Item recibe el producto que viene de ItemList, se desestructura y se crea la card

    //En el link nos vamos a /item/productoId
    return (

        <div className="max-w-sm bg-yellow-50 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <figure>
                <img className="object-cover p-2 rounded-t-lg imagenproductos" width="200" src={img} alt="product" />
            </figure>
            <div className="px-5 pb-5">

                <h5 className="text-xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>


                <div className="flex justify-center items-center text-center">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}k</span>
                </div>
                <div className="pt-2 flex justify-center items-center text-center">
                    <Link to={`/item/${id}`} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        Ver más
                    </Link>
                </div>
            </div>
        </div>

        




    )
}

export default Item