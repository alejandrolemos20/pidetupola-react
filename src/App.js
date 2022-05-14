
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CartContextProvider from './components/CartContext';
import AppContextProvider from './components/AppContext';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
    <AppContextProvider>
				<CartContextProvider>
					<BrowserRouter>
						<NavBar />
            <marquee direction="left" bgcolor="black" scrollamount="10" className="text-white">¡Compra tu pola artesanal ya!</marquee>
						<Routes>
							<Route
								path="/"
								element={<ItemListContainer greetings={"Tu chela"} />}
							/>
							<Route
								path="/category/:categoryId"
								element={<ItemListContainer greetings={"Tu chela"} />}
							/>
							<Route path="/item/:id" element={<ItemDetailContainer />} />
							{/* <Route path="/cart" element={<Cart />} /> */}
						</Routes>
					</BrowserRouter>
				</CartContextProvider>
			</AppContextProvider>
    

    </>
  );
}

export default App;
