
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CartContextProvider from './components/CartContext';
import AppContextProvider from './components/AppContext';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart'
import NavBar from './components/NavBar';
import Checkout from './components/Checkout';
import Footer from './components/Footer';


function App() {
  return (
    
      <AppContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route
                path="/"
                element={<ItemListContainer greetings={"Tu chela"} />}
              />

              <Route
                path="/category/:categoryId"
                element={<ItemListContainer greetings={"Tu chela"} />}
              />

              <Route
                path="/cart"
                element={<Cart />}
              />
              <Route
                path="/checkout"
                element={<Checkout />}
              />

              <Route path="/item/:id" element={<ItemDetailContainer />} />
            </Routes>
          <Footer />
          </BrowserRouter>
        </CartContextProvider>
      </AppContextProvider>


    
  );
}

export default App;
