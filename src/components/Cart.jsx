import React from 'react';
import { useCartContext } from "./CartContext"
import { Link } from 'react-router-dom';
import { FaRegTrashAlt } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import '../styles/button.css';

function Cart() {

    const { cart, deleteFromCart, deleteCart, getGrandTotal, productsCount } = useCartContext();

    return (
        <>
                    {cart.length === 0 ?
                        (
                            <><div className="h-screen  justify-center  bg-yellow-50">
                                <p className="p-2 m-4 text-lg text-center">Tu carrito está vacío :( </p>
                                <p className="p-2 m-4 text-center text-base">Haz click en "Volver" para elegir tus polas</p>
                                <div className="flex justify-center items-center text-center bg-yellow-50 m-3">
                                        <Link to="/">
                                            <FaArrowCircleLeft className="leading-5 mr-6  text-3xl cursor-pointer font-serif "/>
                                        </Link>
                                </div>
                            </div>
                            </>
                        )
                        : (
                                
                            <div className="h-screen  bg-yellow-50">
                                <div className="flex flex-col justify-between w-full lg:max-w-7xl ">
                                    <div className="flex justify-center items-center text-center bg-yellow-50 m-3">
                                        <Link to="/">
                                            <FaArrowCircleLeft className="leading-5 mr-6  text-3xl cursor-pointer font-serif "/>
                                        </Link>
                                        <FaRegTrashAlt className="leading-5 rounded-md border-none text-3xl cursor-pointer text-red-600	" onClick={deleteCart}/>
                                    </div>

                                    <h1 className="font-medium text-lg text-gray-800 tracking-wider leading-tight uppercase self-center mb-6">Carrito</h1>

                                    <table className="ml-auto mr-auto md:ml-20 w-full text-center inline-block overflow-x-auto whitespace-nowrap">

                                        {/* columnas */}
                                        <thead className="h-10 text-center">
                                            <tr className="border-gray-200 border-b">
                                                <th className="font-medium text-xs text-center text-gray-700 tracking-wider leading-loose uppercase  pl-4">Producto</th>
                                                <th className="font-medium text-xs text-center text-gray-700 tracking-wider leading-loose uppercase px-6 lg:px-16 xl:px-32">Precio</th>
                                                <th className="font-medium text-xs text-center text-gray-700 tracking-wider leading-loose uppercase px-6 md:px-2 lg:px-8 xl:px-12">Cantidad</th>
                                                <th className="font-medium text-xs text-center text-gray-700 tracking-wider leading-loose uppercase px-6 md:px-2 lg:px-16 xl:px-28">Subtotal</th>
                                                <th />
                                            </tr>
                                        </thead>

                                        {/* Carrito */}
                                        <tbody className="w-full text-center">
                                            {cart.map((product) => (

                                                <tr key={product.id} className="border-gray-200 border-b">
                                                    <th className="flex flex-row justify-left items-center pr-40 md:pr-0">
                                                        <Link to={`/item/${product.id}`}>
                                                        <img className="p-4 hidden md:h-full md:flex md:w-48 lg:w-48" src={product.thumbnail} alt={product.name} />
                                                        </Link>
                                                        <div className="flex flex-col text-left">
                                                            <p className="font-black text-center ml-2 text-xs text-gray-700 tracking-wider leading-loose uppercase">{product.name}</p>
                                                        </div>
                                                    </th>
                                                    <th className="font-light text-sm text-gray-600 tracking-wide leading-normal lowercase">${(product.price)}k</th>
                                                    <th className="font-light text-sm text-gray-600 tracking-wide leading-normal lowercase">{product.quantity}</th>
                                                    <th className="font-light text-sm text-gray-600 tracking-wide leading-normal lowercase">${product.price * product.quantity}k</th>
                                                    <th className="px-4 lg:pl-2 xl:pl-24">
                                                        <FaRegTrashAlt className='justify-center items-center text-center ml-10' style={{ color: 'black', fontSize: '20px', cursor: 'pointer' }} onClick={() => deleteFromCart(product)} />
                                                    </th>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

                                    
                                    <div className="flex flex-col md:flex-row justify-end mt-6 mb-3 mx-4">

                                        {/* Resúmen de compra */}
                                        <div className="flex flex-col self-start w-full md:w-2/5">
                                            <div className="flex flex-row justify-between font-light text-sm text-gray-600 tracking-wide leading-normal lowercase ">
                                                <p>Cantidad de items:</p>
                                                <p>{productsCount()}</p>
                                            </div>
                                            <div className="flex flex-row justify-between font-light text-sm text-gray-600 tracking-wide leading-normal lowercase " >
                                                <p>Gastos de envío:</p>
                                                <p>¡Envío gratis!</p>
                                            </div>
                                            <div className="flex flex-row justify-between font-semibold text-sm text-gray-600 tracking-wide leading-normal lowercase">
                                                <p>TOTAL:</p>
                                                <p>${getGrandTotal()}k</p>
                                            </div>
                                            <div className="flex flex-row justify-center ">
                                            <Link to='/checkout'className='LINK'><svg className='SVG'><rect></rect></svg>Pagar</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    
        </>

    )
}

export default Cart; 