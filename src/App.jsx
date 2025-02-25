import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CartContextProvider } from "./context/cartContext";
import CartContainer from "./components/CartContainer";
function App() {

  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <CartContainer />
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Todos Nuestros Productos" />} />
            <Route path="/category/:categoryId" element={<ItemListContainer greeting="Productos por Categoria" />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<div><h1>Error 404</h1></div>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  )
}

export default App;
