import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getItem } from "../data/chelas"

import ItemList from './ItemList';

const ItemListContainer = ({ greetings }) => { //se hace el renderizado de la promesa
    const [category, setCategory] = useState() //creamos un estado que guarda una categoria
	const { categoryId } = useParams()

	useEffect(() => { //uE se fija que en los parametros haya una categoria, 
		if (categoryId === undefined) { //si no hay nos trae la respuesta de todo el array
			getItem().then((resp) => setCategory(resp))
		} else { // si hay una categoria va a traer la categoria filtrada con aquellos productos que sean iguales a categoria id
			getItem().then((resp) => 
				setCategory(resp.filter((product) => product.category === categoryId)) //se guarda en setcategory y se envia a category que está en item list abajo
			)
		}
	}, [categoryId])

    return (
        <>
            <section className="w-100 bg-yellow-50">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 text-center pt-6">{greetings}, Nuestras Chelas </h1>
                <ItemList category={category} ></ItemList>
                
            </section>
        {/* <div class= "text-center bg-slate-500">ItemListContainer {greeting}</div> */}
            
        </>
    )
}

export default ItemListContainer