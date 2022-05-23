import React from 'react';
import { useCartContext } from "./CartContext"
// import CartForms from '../CartForms/CartForms';
import {Link} from 'react-router-dom';

function Cart() {

    const { cart, deleteFromCart, deleteCart, getGrandTotal, productsCount } = useCartContext();

   /*  const handleDel = (p) => {
        deleteFromCart(p.id);
    }; */


    return(
        <>
        <div className="bg-yellow-50 grid grid-flow-col auto-cols-auto">
        <div className="h-full">
        <div className="buttonBack">
            <Link to="/">
            <button className="bg-sky-600 hover:bg-sky-700 m-3">Volver</button>
            </Link>
            <button className="bg-red-500 hover:bg-red-400 m-3" onClick={deleteCart}>Borrar todo</button>
        </div> 
        <div className="grid grid-cols-1 m-4"><h3>Tu carrito de Compras</h3></div>
        {cart.length === 0 ?
            (
                <>
                <p className="p-2 m-4">Tu carrito está vacío :( </p>
                <p className="p-2 m-4">Haz click en "Volver" para elegir tus polas:)</p>
                </>
                )
            :cart.map((product) => {
                return(
                    <div className="grid grid-cols-6 text-center m-8" key={product.id}>
                        <p className="p-2 text-base">Id de tu producto: {product.id}</p>
                        <p className="p-2 text-base">Cantidad: {product.quantity}</p>
                        <p className="p-2 text-base">Título: {product.name}</p>
                        <p className="p-2 text-base">Precio por unidad: ${product.price}k</p>
                        <p className="p-2 text-base">Precio Total: ${product.price * product.quantity}k</p>
                        <button className="bg-red-500 hover:bg-red-400" onClick={() => deleteFromCart(product)}>X</button>
                    </div> 
                )
            })
            }
        </div>
        <div className="m-4 p-4 text-base text-center">
            <p>Cantidad de Productos:</p>
            <p>{productsCount()}</p>
            <p>Total Compra:</p>
            <p>${getGrandTotal()}</p>
        </div>
        </div>
        <div>
            {/* <CartForms /> */}
        </div>
        </>
    )
}

export default Cart; 