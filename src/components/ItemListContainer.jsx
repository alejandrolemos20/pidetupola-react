import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getItem } from "../data/chelas"
import Loader from "./Loader"
import ItemList from './ItemList';

import {getFirestore} from 'firebase/firestore/lite'


const ItemListContainer = ({ greetings }) => { //se hace el renderizado de la promesa
    //const [category, setCategory] = useState() //creamos un estado que guarda una categoria
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() =>
            setIsLoading(false),
            3000
        );
    }, []);



   /*  const { categoryId } = useParams()

    useEffect(() => { //uE se fija que en los parametros haya una categoria, 
        if (categoryId === undefined) { //si no hay nos trae la respuesta de todo el array
            const db = getFirestore()
            getItem().then((resp) => setCategory(resp))

        } else { // si hay una categoria va a traer la categoria filtrada con aquellos productos que sean iguales a categoria id

            getItem().then((resp) =>
                setCategory(resp.filter((product) => product.category === categoryId)), //se guarda en setcategory y se envia a category que está en item list abajo

            )

        }
    }, [categoryId]) */

    return (
        <>
            <div className="block w-100 h-screen bg-yellow-50">
                
                <div className="bg-yellow-50 relative text-center flex flex-col justify-center items-center">
                
                    {isLoading && <><h1 className="text-center pt-24 text-2xl animate-bounce">Cargando tus chelas</h1><Loader size={50} color="black" /></>}
                    {!isLoading && <><h1 className="text-4xl font-extrabold tracking-tight text-gray-900 text-center pt-6">{greetings}, Nuestras Chelas </h1><ItemList></ItemList></>}
                </div>

            </div>
            {/* <div class= "text-center bg-slate-500">ItemListContainer {greeting}</div> */}

        </>
    )
}

export default ItemListContainer