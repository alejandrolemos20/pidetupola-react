
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<ItemListContainer></ItemListContainer>}/>
          <Route path='/category/:id' element={<ItemListContainer></ItemListContainer>}/>
          <Route path='/cerveza/:ItemId' element={<ItemDetailContainer></ItemDetailContainer>}/>
        </Routes> 
    </BrowserRouter>
    {/* <ItemListContainer greeting='Bienvenido'></ItemListContainer> */}
    </>
  );
}

export default App;
