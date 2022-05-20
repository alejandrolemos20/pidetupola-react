
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"
import Loader from "./Loader"


// Lo mismo que utem list, armamos un listado de categorias de producto, se recibe el id de los parametros, en el use effect, si no hay productos que traiga todos, sino traiga toda la respuesta pero solo setee el id.

//se llama item detail al final y se le entrega producto
const ItemDetailContainer = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() =>
            setIsLoading(false),
            2000
        );
    }, []);

    return (
        <>
            <div className="block w-100 h-screen bg-yellow-50">

                <div className="relative bg-yellow-50 text-center flex flex-col justify-center items-center">

                    {isLoading && <><h1 className="text-center pt-24 text-2xl animate-bounce">Cargando tus chelas</h1><Loader size={50} color="black" /></>}
                    {!isLoading && <><h1 className="text-4xl font-extrabold tracking-tight text-gray-900 text-center pt-6">Nuestras Chelas </h1><ItemDetail></ItemDetail></>}
                </div>

            </div>
            
        </>
    )
}

export default ItemDetailContainer
