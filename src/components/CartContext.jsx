import React, { createContext, useContext, useState } from "react"

const CartContext = createContext() // Se crea el contexto

export const useCartContext = () => useContext(CartContext) //se exporta para poder usar este modulo en otro lugar

const CartContextProvider = ({ children }) => {
	// Logica
	const [cart, setCart] = useState([])

	// Validar si está el item en el carrito
	const isInCart = (id) => cart.find((producto) => producto.id === id) //se recibe un id y se busca el producto en el arreglo.

	// Agregar item al carrito
	const addToCart = (producto, cantidad) => {
		const newCart = [...cart]

		const productoIsInCart = isInCart(producto.id)

		if (productoIsInCart) {
			newCart[
				newCart.findIndex((prod) => prod.id === productoIsInCart.id) //Se busca el indice en el carrito nuevo que armamoss, se busca donde se encuentra el producto le sumamos la cantidad que envio itemcount
			].quantity += cantidad

			setCart(newCart)
			return
		}

		producto.quantity = cantidad
		setCart([...newCart, producto])
	}

	const deleteFromCart = (producto) => {
		const newCart = [...cart]

		const productIsInCart = isInCart(producto.id)

		if (!productIsInCart) {
			return
		}

		const deleteProduct = newCart.filter((prod) => prod.id !== producto.id)

		setCart(deleteProduct)
	}

	const deleteCart = () => setCart([])

	console.log(cart)

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				deleteFromCart,
				deleteCart,
				setCart,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}

export default CartContextProvider
