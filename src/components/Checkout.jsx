import React from 'react'
import { useCartContext } from './CartContext';



const Checkout = () => {
    const { productsCount, getGrandTotal, setName, setEmail, setPhone, manejarCompra, name, email, phone, setConfirmEmail, confirmEmail, compra } = useCartContext();
    

    function onNameChange(evt) {
        setName(evt.target.value);
    }

    function onEmailChange(evt) {
        setEmail(evt.target.value);
    }

    function secondOnEmailChange(evt) {
        setConfirmEmail(evt.target.value)
    }

    function onPhoneChange(evt) {
        setPhone(evt.target.value);
    }



    return (
        <div className="pt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="flex flex-col md:flex-row justify-center mt-6 mb-3 mx-4">

                    {/* Resúmen de compra */}
                    <div className="flex flex-col self-start w-full md:w-2/5">
                        <div className="flex flex-row justify-between font-light text-sm text-black tracking-wide leading-normal ">
                            <p>Cantidad de items:</p>
                            <p>{productsCount()}</p>
                        </div>
                        <div className="flex flex-row justify-center font-light text-sm text-black  tracking-wide leading-normal lowercase " >
                            
                            <p>¡Envío gratis!</p>
                        </div>
                        <div className="flex flex-row justify-between font-semibold text-sm text-black  tracking-wide leading-normal">
                            <p>TOTAL:</p>
                            <p>${getGrandTotal()}k</p>
                        </div>
                        

                    </div>

                </div>

                <div className="mt-5 m-10 md:mt-0 md:col-span-2">
                    <form onSubmit={manejarCompra}>
                        <div className="shadow overflow-hidden sm:rounded-md">
                            <div className="px-4 py-5 bg-slate-400 sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                            Nombre Completo
                                        </label>
                                        <input
                                            type="text"
                                            name="full-name"
                                            id="name"
                                            autoComplete="given-name"
                                            required
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            onChange={evt => onNameChange(evt)}
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-4">
                                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                            Email
                                        </label>
                                        <input
                                            type="text"
                                            name="email-address"
                                            id="email"
                                            autoComplete="email"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            placeholder="mail@ejemplo.com"
                                            required
                                            onChange={evt => onEmailChange(evt)}
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-4">
                                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                            Confirma tu Email
                                        </label>
                                        <input
                                            type="text"
                                            name="email-second"
                                            id="Secondemail"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            placeholder="mail@ejemplo.com"
                                            required
                                            onChange={evt => secondOnEmailChange(evt)}
                                        />
                                    </div>

                                    <div className="col-span-6">
                                        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                            Dirección
                                        </label>
                                        <input
                                            type="text"
                                            name="street-address"
                                            id="street-address"
                                            autoComplete="street-address"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                            Ciudad
                                        </label>
                                        <input
                                            type="text"
                                            name="city"
                                            id="city"
                                            autoComplete="address-level2"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                                            Teléfono Fijo o Celular
                                        </label>
                                        <input
                                            type="number"
                                            name="phone"
                                            id="phoneNumber"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            onChange={evt => onPhoneChange(evt)}
                                        />
                                    </div>


                                </div>
                            </div>
                            <div className="px-4 py-3 bg-slate-600 text-center sm:px-6">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    disabled={!(name !== "" && phone !== "" && email !== "" && confirmEmail === email)}
                                >
                                    COMPRAR
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <br />
        </div>

    )
}

export default Checkout