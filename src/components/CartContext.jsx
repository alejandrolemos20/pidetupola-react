import { addDoc, collection, doc, getFirestore, setDoc, Timestamp } from "firebase/firestore"
import React, { createContext, useContext, useState } from "react"
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

const CartContext = createContext() // Se crea el contexto

export const useCartContext = () => useContext(CartContext) //se exporta para poder usar este modulo en otro lugar

const CartContextProvider = ({ children }) => {
    // Logica
    const [cart, setCart] = useState([]) //guardamos los productos

    //Elementos del comprador de la orden: 
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [compra, setCompra] = useState("");

    // Validar si está el item en el carrito
    const isInCart = (id) => cart.find((producto) => producto.id === id) //se recibe un id y se busca el producto en el arreglo.

    // Agregar item al carrito
    const addToCart = (producto, cantidad) => { //recibe
        const newCart = [...cart] //desarmo cart

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
        Swal.fire({
            title: '¿Seguro que quieres eliminar tu pola del carrrito?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Sí',
            denyButtonText: 'No',
            customClass: {
                actions: 'my-actions',
                cancelButton: 'order-1 right-gap',
                confirmButton: 'order-2',
                denyButton: 'order-3',
            }
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Producto Eliminado!', '', 'success')
                const newCart = [...cart]
                const productIsInCart = isInCart(producto.id)

                if (!productIsInCart) {
                    return
                }

                const deleteProduct = newCart.filter((prod) => prod.id !== producto.id)

                setCart(deleteProduct)


            } else if (result.isDenied) {
                Swal.fire('Entendido', '', 'info')
            }
        })

    }

    const deleteCart = () => {
        Swal.fire({
            title: '¿Seguro que quieres elimnar tus polas del carrito?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Sí',
            denyButtonText: 'No',
            customClass: {
                actions: 'my-actions',
                cancelButton: 'order-1 right-gap',
                confirmButton: 'order-2',
                denyButton: 'order-3',
            }
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Producto Eliminado!', '', 'success')
                setCart([])

            } else if (result.isDenied) {
                Swal.fire('Entendido', '', 'info')
            }
        })
    }

    //Suma de total de productos y costo total

    const productsCount = () => {
        return cart.reduce((total, p) => (total += p.quantity), 0);
    };

    const getGrandTotal = () => {
        return cart.reduce((total, p) => (total += p.price * p.quantity), 0);
    };
    // Obtener id para la orden de compra
    const addOrder = async (order) => {
        const db = getFirestore();
        const docSnap = await addDoc(collection(db, "orders"), order)
        return docSnap.id
    }
    //Funciones para armar órdenes de compra en Firebase

    const manejarCompra = (e) => {
        e.preventDefault();

        const date = Timestamp.fromDate(new Date())

        const buyerData = {
            buyer: {
                name,
                phone,
                email,
                confirmEmail
            },

            items: cart,
            date: date.toDate(),
            total: getGrandTotal()
        }

        setCompra(buyerData);

        // Add a new document with a generated id.
        
        if (compra.buyer.name !== '' && compra.buyer.phone !== '' && compra.buyer.email !== '') {
        const db = getFirestore();
        const OrderCollection = addDoc(collection(db, "orders"), buyerData)

            .then(resp => Swal.fire({
                title: "Tu orden fue enviada con éxito!",
                text: `Gracias por tu compra! Te hemos enviado un correo a ${compra.buyer.email}. Tu n° de orden es: ${resp.id}`,
                icon: "success",
                button: "Ok",
                
            }))
            .then(resp => deleteCart())
            .catch(err => Swal.fire("Un error ha ocurrido", "Inténtalo nuevamente", "error"))
    } else {
        Swal.fire({
            title: "Hubo un error en tus datos",
            text: "Revisa el formulario de tus datos y vuelve a enviar el pedido",
            icon: "error",
            button: "Ok",
        })
}
    }

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
            setName,
            name,
            setPhone,
            phone,
            email,
            setEmail,
            setConfirmEmail,
            confirmEmail,
            manejarCompra,
            compra
        }}
    >
        {children}
    </CartContext.Provider>
)
}

export default CartContextProvider
