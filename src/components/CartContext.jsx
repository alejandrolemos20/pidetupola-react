import React, { createContext, useContext, useState } from "react"

const CartContext = createContext() // Se crea el contexto

export const useCartContext = () => useContext(CartContext) //se exporta para poder usar este modulo en otro lugar

const CartContextProvider = ({ children }) => {
	// Logica
	const [cart, setCart] = useState([]) //guardamos los productos

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
    /* const delProduct = (id) => {
        cart.splice(
        cart.findIndex((p) => p.id === id),
        1
        );
        setCart([...cart]);
    }; */
    
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

    //Suma de total de productos y costo total

    const productsCount = () => {
        return cart.reduce((total, p) => (total += p.quantity), 0);
    };
    
    const getGrandTotal = () => {
        return cart.reduce((total , p) => (total += p.price * p.quantity), 0);
    };


	console.log('mi carro',cart)
    console.log('tamaño',cart.length)

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				deleteFromCart,
				deleteCart,
				setCart,
                productsCount,
                getGrandTotal,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}

export default CartContextProvider
