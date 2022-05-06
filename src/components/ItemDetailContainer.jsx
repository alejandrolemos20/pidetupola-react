import { chelasDisponibles } from "../data/chelas.js";
import { useEffect, useState } from "react";
import React from 'react'
import '../styles/beerpreloader.css'
import ItemDetail from "./ItemDetail.jsx";

const ItemDetailContainer = () => {
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
        <div class="py-6  items-center justify-center bg-yellow-50" >
            <ItemDetail />
        </div>
        
    );
}

export default ItemDetailContainer