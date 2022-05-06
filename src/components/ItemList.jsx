import { chelasDisponibles } from "../data/chelas.js";
import { useEffect, useState } from "react";
import Item from "./Item.jsx";
import React from 'react'
import '../styles/beerpreloader.css'

const ItemList = () => {
    const [chelas, setChelas] = useState([]);

    useEffect(() => {
        const getChelas = new Promise((resolve, reject) => { //guardo promesa en getchelas, es para traer los datos
            setTimeout(() => {
                resolve(chelasDisponibles); //espacio de 2 segundos para cargar productos
            }, 2000)
        })
        getChelas.then((result)=> {
            console.log('Se completó la carga', result)
            setChelas(result) //aquí seteamos el resultado de los de arriba
        }).catch((err)=>{
            console.log(err);
            alert ("Tenemos problemas para cargar nuestras chelas")
        })

        
        
        
    }, [])

    return (
        <div className="grid grid-cols-1 gap-y-4 grid-rows-2 gap-30 m-6 p-6 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8  justify-self-center items-center"> 
            {
                chelas.length ? ( //si en products no hay nada, el valor será "0" y en ese caso, un cero se puede interpretar como un valor booleano por lo cual se considerará como falso
                    <>
                        {
                            chelas.map((product) => {
                                return (
                                    <div class="py-6  items-center justify-center" key={product.id}>
                                        <Item
                                            name={product.name}
                                            thumbnail={product.thumbnail}
                                            price={product.price}
                                            stock={product.stock}
                                            id={product.id}
                                        />
                                    </div>
                                );
                            })
                        }
                    </>
                ) : (
                    <>
                    <h3 class="text-center justify-center text-2xl">Cargando productos...</h3>
                    <div class="bg-yellow-50 h-full">
                        <img class="flex justify-center" width="400" height="400" src="https://acegif.com/wp-content/gif/beer-77.gif"/>
                    </div>

                    </>
                )
            }
        </div>
    );
}

export default ItemList