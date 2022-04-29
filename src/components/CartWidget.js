import { IoMdBeer } from "react-icons/io";
import React from 'react'

const CartWidget = () => {
    return (
        <a href="" role="button" class="relative flex justify-end top">
            <IoMdBeer style={{ color: 'white', fontSize: '40px' , cursor:'pointer' }} />
            <span class="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">4
            </span>
        </a>

    )
}
export default CartWidget