import './App.css'
import { CartProvider } from './context/CartContext';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Listado de productos'}/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Listado de productos por categoría: '}/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<Cart />}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>  
    </>
  );
}

export default App
