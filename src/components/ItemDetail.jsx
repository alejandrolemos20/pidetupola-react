import React from 'react'
import { useParams } from 'react-router-dom'
import { chelasDisponibles } from "../data/chelas.js"
import { useEffect, useState } from "react"
import ItemCount from './ItemCount.jsx';
import '../styles/Item.css';


const ItemDetail = () => {

    const { ItemId } = useParams() //Desestructuramos el id y regresa todos los parametros que capture
    const onAdd = (cantidad) => {
        alert(`Has agregado ${cantidad} cervezas 🍺`);
    };
    //Usamos useEffect para traer la descripción del producto desde nuestro archivo de datos
    const [pola, setPola] = useState({}) //{} son objetos que no tienen una propiedad, no es un array
    useEffect(() => {
        //funcion anonima asincrona autoejecutable
        (async () => {
            const ItemData = await getItemDetail() //Declaro funcion a usar y adicionalmente con el await y el async le digo que espere a que se revuelva la función para asignar un valor
            if (ItemData) {
                setPola(ItemData)
                console.log(ItemData)
            }
        })()
    }, [ItemId]) //se coloca ItemId aquí para que el useeffect se ejecute cada que hay un nuevo id

    const getItemDetail = () => { //promesa para pedir los datos al servidor
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(chelasDisponibles.find(c => c.id == ItemId)) //c de chelas - .find es para buscar algo en los datos, en este caso buscamos el id
            }, 1000);
        })
    }

    return (
        <>
            {/* <div>ItemDetail - {ItemId}</div> */}
            <section class="text-gray-700 body-font overflow-hidden bg-yellow-50">
                <div class="container px-5 py-24 mx-auto">
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
                                <a href="#" aria-current="page" class="font-medium text-gray-500 hover:text-gray-600"> {pola.name} </a>
                            </li>
                        </ol>
                    </nav>
                    <div class="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="pola" class="lg:w-1/2 w-full object-cover object-center rounded-lg border border-gray-200" src={pola.thumbnail}/>
                            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h2 class="text-sm title-font text-gray-500 tracking-widest">Pide Tu Pola</h2>
                                <h1 class="text-gray-900 text-3xl title-font font-medium mb-1 mt-2">{pola.name}</h1>
                                <p class="leading-relaxed mt-6">{pola.description} </p>
                                
                                <div class="flex justify-center mt-6">
                                    <p class="title-font font-medium text-2xl text-center text-gray-900">${pola.price}k </p>
                                </div>
                                    <ItemCount stock={pola.stock} onAdd={onAdd} initial={1} />
                            </div>
                    </div>
                </div>
            </section>

            



        </>
    )
}

export default ItemDetail