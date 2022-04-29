import React from 'react'
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
    return (

        <>
            <section className="w-100 bg-yellow-50">
                <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 text-center pt-6">Nuestras Chelas</h2>
                <ItemList></ItemList>
            </section>
        {/* <div class= "text-center bg-slate-500">ItemListContainer {greeting}</div> */}
            
            </>
    )
}

export default ItemListContainer