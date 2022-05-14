import { products } from "../data/chelas.js";
import Item from "./Item.jsx";
import React from 'react'
import '../styles/beerpreloader.css'

const ItemList = ({ category }) => { //En ItemList recibimos la categoria nos evitamos el props, destructuring
	return ( //armamos contenedor, si existen categorias nos mapea las categorias y por cada producto nos imprima un item
		
    //key es para evitar doble renderizado en react
    //enviamos el producto que se mapea de category, por cada producto imprima cart
        
        
        <div className="grid grid-cols-1 gap-y-4 grid-rows-2 gap-30 m-6 p-6 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8  justify-self-center items-center">
            {
                products.length ? (
                    <>
                    { category &&
                    category.map((producto) => (
                        <div class="py-6  items-center justify-center" key={producto.id}>
                            <Item key={producto.id} producto={producto} />
                        </div>
                    ))}
                    </>

                ) :(
                    <>
                    <h3 class="text-center justify-center text-2xl">Cargando productos...</h3>
                    <div class="bg-yellow-50 h-full">
                        <img class="flex justify-center" alt ="" width="400" height="400" src="https://acegif.com/wp-content/gif/beer-77.gif"/>
                    </div>
                    </>
                    
                )
            }   
			</div>
		
	)
}

export default ItemList