import React, { useEffect, useState } from 'react'
import '../styles/beerpreloader.css'
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, where, query } from "firebase/firestore";
import ItemDetailCard from "./ItemDetailCard.jsx";
import Swal from 'sweetalert2';

const ItemDetail = () => { 
    const [producto, setProducts] = useState([])
    const { id } = useParams()

    useEffect(() => {
        if (id === undefined) {

            getproduct()
            
        } else {
            getProductId()
            
        }
    }, [id])

    const getproduct = () => {
        const db = getFirestore()
        const polasCollection = collection(db, 'items')
        getDocs(polasCollection).then(snapshot => {
            if (snapshot.size > 0) {
                const polasData = snapshot.docs.map(d => ({ 'id': d.id, ...d.data() }))

                setProducts(polasData)
            }
        })
    }

    const getProductId = async () => {
        const db = getFirestore()
        const polasCollection = collection(db, 'items')
        const q = query(polasCollection, where('id', '==', Number(id)))

        const snapshot = await getDocs(q)

        if (snapshot.size > 0) {
            const PolasCategoryData = snapshot.docs.map(d => ({ 'id': d.id, ...d.data() }))
            setProducts(PolasCategoryData)
        } else {
            Swal.fire({
                icon: 'error',
                title: "El producto no existe",
                text: "Revisa que estes buscando el producto correcto, Haz click en volver",
                footer: '<a href="/">Volver</a>',
            })
        }
    }

    return ( //armamos contenedor, si existen categorias nos mapea las categorias y por cada producto nos imprima un item

        //key es para evitar doble renderizado en react
        //enviamos el producto que se mapea de category, por cada producto imprima cart
        <div>
            {producto.map(prod => (
                <ItemDetailCard id={prod.id} category={prod.category} name={prod.name} description={prod.description} price={prod.price} stock={prod.stock} img={prod.thumbnail} key={prod.id} />
            ))}
        </div>


    )
}

export default ItemDetail