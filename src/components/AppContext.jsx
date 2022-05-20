import { collection, getDocs, getFirestore } from "firebase/firestore"
import React, { createContext, useContext, useEffect, useState } from "react"
import { getItem } from "../data/chelas"

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

const AppContextProvider = ({ children }) => {
	const [products, setProducts] = useState([])

	useEffect(() => {
        const db = getFirestore()
        const polasCollection = collection (db,'items')
        getDocs (polasCollection).then(resp => setProducts(resp.docs.map(it=> ({...it.data()}) )))

    },[])
	return (
		<AppContext.Provider value={{ products }}>{children}</AppContext.Provider>
	)
}

export default AppContextProvider
