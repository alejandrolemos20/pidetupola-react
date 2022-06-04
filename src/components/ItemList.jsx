import Item from "./Item.jsx";
import React, { useEffect, useState } from 'react'
import '../styles/beerpreloader.css'
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, where,query } from "firebase/firestore";


const ItemList = () => { //En ItemList recibimos la categoria nos evitamos el props, destructuring

    const [producto, setProducts] = useState([])
    const { categoryId } = useParams()
    
    useEffect(() => {
        if (categoryId === undefined) {

            getproduct() 
            /* db.collection('items').get()
                .then(resp => setProducts(resp.docs.map(it => ({ ...it.data(), id: it.id })))) */
        } else {
            getProductCategory()
            /* dbQuery.collection('items').where('category', '==', categoryId).get()
                .then(resp => setProducts(resp.docs.map(it => ({ ...it.data(), id: it.id })))) */
        }
    }, [categoryId])
    
    const getproduct = () => {
        const db = getFirestore()
        const polasCollection = collection(db, 'items')
        getDocs(polasCollection ).then( snapshot => {
          if (snapshot.size > 0) {
            // console.log(snapshot.docs);
            // const ids = snapshot.docs.map( d => d.id ).join(',')
            // console.log('ids: ', ids);
    
            const polasData = snapshot.docs.map( d => ({'id': d.id, ... d.data()}) )
            // console.log(milanesasData);
            setProducts(polasData)
          }
        })
      }

      const getProductCategory = async () => {
        const db = getFirestore()
        const polasCollection = collection(db, 'items')
        const q = query( polasCollection, where( 'category', '==', categoryId ) )
        
        const snapshot = await getDocs( q )
    
        if (snapshot.size > 0) {
          const PolasCategoryData = snapshot.docs.map( d => ({'id': d.id, ... d.data()}) )
          setProducts(PolasCategoryData)
        }
      }
   
    return ( //armamos contenedor, si existen categorias nos mapea las categorias y por cada producto nos imprima un item

    //key es para evitar doble renderizado en react
    //enviamos el producto que se mapea de category, por cada producto imprima cart
    <div className="bg-yellow-50 grid grid-cols-1 gap-y-4 grid-rows-2 gap-30 m-6 p-6 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8  justify-self-center items-center">
            {producto.map(prod =>(
                <Item id={prod.id} name={prod.name} price={prod.price}  img={prod.thumbnail} key={prod.id} />
            ))}  
    </div>


    )
}

export default ItemList