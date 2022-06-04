import { IoMdBeer } from "react-icons/io";
import React from 'react'
import {Link} from 'react-router-dom'
import { useCartContext } from "./CartContext";


const CartWidget = () => {


    const {cart} = useCartContext();
    let itemsCartWidg = 0
    for (let i = 0; i < cart.length; i++) {
        const cant = cart[i].quantity;
        
        itemsCartWidg = itemsCartWidg + cant
        
    }

    return (
        <>
        <div>
            <Link to="/cart"> 
            <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">{itemsCartWidg}</span>
            <IoMdBeer style={{ color: 'white', fontSize: '40px', cursor: 'pointer' }} />
            </Link>

           {/*  {cartClick ?
                <div>
                    <Link to="/cart" className="btn bg-principal text-white">Ver Carrito</Link>
                </div>
                :
                <></>} */}
        </div>
        </>

    )
}
export default CartWidget