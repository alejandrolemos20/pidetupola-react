import React from 'react';
import { useState } from 'react';


const ItemCount = ({ initial, stock, onAdd }) => {
    
    const [cantidad, setCantidad] = useState(initial);

    const addProduct = (num) => {
        setCantidad(cantidad+ num);
    };

    return (
        <div className="grid">
            <div className="grid w-32 h-12 font-semibold text-2xl mt-2 mr-auto ml-auto mb-0 grid-rows-1 grid-cols-3">
                <button
                    className="text-center text-black font-bold w-full h-full border-gray-700 border border-solid text-2xl transition-all duration-200 ease-out hover:border-none bg-orange-400 disabled:opacity-50" //bg-amber-400	hover:bg-amber-500 rounded md:rounded-lg
                    onClick={() => addProduct(-1)}
                    disabled={cantidad === initial ? true : null}
                >
                    -
                </button>
                <span className="text-center text-black font-bold h-full pt-2 bg-white"> {cantidad}</span>
                <button
                    className="text-center text-black font-bold w-full h-full border-gray-700 border border-solid text-2xl transition-all duration-200 ease-out hover:border-none bg-orange-400 disabled:opacity-50" //bg-amber-400	hover:bg-amber-500 rounded md:rounded-lg
                    onClick={() => addProduct(+1)}
                    disabled={cantidad === stock ? true : null}
                >
                    +
                </button>
            </div>

            <button
                className="md:rounded-lg leading-5 rounded-md bg-orange-400 border-none text-base mt-5 ml-auto mr-auto w-24 h-8 cursor-pointer font-mono font-bold hover:bg-orange-500"
                onClick={() => onAdd(cantidad)}
                disabled={stock === 0 ? true : null}
            >
                Añadir
            </button>
        </div>
    );
};

export default ItemCount;
