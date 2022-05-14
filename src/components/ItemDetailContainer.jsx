import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getItem } from "../data/chelas"
import ItemDetail from "./ItemDetail"

// Lo mismo que utem list, armamos un listado de categorias de producto, se recibe el id de los parametros, en el use effect, si no hay productos que traiga todos, sino traiga toda la respuesta pero solo setee el id.

//se llama item detail al final y se le entrega producto
const ItemDetailContainer = () => {
	const [product, setProduct] = useState({}) 
	const { id } = useParams()

	useEffect(() => {
		if (id === undefined) {
			getItem().then((resp) => setProduct(resp))
		} else {
			getItem().then((resp) => setProduct(resp[id]))
		}
	}, [id])
	return (
		<>
			<div className="py-6  items-center justify-center bg-yellow-50">
				<ItemDetail producto={product} />
			</div>
		</>
	)
}

export default ItemDetailContainer
